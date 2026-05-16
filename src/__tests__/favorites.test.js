/**
 * favorites store のユニットテスト
 */

import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFavoritesStore } from "../stores/favorites";

describe("useFavoritesStore", () => {
  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
  });

  it("初期状態はお気に入りが空", () => {
    const store = useFavoritesStore();
    expect(store.favorites).toEqual([]);
  });

  it("toggleFav でお気に入りに追加できる", () => {
    const store = useFavoritesStore();
    store.toggleFav(1);
    expect(store.isFav(1)).toBe(true);
  });

  it("toggleFav で重複追加されない", () => {
    const store = useFavoritesStore();
    store.toggleFav(1);
    store.toggleFav(1);
    expect(store.favorites.length).toBe(0); // 2回目で削除
  });

  it("toggleFav でお気に入りから削除できる", () => {
    const store = useFavoritesStore();
    store.toggleFav(1);
    store.toggleFav(1);
    expect(store.isFav(1)).toBe(false);
  });

  it("複数のお気に入りを管理できる", () => {
    const store = useFavoritesStore();
    store.toggleFav(1);
    store.toggleFav(2);
    store.toggleFav(3);
    expect(store.favorites).toEqual([1, 2, 3]);
  });

  it("localStorage に保存される", () => {
    const store = useFavoritesStore();
    store.toggleFav(5);
    const saved = JSON.parse(localStorage.getItem("gunma_favs"));
    expect(saved).toContain(5);
  });

  it("localStorage から復元される", () => {
    localStorage.setItem("gunma_favs", JSON.stringify([10, 20]));
    const store = useFavoritesStore();
    expect(store.isFav(10)).toBe(true);
    expect(store.isFav(20)).toBe(true);
  });

  // ── BUG #9: localStorage に不正データが保存されていた場合 ──
  it("[BUG #9] localStorage に不正 JSON が保存されているとストアが初期化クラッシュする", () => {
    localStorage.setItem("gunma_favs", "invalid json data");
    // 現在の実装: JSON.parse('invalid json data') → SyntaxError がスローされる
    // setActivePinia 後にストアを使おうとすると例外が発生する
    expect(() => {
      setActivePinia(createPinia());
      useFavoritesStore();
    }).not.toThrow(); // これが失敗 = BUG確認
  });

  // ── BUG #10: 文字列 ID と数値 ID の型混在 ──
  it("[BUG #10] 文字列 ID でお気に入りに追加した場合、数値 ID で検索できない", () => {
    const store = useFavoritesStore();
    // もし何らかの経路で文字列 "1" が保存された場合
    store.favorites.push("1"); // 文字列として push
    // isFav(1) は includes(1) → 数値 1 と文字列 "1" は === 不一致
    expect(store.isFav(1)).toBe(false); // これが true になるべき → バグ
    // 現在の実装は strict equality (===) を使うため型不一致で false
    // この状態でも直接代入しているのでフィルタリングも失敗する
  });

  it("isFav は存在しない ID に false を返す", () => {
    const store = useFavoritesStore();
    expect(store.isFav(999)).toBe(false);
  });
});
