/**
 * ぐんまこどもイベント 自動収集スクレイパー
 *
 * 実行: node scrape.js
 * 出力: ../src/data/events.js を上書き更新
 *
 * - id 1〜999    : 手動で追加したイベント（src/data/events.js に直接書いたもの） → 保持
 * - id 10000以上 : このスクリプトが自動収集したイベント → 毎回上書き
 *
 * 参照先（スクレイピング対象）:
 *   - 前橋市公式サイト          https://www.city.maebashi.gunma.jp/
 *   - 高崎市公式サイト          https://www.city.takasaki.gunma.jp/
 *   - 太田市公式サイト          https://www.city.ota.gunma.jp/
 *   - 群馬県立自然史博物館      https://www.gmnh.pref.gunma.jp/
 *   - ぐんま天文台              https://www.astron.pref.gunma.jp/
 *   - 群馬サファリパーク        https://safari.co.jp/
 *   - ぐんま昆虫の森            https://www.pref.gunma.jp/site/giw/
 *   - ぐんまこどもの国          https://kodomonokuni.or.jp/event/
 *   - 観音山ファミリーパーク    https://kfp-tomo.org/
 *   - ぐんラボ！               https://www.gunlabo.net/event/
 *   - ウォーカープラス          https://www.walkerplus.com/event_list/ar0310/
 *   - じゃらん                  https://www.jalan.net/event/090000/
 *   - 群馬県観光公式サイト      https://gunma-kanko.jp/events
 *
 * 全国展開時の拡張方法:
 *   WALKER_AREA_CODE と JALAN_PREF_CODE を変更するだけで他県に対応
 *   ウォーカープラス例: ar0110=埼玉, ar0210=栃木, ar0110=埼玉, ar0310=群馬
 *   じゃらん例: 080000=栃木, 090000=群馬, 110000=埼玉
 */

import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { XMLParser } from "fast-xml-parser";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EVENTS_PATH = path.join(__dirname, "..", "src", "data", "events.js");

// 取得するイベントの期間上限（今日から何ヶ月先まで）
const HORIZON_MONTHS = 6;

// ===== 子ども関連キーワード =====
const KIDS_KEYWORDS = [
  "子ども",
  "こども",
  "子供",
  "親子",
  "キッズ",
  "ちびっこ",
  "小学",
  "幼児",
  "保育",
  "児童",
  "少年",
  "少女",
  "工作",
  "体験",
  "ワークショップ",
  "教室",
  "講座",
  "あそび",
  "遊び",
  "自然観察",
  "プラネタリウム",
  "昆虫",
  "動物",
  "キャンプ",
  "冒険",
  "科学館",
  "まつり",
  "祭り",
  "祭",
  "フェスタ",
  "フェスティバル",
];

// ===== 一般イベントアグリゲーター用（ウォーカープラス・じゃらん）の広めキーワード =====
// 明確に子ども向けでなくても家族連れが楽しめるイベントを拾う
const BROAD_FAMILY_KEYWORDS = [
  ...KIDS_KEYWORDS,
  "マルシェ",
  "縁日",
  "花火",
  "ふれあい",
  "牧場",
  "農場",
  "乗馬",
  "ポニー",
  "花まつり",
  "花祭り",
  "スタンプラリー",
  "アスレチック",
  "ハイキング",
  "遠足",
  "運動会",
  "展示",
  "博物館",
  "美術館",
  "鯉のぼり",
  "こいのぼり",
  "ホタル",
  "ほたる",
  "ウォーキング",
  "ウォーク",
  "ガイドウォーク",
  "散策",
  "ツアー",
  "エコツアー",
  "星空",
  "天体",
  "花見",
  "お花見",
  "紅葉",
  "収穫",
  "摘み取り",
];
function isBroadlyFamilyFriendly(text) {
  return (
    BROAD_FAMILY_KEYWORDS.some((kw) => text.includes(kw)) && !isNgContent(text)
  );
}

// ===== 群馬県内市町村名からエリア推定 =====
// 長い名前（郡名付き）を先に並べて部分一致の誤判定を防ぐ
const GUNMA_AREA_NAMES = [
  // 郡名付き（より具体的なので先に判定）
  "佐波郡玉村町",
  "利根郡みなかみ町",
  "利根郡川場村",
  "利根郡片品村",
  "利根郡昭和村",
  "多野郡上野村",
  "多野郡神流町",
  "吾妻郡中之条町",
  "吾妻郡長野原町",
  "吾妻郡嬬恋村",
  "吾妻郡草津町",
  "吾妻郡高山村",
  "吾妻郡東吾妻町",
  "北群馬郡榛東村",
  "北群馬郡吉岡町",
  "甘楽郡下仁田町",
  "甘楽郡南牧村",
  "甘楽郡甘楽町",
  "邑楽郡板倉町",
  "邑楽郡明和町",
  "邑楽郡千代田町",
  "邑楽郡大泉町",
  "邑楽郡邑楽町",
  // 市（郡なし）
  "前橋市",
  "高崎市",
  "桐生市",
  "伊勢崎市",
  "太田市",
  "沼田市",
  "館林市",
  "渋川市",
  "藤岡市",
  "富岡市",
  "安中市",
  "みどり市",
  // 町村（郡なし）
  "中之条町",
  "長野原町",
  "嬬恋村",
  "草津町",
  "高山村",
  "東吾妻町",
  "片品村",
  "川場村",
  "昭和村",
  "みなかみ町",
  "下仁田町",
  "南牧村",
  "甘楽町",
  "板倉町",
  "明和町",
  "千代田町",
  "大泉町",
  "邑楽町",
  "玉村町",
  "榛東村",
  "吉岡町",
  "上野村",
  "神流町",
];

/**
 * テキスト中から群馬県内の市町村名を検出してエリア名を返す。
 * 見つからない場合は null を返す。
 * 改行・タブ等の空白は正規化してから検索する。
 */
function resolveAreaFromText(text) {
  if (!text) return null;
  const normalized = text.replace(/\s+/g, " ");
  for (const name of GUNMA_AREA_NAMES) {
    if (normalized.includes(name)) {
      // "利根郡みなかみ町" → "みなかみ町" のように郡名を除去して短い名前に統一
      return name.includes("郡") ? name.replace(/^[^郡]+郡/, "") : name;
    }
  }
  return null;
}

// ===== カテゴリ推定 =====
function guessCategory(text) {
  if (/工作|ものづくり|クラフト|アート|絵|版画|染め|陶芸/.test(text))
    return { category: "experience", label: "体験・工作" };
  if (/展覧|展示|特別展|企画展|博物館|美術館/.test(text))
    return { category: "exhibition", label: "展覧会" };
  if (
    /キャンプ|自然|昆虫|野鳥|観察|ハイキング|登山|川遊び|アウトドア/.test(text)
  )
    return { category: "nature", label: "自然・アウトドア" };
  if (/まつり|フェスタ|フェスティバル|祭り|縁日/.test(text))
    return { category: "festival", label: "祭り・フェスタ" };
  return { category: "culture", label: "文化・学習" };
}

// ===== 絵文字推定 =====
function guessEmoji(text) {
  if (/恐竜|化石/.test(text)) return "🦕";
  if (/ロケット|宇宙|星|プラネタリウム/.test(text)) return "🌟";
  if (/動物|サファリ|ふれあい/.test(text)) return "🦁";
  if (/昆虫|蝶|虫/.test(text)) return "🦋";
  if (/工作|ものづくり/.test(text)) return "🔧";
  if (/アート|絵|版画|染め/.test(text)) return "🎨";
  if (/キャンプ|テント/.test(text)) return "🏕️";
  if (/自然|植物|花|森/.test(text)) return "🌿";
  if (/科学|実験/.test(text)) return "🔬";
  if (/まつり|フェスタ|縁日/.test(text)) return "🎪";
  if (/劇|舞台|演劇/.test(text)) return "🎭";
  if (/水|川|プール|海/.test(text)) return "💧";
  if (/歴史|古墳|遺跡/.test(text)) return "🏺";
  if (/音楽|コンサート/.test(text)) return "🎵";
  return "🎈";
}

// ===== 安定した ID 生成（タイトル+URLのハッシュ）=====
function stableId(title, url) {
  const hash = crypto
    .createHash("md5")
    .update(title + url)
    .digest("hex");
  return 10000 + (parseInt(hash.substring(0, 5), 16) % 89999);
}

