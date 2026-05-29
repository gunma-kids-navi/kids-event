#!/usr/bin/env node
/**
 * GitHub Issue フォームの本文を解析して src/data/events.js にイベントを追加する
 *
 * 環境変数:
 *   ISSUE_BODY_FILE  : Issue本文が書き込まれた一時ファイルのパス
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- 日本語日付パーサー ---

/**
 * 日本語・YYYY-MM-DD など複数形式の日付文字列を YYYY-MM-DD に変換する
 * 年が省略された場合は実行時の年を使用
 */
function parseDate(str) {
  if (!str) return null;
  // 全角数字・記号を半角に変換
  const normalized = str.replace(/[０-９]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0xfee0),
  );

  // YYYY-MM-DD
  let m = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m)
    return `${m[1]}-${String(m[2]).padStart(2, "0")}-${String(m[3]).padStart(2, "0")}`;

  // YYYY年MM月DD日
  m = normalized.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (m)
    return `${m[1]}-${String(m[2]).padStart(2, "0")}-${String(m[3]).padStart(2, "0")}`;

  // MM月DD日（年省略 → 実行時の年）
  m = normalized.match(/(\d{1,2})月(\d{1,2})日/);
  if (m) {
    const year = new Date().getFullYear();
    return `${year}-${String(m[1]).padStart(2, "0")}-${String(m[2]).padStart(2, "0")}`;
  }

  // MM/DD
  m = normalized.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (m) {
    const year = new Date().getFullYear();
    return `${year}-${String(m[1]).padStart(2, "0")}-${String(m[2]).padStart(2, "0")}`;
  }

  console.error(`❌ 日付を解析できません: "${str}"`);
  process.exit(1);
}

// --- Issue本文のパース ---

/**
 * GitHub Issue フォームが出力するMarkdownを解析して
 * { ラベル名: 値 } のオブジェクトを返す
 */
function parseIssueBody(body) {
  const fields = {};
  // "### フィールド名\n\n値" という形式で出力される
  // 先頭が ### で始まる場合も含めて分割
  const sections = body.split(/(?:^|\n)###\s+/);
  for (const section of sections) {
    if (!section.trim()) continue;
    const newlineIdx = section.indexOf("\n");
    if (newlineIdx === -1) continue;
    const header = section.slice(0, newlineIdx).trim();
    const value = section.slice(newlineIdx).trim();
    // 未入力は "_No response_" になる
    if (value && value !== "_No response_") {
      fields[header] = value;
    }
  }
  return fields;
}

// --- カテゴリのマッピング ---

const CATEGORY_MAP = {
  "体験 (experience)": "experience",
  "展示 (exhibition)": "exhibition",
  "自然 (nature)": "nature",
  "文化 (culture)": "culture",
  "祭り・イベント (festival)": "festival",
};

const DEFAULT_EMOJI = {
  experience: "🎨",
  exhibition: "🏛️",
  nature: "🌿",
  culture: "🎭",
  festival: "🎪",
};

// --- メイン処理 ---

function main() {
  // Issue本文の読み込み
  const bodyFile = process.env.ISSUE_BODY_FILE;
  if (!bodyFile) {
    console.error("❌ 環境変数 ISSUE_BODY_FILE が設定されていません");
    process.exit(1);
  }
  if (!fs.existsSync(bodyFile)) {
    console.error(`❌ ファイルが見つかりません: ${bodyFile}`);
    process.exit(1);
  }
  const issueBody = fs.readFileSync(bodyFile, "utf-8");
  const fields = parseIssueBody(issueBody);
  console.log("🔍 解析フィールド:", JSON.stringify(fields, null, 2));

  // 必須フィールドの確認
  const required = [
    "タイトル",
    "カテゴリ",
    "エリア",
    "会場",
    "開始日",
    "終了日",
    "説明",
    "入場料",
  ];
  for (const key of required) {
    if (!fields[key]) {
      console.error(`❌ 必須フィールド「${key}」が未入力です`);
      process.exit(1);
    }
  }

  // events.js を読み込み
  const eventsPath = path.join(__dirname, "../../src/data/events.js");
  const content = fs.readFileSync(eventsPath, "utf-8");

  // 手動追加イベント（id 1〜999）の最大idを探して次のidを決定
  const idMatches = [...content.matchAll(/"id":\s*(\d+)/g)];
  const manualIds = idMatches
    .map((m) => parseInt(m[1]))
    .filter((id) => id >= 1 && id <= 999);
  const nextId = manualIds.length > 0 ? Math.max(...manualIds) + 1 : 1;

  // カテゴリのマッピング
  const category = CATEGORY_MAP[fields["カテゴリ"]] || "festival";

  // イベントオブジェクトの構築（フィールド順を既存データに合わせる）
  const event = { id: nextId };
  event.title = fields["タイトル"];
  event.emoji =
    fields["絵文字（任意、省略で自動設定）"] || DEFAULT_EMOJI[category] || "🎪";
  event.category = category;
  if (fields["ラベル（任意）"]) event.label = fields["ラベル（任意）"];
  event.area = fields["エリア"];
  event.venue = fields["会場"];
  event.startDate = parseDate(fields["開始日"]);
  event.endDate = parseDate(fields["終了日"]);
  if (fields["タグ（カンマ区切り、任意）"]) {
    event.tags = fields["タグ（カンマ区切り、任意）"]
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  event.desc = (fields["説明"] || "")
    .replace(/<[^>]+>/g, "")   // HTMLタグを除去
    .replace(/\n/g, " ")       // 改行をスペースに
    .trim();
  if (fields["URL（任意）"]) event.url = fields["URL（任意）"];
  event.free = fields["入場料"] === "無料";
  event.age = fields["対象年齢（任意、省略で「どなたでも」）"] || "どなたでも";
  if (fields["画像URL（任意）"]) event.image = fields["画像URL（任意）"];

  // JSON文字列化（既存ファイルと同じ2スペースインデント、外側に2スペース）
  const eventJson = JSON.stringify(event, null, 2)
    .split("\n")
    .map((line) => "  " + line)
    .join("\n");

  // 挿入位置: 自動収集イベント（id 10000以上）の直前
  const autoEventRegex = /\n  \{(?=\n\s+"id":\s*\d{5,})/;
  const match = autoEventRegex.exec(content);

  let newContent;
  if (match) {
    // 自動収集イベントの直前に挿入
    newContent =
      content.slice(0, match.index) +
      "\n" +
      eventJson +
      "," +
      content.slice(match.index);
  } else {
    // 自動収集イベントがない場合は配列末尾に追加
    const insertPos = content.lastIndexOf("\n];");
    if (insertPos === -1) {
      console.error("❌ events.js のフォーマットが予期しない形式です");
      process.exit(1);
    }
    newContent = content.slice(0, insertPos) + ",\n" + eventJson + "\n];";
  }

  fs.writeFileSync(eventsPath, newContent, "utf-8");
  console.log(`✅ イベント追加完了: id=${nextId}, title="${event.title}"`);
}

main();
