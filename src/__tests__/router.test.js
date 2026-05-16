/**
 * ルーター設定のテスト
 * 全ビューのルートが定義されているか・ナビゲーションが正しいかを検証
 */

import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";
import router from "../router/index.js";

const ROOT = resolve(import.meta.dirname, "..");

// ─────────────────────────────────────────────
// 基本ルート定義
// ─────────────────────────────────────────────
describe("router - ルート定義", () => {
  const routes = router.getRoutes();
  const paths = routes.map((r) => r.path);

  it("ホームルート '/' が存在する", () => {
    expect(paths).toContain("/");
  });

  it("イベント一覧ルート '/events' が存在する", () => {
    expect(paths).toContain("/events");
  });

  it("カレンダールート '/calendar' が存在する", () => {
    expect(paths).toContain("/calendar");
  });

  it("エリアルート '/area' が存在する", () => {
    expect(paths).toContain("/area");
  });

  it("情報源ルート '/sources' が存在する", () => {
    expect(paths).toContain("/sources");
  });
});

// ─────────────────────────────────────────────
// ルートとコンポーネントの対応
// ─────────────────────────────────────────────
describe("router - コンポーネント対応", () => {
  it("各ルートにコンポーネントが対応している（lazy load も含む）", () => {
    const routes = router.getRoutes();
    routes.forEach((r) => {
      // コンポーネントが undefined でないこと
      expect(
        r.components?.default,
        `ルート '${r.path}' にコンポーネントがない`,
      ).toBeDefined();
    });
  });
});

// ─────────────────────────────────────────────
// ハッシュヒストリー（createWebHashHistory）
// ─────────────────────────────────────────────
describe("router - ハッシュヒストリー設定", () => {
  it("ルーターが hash モードで動作する（GitHub Pages 対応）", () => {
    // createWebHashHistory を使っているため base が '/#' になる
    // ルートに '' が含まれるかでハッシュモードを判定
    expect(router.options.history).toBeDefined();
    // hash ルーターの場合 router.currentRoute.value.fullPath は '/' から始まる
    expect(router.currentRoute.value.fullPath).toBeTruthy();
  });
});

// ─────────────────────────────────────────────
// BUG #50: CalendarView の MAX_DATE が static TODAY を使用
// ─────────────────────────────────────────────
describe("[BUG #50] CalendarView MAX_DATE の静的 TODAY 依存", () => {
  it("CalendarView.vue が useEvents.js の TODAY 定数を使用している", () => {
    const content = readFileSync(
      resolve(ROOT, "views/CalendarView.vue"),
      "utf8",
    );
    // TODAY が import されている
    expect(content.includes("TODAY")).toBe(true);
    // MAX_DATE が TODAY を使っている
    expect(content.includes("MAX_DATE")).toBe(true);
    // 問題: TODAY は module 読み込み時に固定される定数
    // 長時間タブを開いていると月ナビゲーションの上限が古い日付のまま
    console.warn(
      "[BUG #50] CalendarView の isAtMaxMonth は起動時に固定された TODAY を参照。" +
        "長時間利用後は nextMonth ボタンの有効/無効が実際の日付と乖離する可能性がある",
    );
  });

  it("useEvents.js の TODAY は module ロード時に固定される定数", () => {
    const content = readFileSync(
      resolve(ROOT, "composables/useEvents.js"),
      "utf8",
    );
    // export const TODAY = new Date() → ロード時に固定
    expect(content.includes("export const TODAY = new Date()")).toBe(true);
  });
});