// ===== 日本語の日付パース =====
function parseJapaneseDate(text) {
  // 2026年5月17日 → 2026-05-17
  const m = text.match(/(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/);
  if (m) {
    const y = m[1];
    const mo = String(m[2]).padStart(2, "0");
    const d = String(m[3]).padStart(2, "0");
    return `${y}-${mo}-${d}`;
  }
  return null;
}

// ===== 子ども向けでない内容を除外する NGキーワード =====
const NG_KEYWORDS = [
  // 介護・医療・福祉
  "介護",
  "看護",
  "認知症",
  "ヘルパー",
  "福祉士",
  "訪問介護",
  "在宅医療",
  "緩和ケア",
  "リハビリ",
  // シニア・高齢者向け
  "シニア",
  "高齢者",
  "老人",
  "敬老",
  "熟年",
  // 成人・就労・ビジネス向け
  "成人向け",
  "就職",
  "転職",
  "求人",
  "採用",
  "起業",
  "創業",
  "ビジネス",
  "セミナー",
  "研修",
  "講習会",
  "資格取得",
  "免許",
  // 行政・手続き
  "確定申告",
  "税務",
  "年金",
  "保険料",
  "住民票",
  // 婚活・成人交流
  "婚活",
  "出会い",
  "女子会",
  // 金融・資産運用
  "老後",
  "資産",
  "インフレ",
  "円安",
  "投資",
  "資金運用",
  "株式",
  "NISA",
  "iDeCo",
  "保険見直し",
  "ローン",
  "不動産",
];

// ===== テキストが NG（子ども向けでない）かチェック =====
function isNgContent(text) {
  return NG_KEYWORDS.some((kw) => text.includes(kw));
}

// ===== テキストが子ども関連かチェック =====
function isKidsRelated(text) {
  return KIDS_KEYWORDS.some((kw) => text.includes(kw)) && !isNgContent(text);
}

// ===== 既存の events.js から手動イベント（id < 10000）を読み取る =====
function loadManualEvents() {
  try {
    const content = fs.readFileSync(EVENTS_PATH, "utf-8");
    // EVENTS 配列を eval で取得（安全のため既知ファイルのみ）
    const match = content.match(/const EVENTS\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return [];
    const events = eval(match[1]);
    return events
      .filter((e) => e.id < 10000)
      .map((e) => ({
        ...e,
        // "利根郡みなかみ町" → "みなかみ町" のように郡名を除去して統一
        area:
          e.area && e.area.includes("郡")
            ? e.area.replace(/^[^郡]+郡/, "")
            : e.area,
      }));
  } catch {
    return [];
  }
}

// ===== 太田市 RSS =====
async function scrapeOtaRSS() {
  const url = "https://www.city.ota.gunma.jp/rss/10/list1.xml";
  console.log(`  [太田市 RSS] ${url}`);
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const result = parser.parse(xml);
    const items = result?.rss?.channel?.item || [];
    const list = Array.isArray(items) ? items : [items];

    return list
      .filter(
        (item) =>
          isKidsRelated(item.title || "") ||
          isKidsRelated(item.description || ""),
      )
      .map((item) => {
        const title = item.title || "";
        const link = item.link || "https://www.city.ota.gunma.jp/";
        const desc = (item.description || "")
          .replace(/<[^>]*>/g, "")
          .trim()
          .slice(0, 120);
        const pubDate = item.pubDate
          ? new Date(item.pubDate).toISOString().split("T")[0]
          : null;
        const cat = guessCategory(title + desc);
        return {
          id: stableId(title, link),
          title,
          emoji: guessEmoji(title + desc),
          ...cat,
          area: "太田市",
          venue: "太田市（詳細は公式サイト）",
          startDate: pubDate || new Date().toISOString().split("T")[0],
          endDate: pubDate || new Date().toISOString().split("T")[0],
          tags: ["太田市"],
          desc: desc || "詳細は公式サイトをご確認ください。",
          url: link,
          free: /無料/.test(title + desc),
          age: "詳細は公式サイトへ",
          _source: "太田市RSS",
        };
      });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
    return [];
  }
}

// ===== 高崎市 イベントカレンダー =====
async function scrapeTakasakiCalendar() {
  const baseUrl = "https://www.city.takasaki.gunma.jp/calendar/";
  console.log(`  [高崎市カレンダー] ${baseUrl}`);
  const results = [];

  // 今月と来月を取得
  const now = new Date();
  const months = [
    { y: now.getFullYear(), m: now.getMonth() + 1 },
    {
      y: now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear(),
      m: ((now.getMonth() + 1) % 12) + 1,
    },
  ];

  for (const { y, m } of months) {
    const url = `${baseUrl}index.php?dsp=1&y=${y}&m=${m}&d=1`;
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
        },
      });
      const html = await res.text();
      const $ = cheerio.load(html);

      // 高崎市: 実際のイベントページは /site/ 配下。/soshiki/（部署）などは除外
      $("a[href]").each((_, el) => {
        const $el = $(el);
        const title = $el.text().trim();
        const href = $el.attr("href") || "";
        if (title.length < 8) return;
        // ナビメニュー・部署・フォームリンクを除外
        if (/javascript:|^\/soshiki\/|\/life\/\d|\/site\/foreign|#/.test(href))
          return;
        // /site/ 配下のみ対象（実際のコンテンツページ）
        if (!href.startsWith("/site/") && !href.startsWith("http")) return;

        // 周囲テキストを取得
        const surrounding = $el
          .closest("li, dt, div")
          .text()
          .replace(/\s+/g, " ")
          .trim();

        if (!isKidsRelated(title) && !isKidsRelated(surrounding)) return;

        const fullUrl = href.startsWith("http")
          ? href
          : `https://www.city.takasaki.gunma.jp${href}`;

        // 日付を周囲テキストから抽出
        const startDate =
          parseJapaneseDate(surrounding) ||
          `${y}-${String(m).padStart(2, "0")}-01`;
        const endDateMatch = surrounding.match(
          /から\s*(\d{4}年\s*\d{1,2}月\s*\d{1,2}日)/,
        );
        const endDate = endDateMatch
          ? parseJapaneseDate(endDateMatch[1])
          : startDate;

        const isFree = /無料|申込不要/.test(surrounding);
        const cat = guessCategory(title + surrounding);

        results.push({
          id: stableId(title, fullUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(title + surrounding),
          ...cat,
          area: "高崎市",
          venue: (() => {
            const m2 = surrounding.match(/開催場所[　\s]*([^\n・。]{3,30})/);
            return m2 ? m2[1].trim() : "高崎市（詳細は公式サイト）";
          })(),
          startDate,
          endDate: endDate || startDate,
          tags: ["高崎市"],
          desc:
            surrounding.slice(0, 120).trim() ||
            "詳細は公式サイトをご確認ください。",
          url: fullUrl,
          free: isFree,
          age: "詳細は公式サイトへ",
          _source: "高崎市カレンダー",
        });
      });
    } catch (e) {
      console.warn(`    ⚠ 取得失敗: ${e.message}`);
    }
  }
  return results;
}

// ===== 前橋市 イベントカレンダー =====
async function scrapeMaebashiCalendar() {
  const jsonUrl = "https://www.city.maebashi.gunma.jp/calendar.json";
  console.log(`  [前橋市カレンダー] ${jsonUrl}`);
  const results = [];

  try {
    const res = await fetch(jsonUrl, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const data = await res.json();
    const today = new Date().toISOString().split("T")[0];

    for (const item of data) {
      const title = (item.page_name || "").trim();
      if (!title || title.length < 8) continue;

      const ev = item.event || {};
      const venue = ev.event_place || "前橋市（詳細は公式サイト）";
      const url = item.url || "";
      if (!url) continue;

      // 日付リスト（複数期間対応）から最初の開始日を取得
      const dateList = item.date_list || [];
      if (!dateList.length) continue;
      const startDate = dateList[0][0];
      const endDate = dateList[dateList.length - 1][1] || startDate;

      // 終了日が過去のイベントをスキップ
      if (endDate < today) continue;

      const combined = title + " " + venue;
      if (!isKidsRelated(combined)) continue;

      const cat = guessCategory(combined);
      results.push({
        id: stableId(title, url),
        title: title.slice(0, 80),
        emoji: guessEmoji(combined),
        ...cat,
        area: "前橋市",
        venue: venue.slice(0, 60),
        startDate,
        endDate,
        tags: ["前橋市"],
        desc: "詳細は公式サイトをご確認ください。",
        url,
        free: false,
        age: "詳細は公式サイトへ",
        _source: "前橋市カレンダー",
      });
    }
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }
  return results;
}

// ===== 太田市 イベントカレンダー =====
async function scrapeOtaCalendar() {
  const url = "https://www.city.ota.gunma.jp/calendar/";
  console.log(`  [太田市カレンダー] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    $("a[href]").each((_, el) => {
      const $el = $(el);
      const title = $el.text().trim();
      const href = $el.attr("href") || "";
      if (title.length < 8) return;
      // ナビ・部署・フォームリンクを除外
      if (/javascript:|^\/soshiki\/|\/life\/\d|\/site\/foreign|#/.test(href))
        return;
      if (!href.startsWith("/site/") && !href.startsWith("http")) return;

      const surrounding = $el
        .closest("li, dt, div")
        .text()
        .replace(/\s+/g, " ")
        .trim();
      if (!isKidsRelated(title) && !isKidsRelated(surrounding)) return;

      const fullUrl = href.startsWith("http")
        ? href
        : `https://www.city.ota.gunma.jp${href}`;
      const startDate =
        parseJapaneseDate(surrounding) ||
        new Date().toISOString().split("T")[0];
      const cat = guessCategory(title + surrounding);

      results.push({
        id: stableId(title, fullUrl),
        title: title.slice(0, 80),
        emoji: guessEmoji(title + surrounding),
        ...cat,
        area: "太田市",
        venue: "太田市（詳細は公式サイト）",
        startDate,
        endDate: startDate,
        tags: ["太田市"],
        desc:
          surrounding.slice(0, 120).trim() ||
          "詳細は公式サイトをご確認ください。",
        url: fullUrl,
        free: /無料/.test(surrounding),
        age: "詳細は公式サイトへ",
        _source: "太田市カレンダー",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }
  return results;
}

// ===== 群馬県立自然史博物館 =====
async function scrapeNaturalHistory() {
  const url = "https://www.gmnh.pref.gunma.jp/";
  console.log(`  [群馬県立自然史博物館] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    $("a[href]").each((_, el) => {
      const $el = $(el);
      // タイトルは最初の1行のみ（日付・カテゴリ行を除く）
      const title = $el
        .text()
        .trim()
        .split(/\n/)[0]
        .trim()
        .replace(/^【[^】]*】\s*/, "");
      const href = $el.attr("href") || "";
      if (title.length < 8) return;
      if (/javascript:|#/.test(href)) return;
      // UIテキストを除外
      if (/^(イベント|すべての|団体予約|一覧$|表示$)/.test(title)) return;
      if (
        !/展|イベント|体験|講座|教室|ワークショップ|観察|企画展|特別展/.test(
          title,
        )
      )
        return;

      const fullUrl = href.startsWith("http")
        ? href
        : `https://www.gmnh.pref.gunma.jp${href}`;
      const surrounding = $el
        .closest("li, article, div, p")
        .text()
        .replace(/\s+/g, " ")
        .trim();
      const startDate =
        parseJapaneseDate(surrounding) ||
        new Date().toISOString().split("T")[0];
      const cat = guessCategory(title + surrounding);

      results.push({
        id: stableId(title, fullUrl),
        title: title.slice(0, 80),
        emoji: guessEmoji(title + surrounding),
        ...cat,
        area: "富岡市",
        venue: "群馬県立自然史博物館",
        startDate,
        endDate: startDate,
        tags: ["博物館", "富岡市"],
        desc:
          surrounding.slice(0, 120).trim() ||
          "詳細は公式サイトをご確認ください。",
        url: fullUrl,
        free: /無料/.test(surrounding),
        age: "詳細は公式サイトへ",
        _source: "群馬県立自然史博物館",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }
  return results;
}

// ===== ぐんま昆虫の森 =====
async function scrapeGunmaKonchu() {
  const url = "https://www.pref.gunma.jp/site/giw/629706.html";
  const base = "https://www.pref.gunma.jp/site/giw/";
  console.log(`  [ぐんま昆虫の森] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const today = new Date().toISOString().split("T")[0];
    const horizon = new Date();
    horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
    const endDate = horizon.toISOString().split("T")[0];

    // テーブル行から毎日・毎週開催のプログラムを抽出
    $("table tr").each((_, tr) => {
      const cells = $(tr).find("td");
      if (cells.length < 2) return;
      const name = $(cells[0]).text().trim();
      const period = $(cells[1]).text().trim();
      if (!name || !/毎日|毎週/.test(period)) return;

      const link = $(cells[2]).find("a").attr("href") || "";
      const fullUrl = link
        ? link.startsWith("http")
          ? link
          : `https://www.pref.gunma.jp${link}`
        : base;
      const cat = guessCategory(name);

      results.push({
        id: stableId(name, fullUrl),
        title: name.slice(0, 80),
        emoji: guessEmoji(name),
        ...cat,
        area: "桐生市",
        venue: "ぐんま昆虫の森",
        startDate: today,
        endDate,
        tags: ["昆虫の森", "桐生市", "昆虫", period],
        desc: `ぐんま昆虫の森で${period}開催中の体験プログラムです。詳細は公式サイトをご確認ください。`,
        url: fullUrl || base,
        free: false,
        age: "詳細は公式サイトへ",
        _source: "ぐんま昆虫の森",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [ぐんま昆虫の森] 取得: ${results.length}件`);
  return results;
}

// ===== 群馬サファリパーク =====
async function scrapeGunmaSafari() {
  const url = "https://safari.co.jp/event/";
  console.log(`  [群馬サファリパーク] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const today = new Date().toISOString().split("T")[0];
    const horizon = new Date();
    horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
    const yearEnd = horizon.toISOString().split("T")[0];

    $("li.cont05__item01").each((_, el) => {
      const $el = $(el);
      const href =
        $el.find("a.cont05__imgLink01").attr("href") ||
        $el.find("a").first().attr("href") ||
        "";
      const title = $el.find("p.cont05__ttl01 a").text().trim();
      if (!title || !href) return;

      // 週末祝のみ の場合はタグに反映
      const isWeekendOnly = /週末|祝/.test(title);
      const tags = ["群馬サファリパーク", "富岡市", "動物"];
      if (isWeekendOnly) tags.push("週末・祝日のみ");

      const cat = guessCategory(title);

      // サムネイル画像URL（リスト画面の画像リンクから取得）
      const rawImg =
        $el.find("a.cont05__imgLink01 img").attr("src") ||
        $el.find("img").first().attr("src") ||
        null;
      const imageUrl = rawImg
        ? rawImg.startsWith("http")
          ? rawImg
          : `https://safari.co.jp${rawImg}`
        : null;

      results.push({
        id: stableId(title, href),
        title: title.slice(0, 80),
        emoji: guessEmoji(title),
        image: imageUrl,
        ...cat,
        area: "富岡市",
        venue: "群馬サファリパーク",
        startDate: today,
        endDate: yearEnd,
        tags,
        desc: "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
        url: href,
        free: false,
        age: "詳細は公式サイトへ",
        _source: "群馬サファリパーク",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [群馬サファリパーク] 取得: ${results.length}件`);
  return results;
}

// ===== ぐんま天文台 =====
async function scrapeGunmaTenmonDai() {
  const url = "https://www.astron.pref.gunma.jp/events/events.html";
  const base = "https://www.astron.pref.gunma.jp/events/";
  console.log(`  [ぐんま天文台] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    $("li.monthitem").each((_, section) => {
      const $section = $(section);
      // キャプションから年・月を取得: "2026年5月"
      const captionText = $section.find("caption h2").text().trim();
      const capM = captionText.match(/(\d{4})年\s*(\d{1,2})月/);
      const year = capM ? capM[1] : new Date().getFullYear().toString();
      const monthNum = capM ? capM[2].padStart(2, "0") : "01";

      $section.find("tr").each((_, tr) => {
        const $tr = $(tr);
        const dateTd = $tr.find("td.date");
        const evtTd = $tr.find("td.evt");
        if (!dateTd.length || !evtTd.length) return;

        const dateText = dateTd.text().replace(/\s+/g, "");
        const $link = evtTd.find("a[href]");
        const title = $link
          .find("span.title")
          .text()
          .trim()
          .replace(/\s+/g, " ");
        const href = $link.attr("href") || "";
        const desc = evtTd.find("p").text().trim().slice(0, 120);

        if (!title || title.length < 4 || !href || /javascript:|#/.test(href))
          return;

        // 日付パース: "5月2日から5月6日まで" or "5月23日"
        const dateNums = dateText.match(/\d{1,2}月\d{1,2}日/g) || [];
        const toDate = (d) => {
          const m2 = d.match(/(\d{1,2})月(\d{1,2})日/);
          if (!m2) return `${year}-${monthNum}-01`;
          return `${year}-${m2[1].padStart(2, "0")}-${m2[2].padStart(2, "0")}`;
        };
        const startDate = dateNums[0]
          ? toDate(dateNums[0])
          : `${year}-${monthNum}-01`;
        const endDate = dateNums[1] ? toDate(dateNums[1]) : startDate;

        const fullUrl = href.startsWith("http") ? href : base + href;
        const combined = title + " " + desc;
        const cat = guessCategory(combined);

        results.push({
          id: stableId(title, fullUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(combined),
          ...cat,
          area: "中之条町",
          venue: "ぐんま天文台",
          startDate,
          endDate,
          tags: ["天文台", "中之条町", "星"],
          desc: desc || "詳細は公式サイトをご確認ください。",
          url: fullUrl,
          free: /無料/.test(combined),
          age: "詳細は公式サイトへ",
          _source: "ぐんま天文台",
        });
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [ぐんま天文台] 取得: ${results.length}件`);
  return results;
}

// ===== ぐんまこどもの国 児童会館 =====
async function scrapeGunmaKodomonoKuni() {
  const url = "https://kodomonokuni.or.jp/event/";
  console.log(`  [ぐんまこどもの国] ${url}`);
  const results = [];

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const todayDate = new Date();
    const today = todayDate.toISOString().split("T")[0];
    const horizon = new Date(todayDate);
    horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
    const horizonStr = horizon.toISOString().split("T")[0];
    const currentYear = todayDate.getFullYear();
    const currentMonth = todayDate.getMonth() + 1; // 1-based

    // 月日文字列 → YYYY-MM-DD（年なし前提: 当年 or 翌年）
    function resolveDate(month, day) {
      const year = month < currentMonth - 6 ? currentYear + 1 : currentYear;
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }

    // 日付文字列("5月17日(日)" etc.) → { startDate, endDate }
    function parseDateStr(dateStr) {
      // 全角日付を半角に
      const s = dateStr.replace(/[０-９]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) - 65248),
      );
      // 複数日 "5月31日・6月7日"
      const multiMatch = s.match(
        /(\d{1,2})月(\d{1,2})日[^～〜\-–]*[・,]\s*(\d{1,2})月(\d{1,2})日/,
      );
      if (multiMatch) {
        const start = resolveDate(Number(multiMatch[1]), Number(multiMatch[2]));
        const end = resolveDate(Number(multiMatch[3]), Number(multiMatch[4]));
        return { startDate: start, endDate: end };
      }
      // 範囲 "5月8日～31日" or "5月8日～6月30日"
      const rangeMatch = s.match(
        /(\d{1,2})月(\d{1,2})日[^\d]*[～〜\-–]\s*(?:(\d{1,2})月)?(\d{1,2})日/,
      );
      if (rangeMatch) {
        const startM = Number(rangeMatch[1]),
          startD = Number(rangeMatch[2]);
        const endM = rangeMatch[3] ? Number(rangeMatch[3]) : startM;
        const endD = Number(rangeMatch[4]);
        return {
          startDate: resolveDate(startM, startD),
          endDate: resolveDate(endM, endD),
        };
      }
      // 単日 "5月17日(日)"
      const single = s.match(/(\d{1,2})月(\d{1,2})日/);
      if (single) {
        const d = resolveDate(Number(single[1]), Number(single[2]));
        return { startDate: d, endDate: d };
      }
      return null;
    }

    const seen = new Set();
    $("a[href*='/event/']").each((_, el) => {
      const href = $(el).attr("href") || "";
      if (!href.match(/\/event\/[^/]+\/$/) || seen.has(href)) return;
      seen.add(href);

      const dateText = $(el).find(".event_date").text().trim();
      const title = $(el).find(".event_tit").text().replace(/\s+/g, " ").trim();
      if (!dateText || !title) return;

      const parsed = parseDateStr(dateText);
      if (!parsed) return;
      const { startDate, endDate } = parsed;

      // 終了済みかつ開始日も過ぎているものはスキップ
      if (endDate < today) return;
      // ホライズン超えはスキップ
      if (startDate > horizonStr) return;

      const cat = guessCategory(title);
      results.push({
        id: stableId(title, href),
        title: title.slice(0, 80),
        emoji: guessEmoji(title),
        ...cat,
        area: "太田市",
        venue: "ぐんまこどもの国 児童会館",
        startDate,
        endDate,
        tags: ["ぐんまこどもの国", "太田市", "児童会館"],
        desc: `${dateText}開催。詳細は公式サイトをご確認ください。`,
        url: href,
        free: /無料/.test(title),
        age: "詳細は公式サイトへ",
        _source: "ぐんまこどもの国",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [ぐんまこどもの国] 取得: ${results.length}件`);
  return results;
}

// ===== 観音山ファミリーパーク =====
async function scrapeKannonzanFP() {
  const base = "https://kfp-tomo.org";
  // _embed で featured image を取得。サーバーが HTML を返す場合は _embed なしにフォールバック
  const apiUrlEmbed = `${base}/wp-json/wp/v2/posts?per_page=30&categories=4,5&_embed`;
  const apiUrlPlain = `${base}/wp-json/wp/v2/posts?per_page=30&categories=4,5`;
  console.log(`  [観音山ファミリーパーク] ${apiUrlEmbed}`);
  const results = [];

  try {
    let data;
    let useEmbed = true;
    try {
      const res = await fetch(apiUrlEmbed, {
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
        },
      });
      const text = await res.text();
      if (text.trimStart().startsWith("<")) {
        // HTMLが返ってきた → _embed なしで再試行
        useEmbed = false;
        console.warn(`    ⚠ _embed で HTML レスポンス。フォールバック中...`);
        const res2 = await fetch(apiUrlPlain, {
          signal: AbortSignal.timeout(10000),
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
          },
        });
        data = await res2.json();
      } else {
        data = JSON.parse(text);
      }
    } catch {
      useEmbed = false;
      const res2 = await fetch(apiUrlPlain, {
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
        },
      });
      data = await res2.json();
    }

    const today = new Date().toISOString().split("T")[0];
    const horizon = new Date();
    horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
    const horizonStr = horizon.toISOString().split("T")[0];

    for (const post of data) {
      const titleRaw = post.title?.rendered || "";
      const title = titleRaw
        .replace(/<[^>]+>/g, "")
        .replace(/&[^;]+;/g, " ")
        .trim();
      if (!title) continue;

      const contentRaw = post.content?.rendered || "";
      const content = contentRaw
        .replace(/<[^>]+>/g, " ")
        .replace(/&[^;]+;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const link = post.link || `${base}/archives/${post.id}`;
      const combined = title + " " + content.slice(0, 600);

      // 日付パース: 2026年5月16日 or 2026.5.16 or 2026-05-16
      const datePatterns = [
        ...combined.matchAll(/(\d{4})年(\d{1,2})月(\d{1,2})日/g),
      ].map(
        (m) =>
          `${m[1]}-${String(m[2]).padStart(2, "0")}-${String(m[3]).padStart(2, "0")}`,
      );
      const datePatterns2 = [
        ...combined.matchAll(/(\d{4})\.(\d{1,2})\.(\d{1,2})/g),
      ].map(
        (m) =>
          `${m[1]}-${String(m[2]).padStart(2, "0")}-${String(m[3]).padStart(2, "0")}`,
      );
      const allDates = [...datePatterns, ...datePatterns2].sort();

      let startDate = allDates[0] || null;
      let endDate = allDates[1] || startDate;

      // 日付がない場合はスキップ（企業募集・運営記事など）
      if (!startDate) continue;

      // 期間外はスキップ
      if (startDate > horizonStr || startDate < today) continue;

      const cat = guessCategory(combined);

      // WordPress フィーチャード画像（_embed が成功した場合のみ）
      const featuredMedia = useEmbed
        ? post._embedded?.["wp:featuredmedia"]
        : null;
      const imageUrl =
        Array.isArray(featuredMedia) && featuredMedia[0]?.source_url
          ? featuredMedia[0].source_url
          : null;

      results.push({
        id: stableId(title, link),
        title: title.slice(0, 80),
        emoji: guessEmoji(combined),
        image: imageUrl,
        ...cat,
        area: "高崎市",
        venue: "観音山ファミリーパーク",
        startDate,
        endDate: endDate || startDate,
        tags: ["観音山ファミリーパーク", "高崎市"],
        desc: content.slice(0, 120) || "詳細は公式サイトをご確認ください。",
        url: link,
        free: /無料/.test(combined),
        age: "詳細は公式サイトへ",
        _source: "観音山ファミリーパーク",
      });
    }
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [観音山ファミリーパーク] 取得: ${results.length}件`);
  return results;
}

// ===== ウォーカープラス =====
// 全国展開時: WALKER_AREA_CODE を変更するだけで他県に対応
// 例: ar0110=北海道, ar0210=青森, ar0310=群馬(現在), ar0110=埼玉 等
const WALKER_AREA_CODE = "ar0310"; // 群馬

async function scrapeWalkerPlus() {
  const UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
  const today = new Date().toISOString().split("T")[0];
  const horizon = new Date();
  horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
  const horizonStr = horizon.toISOString().split("T")[0];

  const results = [];
  // 複数ページ取得（ページパラメータが存在すれば）
  for (let page = 1; page <= 5; page++) {
    const url =
      page === 1
        ? `https://www.walkerplus.com/event_list/${WALKER_AREA_CODE}/`
        : `https://www.walkerplus.com/event_list/${WALKER_AREA_CODE}/?page=${page}`;
    console.log(`  [ウォーカープラス] page=${page}`);
    try {
      if (page > 1) await new Promise((r) => setTimeout(r, 1000));
      const res = await fetch(url, {
        signal: AbortSignal.timeout(12000),
        headers: { "User-Agent": UA },
      });
      if (!res.ok) break;
      const html = await res.text();
      const $ = cheerio.load(html);

      let foundOnPage = 0;
      // イベントカードをパース（div.m-mainlist-item）
      $("div.m-mainlist-item").each((_, el) => {
        const $el = $(el);

        // タイトル
        const $titleLink = $el.find("a[href*='/event/']").first();
        const title =
          $el.find(".m-mainlist-item__ttl").text().trim() ||
          $titleLink.text().trim().split("\n")[0].trim();
        if (!title || title.length < 4) return;

        // URL
        const href = $titleLink.attr("href") || "";
        const fullUrl = href.startsWith("http")
          ? href
          : `https://www.walkerplus.com${href}`;
        if (!fullUrl.includes("/event/")) return;

        // 日付テキスト: "5月16日(土)〜5月17日(日)" 等
        const dateText = $el
          .find(".m-mainlist-item-event__period")
          .text()
          .trim();
        // 開催場所
        const placeText = $el
          .find(
            ".m-mainlist-item__map, .m-mainlist-item-event__place, .m-mainlist-item__venue",
          )
          .text()
          .trim();
        // タグ
        const tags = $el
          .find(
            ".m-mainlist-item__tags span, .m-mainlist-item-event__tag, .m-mainlist-item__tag",
          )
          .map((_, t) => $(t).text().trim())
          .get()
          .filter(Boolean);

        // ウォーカープラスは一般アグリゲーターのため広めのフィルタを使用
        const combined =
          title + " " + dateText + " " + placeText + " " + tags.join(" ");
        if (
          !isBroadlyFamilyFriendly(combined) &&
          !tags.some((t) =>
            /家族|子育て|キッズ|子ども|体験|野外|祭|花|マルシェ|フェス/.test(t),
          )
        )
          return;

        // 日付パース（例: "5月16日(土)〜5月17日(日)", "2026年5月16日" 等）
        const now = new Date();
        function resolveWalkerDate(month, day) {
          const y =
            month < now.getMonth() - 4
              ? now.getFullYear() + 1
              : now.getFullYear();
          return `${y}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        }
        let startDate = null,
          endDate = null;
        // 日本語日付 (2026年5月16日)
        const fullDate = dateText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (fullDate) {
          startDate = `${fullDate[1]}-${fullDate[2].padStart(2, "0")}-${fullDate[3].padStart(2, "0")}`;
        }
        // 月日のみ (5月16日 or 5月16日〜17日 or 5月16日〜6月1日)
        if (!startDate) {
          const rangeM = dateText.match(
            /(\d{1,2})月(\d{1,2})日[^～〜]*[～〜](?:(\d{1,2})月)?(\d{1,2})日/,
          );
          if (rangeM) {
            startDate = resolveWalkerDate(Number(rangeM[1]), Number(rangeM[2]));
            const em = rangeM[3] ? Number(rangeM[3]) : Number(rangeM[1]);
            endDate = resolveWalkerDate(em, Number(rangeM[4]));
          } else {
            const single = dateText.match(/(\d{1,2})月(\d{1,2})日/);
            if (single)
              startDate = resolveWalkerDate(
                Number(single[1]),
                Number(single[2]),
              );
          }
        }
        if (!startDate) startDate = today;
        if (!endDate) endDate = startDate;

        // 期間外スキップ
        if (endDate < today || startDate > horizonStr) return;

        // 場所 → area / venue
        const areaMatch = placeText.match(/(.{2,8}[都道府県市区町村])/);
        const area = areaMatch
          ? areaMatch[1].replace(/^群馬県/, "").trim()
          : "群馬県";
        const venue = placeText || area;

        const cat = guessCategory(combined);
        results.push({
          id: stableId(title, fullUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(combined),
          ...cat,
          area: area || "群馬県",
          venue: venue.slice(0, 60),
          startDate,
          endDate,
          tags: [
            ...new Set(["ウォーカープラス", area, ...tags].filter(Boolean)),
          ],
          desc: (placeText ? `【${placeText}】` : "") + title.slice(0, 100),
          url: fullUrl,
          free: /無料/.test(combined),
          age: "詳細は公式サイトへ",
          _source: "ウォーカープラス",
        });
        foundOnPage++;
      });

      // 次ページなければ終了
      if (!html.includes("次へ") && !html.includes("next")) break;
      if (foundOnPage === 0) break;
    } catch (e) {
      console.warn(`    ⚠ 取得失敗: ${e.message}`);
      break;
    }
  }

  console.log(`  [ウォーカープラス] 取得: ${results.length}件`);
  return results;
}

// ===== じゃらん =====
// 全国展開時: JALAN_PREF_CODE を変更するだけで他県に対応
// 例: 010000=北海道, 080000=栃木, 090000=群馬(現在), 110000=埼玉 等
const JALAN_PREF_CODE = "090000"; // 群馬

async function scrapeJalan() {
  const UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
  const today = new Date().toISOString().split("T")[0];
  const horizon = new Date();
  horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
  const horizonStr = horizon.toISOString().split("T")[0];

  const results = [];

  try {
    const url = `https://www.jalan.net/event/${JALAN_PREF_CODE}/`;
    console.log(`  [じゃらん] ${url}`);
    const res = await fetch(url, {
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": UA },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Shift-JIS → UTF-8 変換
    const buf = await res.arrayBuffer();
    const decoder = new TextDecoder("shift_jis");
    const html = decoder.decode(buf);
    const $ = cheerio.load(html);

    // HTML から会場・エリア情報をURLをキーにしてマップ化
    const locationMap = {};
    $("li.item").each((_, el) => {
      const $el = $(el);
      const href =
        $el.find(".item-name a").attr("href") ||
        $el.find("a[href*='/event/']").first().attr("href") ||
        "";
      const evUrl = href.startsWith("//")
        ? "https:" + href
        : href.startsWith("/")
          ? "https://www.jalan.net" + href
          : href;
      if (!evUrl) return;

      // じゃらんエリア名（例: "万座・嬬恋・北軽井沢"）
      const jalanArea = $el.find("p.item-categories").text().trim();

      // 「場所：群馬県○○市　会場名」形式のテキストを取得
      let venueRaw = "";
      $el.find("dl.item-eventInfo dt").each((_, dt) => {
        if ($(dt).text().includes("場所")) {
          venueRaw = $(dt).next("dd").text().trim();
        }
      });

      // "群馬県嬬恋村　東海大学嬬恋高原研修センター" → area=嬬恋村, venue=東海大学...
      const withoutPref = venueRaw.replace(/^群馬県/, "");
      const cityMatch = withoutPref.match(/^(.+?[市町村郡])\s*/);
      const areaName = cityMatch ? cityMatch[1] : jalanArea || "群馬";
      const venueName = cityMatch
        ? withoutPref.slice(cityMatch[0].length).trim() || withoutPref.trim()
        : venueRaw || jalanArea || "群馬";

      locationMap[evUrl] = { area: areaName, venue: venueName };
    });

    // JSON-LD から Event データを抽出（じゃらんは構造化データを埋め込んでいる）
    $('script[type="application/ld+json"]').each((_, el) => {
      let json;
      try {
        json = JSON.parse($(el).html() || "{}");
      } catch {
        return;
      }
      // 配列形式 [{...}]、単体 Event、または @graph 配列
      const items = Array.isArray(json)
        ? json
        : Array.isArray(json["@graph"])
          ? json["@graph"]
          : json["@type"] === "Event"
            ? [json]
            : [];

      for (const ev of items) {
        if (ev["@type"] !== "Event") continue;
        const title = (ev["name"] || "").trim();
        const evUrl = (ev["url"] || "").replace(/\\\//g, "/");
        if (!title || !evUrl) continue;

        const startDate = (ev["startDate"] || "").split("T")[0];
        const endDate = (ev["endDate"] || ev["startDate"] || "").split("T")[0];
        if (!startDate || startDate > horizonStr || endDate < today) continue;

        // HTML locationMap から会場・エリアを取得（JSON-LDのlocationより詳細）
        const htmlLoc = locationMap[evUrl] || {};
        const venue = (htmlLoc.venue || "群馬").slice(0, 60);
        const area = (htmlLoc.area || "群馬").slice(0, 20);

        // じゃらんは一般アグリゲーターのため広めのフィルタを使用
        const combined = title + " " + venue + " " + area;
        if (!isBroadlyFamilyFriendly(combined)) continue;

        const cat = guessCategory(combined);
        results.push({
          id: stableId(title, evUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(combined),
          ...cat,
          area,
          venue,
          startDate,
          endDate,
          tags: [...new Set(["じゃらん", area, "観光"].filter(Boolean))],
          desc: (venue ? `【${venue}】` : "") + title.slice(0, 100),
          url: evUrl,
          free: /無料/.test(combined),
          age: "詳細は公式サイトへ",
          _source: "じゃらん",
        });
      }
    });

    // JSON-LD でイベントが取れなかった場合は HTML からフォールバック
    if (results.length === 0) {
      $(".cassette-event, .item-eventInfo").each((_, el) => {
        const $el = $(el);
        const $a = $el.find("a[href*='/event/']").first();
        const title =
          $a.text().trim() || $el.find(".cassette-event__title").text().trim();
        const href = $a.attr("href") || "";
        if (!title || !href) return;

        const fullUrl = href.startsWith("http")
          ? href
          : `https://www.jalan.net${href}`;
        const dateText = $el
          .find(".cassette-event__date, .item-date")
          .text()
          .trim();
        const placeText = $el
          .find(".cassette-event__place, .item-place")
          .text()
          .trim();
        const combined = title + " " + placeText;
        if (!isKidsRelated(combined)) return;

        const startDate = parseJapaneseDate(dateText) || today;
        const cat = guessCategory(combined);
        results.push({
          id: stableId(title, fullUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(combined),
          ...cat,
          area: placeText.slice(0, 20) || "群馬県",
          venue: placeText.slice(0, 60) || "群馬県",
          startDate,
          endDate: startDate,
          tags: ["じゃらん", "観光"],
          desc: title.slice(0, 100),
          url: fullUrl,
          free: /無料/.test(combined),
          age: "詳細は公式サイトへ",
          _source: "じゃらん",
        });
      });
    }
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [じゃらん] 取得: ${results.length}件`);
  return results;
}

// ===== 群馬県観光公式サイト (gunma-kanko.jp) =====
async function scrapeGunmaKanko() {
  const url = "https://gunma-kanko.jp/events";
  console.log(`  [群馬県観光公式] ${url}`);
  const results = [];

  // gunma-kanko.jp エリア名 → 代表市町村のマッピング
  const AREA_MAP = {
    前橋エリア: "前橋市",
    高崎エリア: "高崎市",
    西部エリア: "富岡市",
    北部エリア: "沼田市",
    利根沼田エリア: "沼田市",
    県央エリア: "渋川市",
    東部エリア: "桐生市",
    吾妻エリア: "中之条町",
    南部エリア: "館林市",
    太田エリア: "太田市",
    伊勢崎エリア: "伊勢崎市",
    館林エリア: "館林市",
  };

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(12000),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    const today = new Date().toISOString().split("T")[0];
    const horizon = new Date();
    horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
    const horizonStr = horizon.toISOString().split("T")[0];

    $("a[href]").each((_, el) => {
      const $el = $(el);
      const href = $el.attr("href") || "";
      // /events/数字 のイベント詳細URLのみ対象
      if (!/\/events\/\d+/.test(href)) return;

      const text = $el.text().replace(/\s+/g, " ").trim();

      // エリア抽出（「〇〇エリア」パターン）
      const areaMatch = text.match(/([^\s]+エリア)/);
      const rawArea = areaMatch ? areaMatch[1] : null;
      const area =
        rawArea && AREA_MAP[rawArea] ? AREA_MAP[rawArea] : rawArea || "群馬県";

      // 日付抽出: 「開催日：YYYY年M月D日」または範囲
      const parsedDates = (() => {
        // YYYY年M月D日（曜）〜M月D日（曜）
        const range1 = text.match(
          /(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日[^〜～\d]*[〜～]\s*(\d{1,2})月\s*(\d{1,2})日/,
        );
        if (range1) {
          const y = range1[1];
          return {
            startDate: `${y}-${range1[2].padStart(2, "0")}-${range1[3].padStart(2, "0")}`,
            endDate: `${y}-${range1[4].padStart(2, "0")}-${range1[5].padStart(2, "0")}`,
          };
        }
        // YYYY年M月D日のみ
        const single = text.match(/(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/);
        if (single) {
          const d = `${single[1]}-${single[2].padStart(2, "0")}-${single[3].padStart(2, "0")}`;
          return { startDate: d, endDate: d };
        }
        return null;
      })();
      if (!parsedDates) return;

      const { startDate, endDate } = parsedDates;
      if (endDate < today || startDate > horizonStr) return;

      // タイトル: 日付・エリア・先頭の数字記号などを除去
      const title = text
        .replace(/開催日[：:][^\s]+\s*/g, "")
        .replace(
          /\d{4}年\d{1,2}月\d{1,2}日[（(）)（）曜日\s・〜～\-–\/a-zA-Z\d]*/,
          "",
        )
        .replace(/[^\s]+エリア/, "")
        .replace(/^[\s１-９\d\s「」。、・\-–]+/, "")
        .trim();
      if (!title || title.length < 4) return;

      // 広めのファミリー向けフィルタ（ぐんラボ・ウォーカープラスと同基準）
      if (!isBroadlyFamilyFriendly(title + " " + rawArea)) return;

      const fullUrl = href.startsWith("http")
        ? href
        : `https://gunma-kanko.jp${href}`;
      const cat = guessCategory(title);

      results.push({
        id: stableId(title, fullUrl),
        title: title.slice(0, 80),
        emoji: guessEmoji(title),
        ...cat,
        area,
        venue: area,
        startDate,
        endDate,
        tags: [...new Set(["群馬県観光公式", area, rawArea].filter(Boolean))],
        desc: `${rawArea ?? "群馬"}で開催。詳細は群馬県観光公式サイトをご確認ください。`,
        url: fullUrl,
        free: /無料/.test(text),
        age: "詳細は公式サイトへ",
        _source: "群馬県観光公式",
      });
    });
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [群馬県観光公式] 取得: ${results.length}件`);
  return results;
}

// ===== ぐんラボ！ イベント =====
async function scrapeGunlabo() {
  const BASE = "https://www.gunlabo.net/event/";
  const today = new Date().toISOString().split("T")[0];
  // 6ヶ月先まで取得
  const endDt = new Date();
  endDt.setMonth(endDt.getMonth() + 6);
  const endDate = endDt.toISOString().split("T")[0];

  const results = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${BASE}index.shtml?start_date=${today}&end_date=${endDate}&page=${page}`;
    console.log(`  [ぐんラボ！] page=${page}`);
    try {
      // レートリミット対策（1秒待機）
      if (page > 1) await new Promise((r) => setTimeout(r, 1000));
      const res = await fetch(url, {
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
        },
      });
      const html = await res.text();
      const $ = cheerio.load(html);

      let foundOnPage = 0;
      $("article.article").each((_, el) => {
        const $el = $(el);
        const titleEl = $el.find("h2.item-title a");
        const title = titleEl.text().trim();
        const href = titleEl.attr("href") || "";
        if (!title || !href) return;

        const desc = $el.find("p.item-article").text().trim();
        const detail = $el
          .find("p.item-detail")
          .text()
          .replace(/&nbsp;/g, " ")
          .trim();
        const dateText = $el.find("p.item-date").text().trim();
        const tags = $el
          .find("p.item-tag a")
          .map((_, a) => $(a).text().trim())
          .get();

        // 家族・子ども向けタグ、またはKIDS_KEYWORDSにマッチするもの
        // ぐんラボ！は品質が高いのでフィルタを緩め：
        // 「家族」「子育て」「キッズ」タグのいずれか、またはKIDS_KEYWORDSにマッチ
        const isFamilyTag = tags.some((t) =>
          /家族|子育て|こども|子ども|キッズ|子供|ワークショップ|学習|体験|自然|野外|祭・伝統行事|花火/.test(
            t,
          ),
        );
        if (!isFamilyTag && !isKidsRelated(title + desc)) return;
        if (isNgContent(title + desc)) return;

        const fullUrl = href.startsWith("http") ? href : BASE + href;

        // 日付パース（単日 or 期間）
        const dateMatches = dateText.match(/\d{4}年\d{1,2}月\d{1,2}日/g) || [];
        const startDate = dateMatches[0]
          ? parseJapaneseDate(dateMatches[0])
          : today;
        const parsedEnd = dateMatches[1]
          ? parseJapaneseDate(dateMatches[1])
          : startDate;

        // 場所パース: 「（館林市 / 施設名）」
        const areaMatch = detail.match(/[（(]\s*([^/／）)]+)/);
        const venueMatch = detail.match(/[/／]\s*([^）)]+)/);
        const area = areaMatch ? areaMatch[1].trim() : "群馬県";
        const venue = venueMatch
          ? venueMatch[1].replace(/\/[^）)]+/g, "").trim()
          : area;

        const cat = guessCategory(title + desc);

        // サムネイル画像URL（リスト画面から取得）
        const rawImg = $el.find("img").first().attr("src") || null;
        const imageUrl = rawImg
          ? rawImg.startsWith("http")
            ? rawImg
            : `https://www.gunlabo.net${rawImg}`
          : null;

        results.push({
          id: stableId(title, fullUrl),
          title: title.slice(0, 80),
          emoji: guessEmoji(title + desc),
          image: imageUrl,
          ...cat,
          area,
          venue,
          startDate,
          endDate: parsedEnd || startDate,
          tags: [...new Set([area, ...tags])],
          desc: desc.slice(0, 120) || "詳細は公式サイトをご確認ください。",
          url: fullUrl,
          free: /無料/.test(title + desc),
          age: "詳細は公式サイトへ",
          _source: "ぐんラボ！",
        });
        foundOnPage++;
      });

      // &raquo; はブラウザで「»」と表示されるHTMLエンティティ
      // foundOnPageが0でも次ページへ進む（フィルタ外れでも全ページたどる）
      const hasNextPage = html.includes("次へ&raquo;");
      hasMore = hasNextPage;
      page++;
      if (page > 15) break; // 安全上限
    } catch (e) {
      console.warn(`    ⚠ 取得失敗: ${e.message}`);
      hasMore = false;
    }
  }

  console.log(`  [ぐんラボ！] 取得: ${results.length}件（フィルタ後）`);
  return results;
}

// ===== 群馬県eスポーツ連合 (gespo) =====
async function scrapeGunmaEsu() {
  const base = "https://gunma-esu.com";
  const listUrl = `${base}/news/`;
  console.log(`  [群馬eスポーツ連合] ${listUrl}`);
  const results = [];

  const today = new Date().toISOString().split("T")[0];
  const horizon = new Date();
  horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
  const horizonStr = horizon.toISOString().split("T")[0];

  try {
    // 1. リストページから記事URLを収集
    const res = await fetch(listUrl, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)" },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const articleUrls = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") || "";
      if (/\/news\/\d+\/?$/.test(href)) {
        const fullUrl = href.startsWith("http") ? href : `${base}${href}`;
        if (!articleUrls.includes(fullUrl)) {
          articleUrls.push(fullUrl);
        }
      }
    });
    console.log(`  [群馬eスポーツ連合] 記事URL取得: ${articleUrls.length}件`);

    // 2. 各記事を並行取得
    const articleResults = await Promise.allSettled(
      articleUrls.map(async (url) => {
        const r = await fetch(url, {
          signal: AbortSignal.timeout(10000),
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; GunmaEventsBot/1.0)",
          },
        });
        const h = await r.text();
        const $a = cheerio.load(h);

        // タイトル
        const title = $a("h1").first().text().trim().replace(/\s+/g, " ");
        if (!title || title.length < 5) return null;

        // 本文テキスト全体（ナビ等を除いたメインコンテンツ）
        const bodyText = $a("body").text().replace(/\s+/g, " ");

        // 日付解析（複数フォーマット対応）
        let startDate = null,
          endDate = null;

        // YYYY年M月D日 形式
        const jpDateMatches = [
          ...bodyText.matchAll(/(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/g),
        ];
        if (jpDateMatches.length > 0) {
          const m = jpDateMatches[0];
          startDate = `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
          if (jpDateMatches.length > 1) {
            const m2 = jpDateMatches[jpDateMatches.length - 1];
            endDate = `${m2[1]}-${m2[2].padStart(2, "0")}-${m2[3].padStart(2, "0")}`;
          }
        }

        // YYYY.M.D 形式（「2026.5.30」など）
        if (!startDate) {
          const dotDates = [
            ...bodyText.matchAll(/(\d{4})\.(\d{1,2})\.(\d{1,2})/g),
          ];
          if (dotDates.length > 0) {
            const m = dotDates[0];
            startDate = `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
            if (dotDates.length > 1) {
              const m2 = dotDates[dotDates.length - 1];
              endDate = `${m2[1]}-${m2[2].padStart(2, "0")}-${m2[3].padStart(2, "0")}`;
            }
          }
        }

        if (!startDate) return null;
        if (!endDate || endDate < startDate) endDate = startDate;

        // 期間外はスキップ
        if (endDate < today || startDate > horizonStr) return null;

        // 会場抽出（括弧が閉じたところで終わる）
        const venueMatch = bodyText.match(
          /[〇○◯]?\s*(?:会場|開催場所)[：:]\s*([^〇〇〇\n。、]{4,50}?)(?:\s*[〇○◯]|\s*$)/,
        );
        const venueRaw = venueMatch ? venueMatch[1].trim() : null;
        // 末尾に残った「〇料金」などを除去
        const venue = venueRaw
          ? venueRaw.replace(/\s*[〇○◯].+$/, "").trim()
          : "群馬県（詳細は公式サイト）";

        // 概要（最初の意味のある文）
        const descMatch = bodyText.match(
          /(?:^|\s)([ぁ-ヶー一-龯a-zA-Z]{10,}[。！？])/,
        );
        const desc = descMatch
          ? descMatch[1].trim()
          : "詳細は公式サイトをご確認ください。";

        const areaResolved =
          resolveAreaFromText(bodyText.slice(0, 800)) || "前橋市";
        const combined = title + " " + bodyText.slice(0, 300);
        const cat = guessCategory(combined);
        const isEsports =
          /マインクラフト|ゲーム|eスポ|espo|LAN|大会|ゲーミング/.test(combined);

        return {
          id: stableId(title, url),
          title: title.slice(0, 80),
          emoji: isEsports ? "🎮" : guessEmoji(combined),
          ...cat,
          area: areaResolved,
          venue: venue.slice(0, 60),
          startDate,
          endDate,
          tags: [
            ...new Set(
              ["群馬eスポーツ連合", "eスポーツ", areaResolved].filter(Boolean),
            ),
          ],
          desc: desc.slice(0, 120),
          url,
          free: /無料/.test(bodyText),
          age: "詳細は公式サイトへ",
          _source: "群馬eスポーツ連合",
        };
      }),
    );

    for (const r of articleResults) {
      if (r.status === "fulfilled" && r.value) {
        results.push(r.value);
      }
    }
  } catch (e) {
    console.warn(`    ⚠ 取得失敗: ${e.message}`);
  }

  console.log(`  [群馬eスポーツ連合] 取得: ${results.length}件`);
  return results;
}

// ===== 明らかにゴミなデータを除外 =====
const UI_TITLES = new Set([
  "イベント検索",
  "イベント一覧",
  "イベント一覧表示",
  "イベント予約団体予約",
  "すべてのイベントを表示",
  "メニューを飛ばして本文へ",
  "複数期間開催のイベント",
  "もうすぐ申込終了！",
  "もうすぐ申込終了",
  "カレンダー表示",
]);
function isValidEvent(ev) {
  if (!ev.url || /javascript:/i.test(ev.url)) return false;
  const title = ev.title?.trim() || "";
  if (title.length < 8) return false;
  if (UI_TITLES.has(title)) return false;
  // 施設名・部署名パターン（20文字以下 かつ 館/課/センター/係で終わる）
  if (title.length <= 20 && /(?:館|課|センター|係|局|事務所|部)$/.test(title))
    return false;
  // カテゴリ名だけのタイトル
  if (
    /^(楽しむ・学ぶ|まつり・イベント|美術館・図書館|花と緑の|ペット・動物|プレゼント・特典|スポーツ|カルチャー|まちの情報|休泊地区|スポーツのまち)$/.test(
      title,
    )
  )
    return false;
  return true;
}

// ===== イベントの重複除去 =====
function deduplicateEvents(events) {
  const seenById = new Map();
  const seenByTitleDate = new Map();
  const result = [];
  for (const ev of events) {
    // ID重複チェック
    if (seenById.has(ev.id)) continue;
    // タイトル+開始日が同じイベントは別URLでも重複とみなす
    const titleDateKey = `${ev.title}|${ev.startDate}`;
    if (seenByTitleDate.has(titleDateKey)) continue;
    seenById.set(ev.id, true);
    seenByTitleDate.set(titleDateKey, true);
    result.push(ev);
  }
  return result;
}

// ===== events.js を生成 =====
function renderEventsJs(events) {
  const header = `/**
 * ぐんまこどもイベント — イベントデータ
 * =========================================
 * id 1〜999    : 手動追加イベント（このファイルを直接編集）
 * id 10000以上 : scraper/scrape.js による自動収集イベント
 *
 * 手動でイベントを追加する場合は id: 1〜999 の範囲で追加してください。
 * 自動収集分は毎週月曜に GitHub Actions が上書きします。
 *
 * カテゴリ: "experience" / "exhibition" / "nature" / "culture" / "festival"
 */

// ↓ 手動追加・編集はここより上（id < 1000）に追加 ↓
export const EVENTS = [\n`;

  const body = events
    .map((ev) => {
      const e = { ...ev };
      delete e._source;
      return "  " + JSON.stringify(e, null, 2).split("\n").join("\n  ");
    })
    .join(",\n");

  const footer = `\n];\n`;
  return header + body + footer;
}

// ===== メイン =====
async function main() {
  console.log("🔍 群馬こどもイベント 自動収集開始...\n");

  // 手動イベントを保持
  const manualEvents = loadManualEvents();
  console.log(`✅ 手動イベント: ${manualEvents.length}件 保持\n`);

  // 各ソースから並行取得
  console.log("📡 各市公式サイトを取得中...");
  const [
    otaRss,
    takasakiCal,
    maebashiCal,
    otaCal,
    naturalHistory,
    tenmonDai,
    safari,
    konchu,
    kodomonoKuni,
    kannonzan,
  ] = await Promise.allSettled([
    scrapeOtaRSS(),
    scrapeTakasakiCalendar(),
    scrapeMaebashiCalendar(),
    scrapeOtaCalendar(),
    scrapeNaturalHistory(),
    scrapeGunmaTenmonDai(),
    scrapeGunmaSafari(),
    scrapeGunmaKonchu(),
    scrapeGunmaKodomonoKuni(),
    scrapeKannonzanFP(),
  ]).then((results) =>
    results.map((r) => (r.status === "fulfilled" ? r.value : [])),
  );

  // ぐんラボ！は順番にページ取得するため別途実行
  console.log("\n📡 ぐんラボ！を取得中...");
  const gunlabo = await scrapeGunlabo().catch(() => []);

  // ウォーカープラス・じゃらん・群馬県観光公式・群馬eスポーツ連合を並行取得
  console.log(
    "\n📡 ウォーカープラス・じゃらん・群馬県観光公式・群馬eスポーツ連合を取得中...",
  );
  const [walkerplus, jalan, gunmaKanko, gunmaEsu] = await Promise.allSettled([
    scrapeWalkerPlus(),
    scrapeJalan(),
    scrapeGunmaKanko(),
    scrapeGunmaEsu(),
  ]).then((rs) => rs.map((r) => (r.status === "fulfilled" ? r.value : [])));

  const scrapedRaw = [
    ...otaRss,
    ...takasakiCal,
    ...maebashiCal,
    ...otaCal,
    ...naturalHistory,
    ...tenmonDai,
    ...safari,
    ...konchu,
    ...kodomonoKuni,
    ...kannonzan,
    ...gunlabo,
    ...walkerplus,
    ...jalan,
    ...gunmaKanko,
    ...gunmaEsu,
  ];

  console.log(`\n📋 自動収集 raw: ${scrapedRaw.length}件`);

  // エリア正規化: "利根郡みなかみ町" → "みなかみ町" など郡名を除去して統一
  const scrapedNormalized = scrapedRaw.map((ev) => ({
    ...ev,
    area:
      ev.area && ev.area.includes("郡")
        ? ev.area.replace(/^[^郡]+郡/, "")
        : ev.area,
  }));

  // ゴミデータ除去
  const scrapedFiltered = scrapedNormalized.filter(isValidEvent);
  console.log(`📋 バリデーション後: ${scrapedFiltered.length}件`);

  // 重複除去
  const scrapedUniq = deduplicateEvents(scrapedFiltered);
  console.log(`📋 重複除去後: ${scrapedUniq.length}件`);

  // エリアが「群馬県」のイベントを市町村に振り分け
  const scrapedAreaResolved = scrapedUniq.map((ev) => {
    if (ev.area !== "群馬県" && ev.area !== "群馬") return ev;
    // title / venue / desc / tags を全結合して市町村名を探す
    const combinedText = [ev.title, ev.venue, ev.desc, ...(ev.tags || [])]
      .filter(Boolean)
      .join(" ");
    const resolved = resolveAreaFromText(combinedText);
    if (resolved) {
      console.log(`  📍 エリア解決: "${ev.title.slice(0, 20)}…" → ${resolved}`);
      return { ...ev, area: resolved };
    }
    // 解決できない場合は「群馬県（県全体）」に統一
    return { ...ev, area: "群馬県（県全体）" };
  });
  const resolvedCount =
    scrapedAreaResolved.filter((ev) => ev.area !== "群馬県（県全体）").length -
    scrapedUniq.filter((ev) => ev.area !== "群馬県" && ev.area !== "群馬")
      .length;
  console.log(`📋 エリア解決: ${resolvedCount}件を市町村に振り分け`);

  // 期間上限フィルタ（今日から HORIZON_MONTHS ヶ月先まで）
  const horizon = new Date();
  horizon.setMonth(horizon.getMonth() + HORIZON_MONTHS);
  const horizonStr = horizon.toISOString().split("T")[0];
  const scrapedInRange = scrapedAreaResolved.filter(
    (ev) => ev.startDate <= horizonStr,
  );
  console.log(
    `📋 期間フィルタ後（${HORIZON_MONTHS}ヶ月以内）: ${scrapedInRange.length}件`,
  );

  // 手動 + 自動 をマージ（手動が優先）
  const allEvents = [...manualEvents, ...scrapedInRange];

  // ID でソート
  allEvents.sort((a, b) => a.id - b.id);

  // events.js を書き出し
  const output = renderEventsJs(allEvents);
  fs.writeFileSync(EVENTS_PATH, output, "utf-8");

  console.log(`\n✅ events.js 更新完了: 合計 ${allEvents.length}件`);
  console.log(
    `   └ 手動: ${manualEvents.length}件 / 自動収集: ${scrapedInRange.length}件`,
  );
  console.log(`   └ 出力: ${EVENTS_PATH}`);
}

main().catch((e) => {
  console.error("❌ エラー:", e);
  process.exit(1);
});
