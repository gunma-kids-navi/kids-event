# ぐんまこどもイベント

群馬県内で開催される子ども向けイベントを集約して表示する静的 Web アプリケーションです。

---

## 概要

- **プロジェクト名**: gunma-kids-events
- **バージョン**: 1.0.0
- **対象**: 群馬県内の子ども向けイベント（体験教室・展覧会・ワークショップ・野外イベント・祭りなど）
- **提供形態**: SPA（シングルページアプリケーション）、静的ファイルとしてデプロイ可能

---

## 技術スタック

| 種別                         | ライブラリ / ツール | バージョン |
| ---------------------------- | ------------------- | ---------- |
| フロントエンドフレームワーク | Vue 3               | ^3.4.0     |
| ビルドツール                 | Vite                | ^5.0.0     |
| 状態管理                     | Pinia               | ^2.1.7     |
| ルーター                     | Vue Router          | ^4.3.0     |
| 地図                         | Leaflet             | ^1.9.4     |
| テストランナー               | Vitest              | ^4.1.6     |
| コンポーネントテスト         | @vue/test-utils     | ^2.4.10    |
| テスト環境                   | happy-dom           | ^20.9.0    |
| Pinia テスト                 | @pinia/testing      | ^1.0.3     |
| スクレイパー HTTP            | node-fetch          | ^3.3.2     |
| スクレイパー HTML解析        | cheerio             | ^1.0.0     |
| スクレイパー XML解析         | fast-xml-parser     | ^4.4.1     |

---

## ディレクトリ構成

```
gunma_event/
├── index.html               # Vite エントリ HTML
├── vite.config.js           # Vite + Vitest 設定
├── package.json
├── src/
│   ├── main.js              # Vue アプリ初期化
│   ├── App.vue              # ルートコンポーネント（ヘッダー・モーダル）
│   ├── style.css            # グローバルスタイル
│   ├── router/
│   │   └── index.js         # Vue Router 定義（Hash モード）
│   ├── composables/
│   │   └── useEvents.js     # 日付・ステータスユーティリティ
│   ├── data/
│   │   ├── events.js        # イベントデータ（EVENTS 配列）
│   │   ├── holidays.js      # 日本の祝日データ（2025〜2027年）
│   │   └── sources.js       # 情報源データ（SOURCES 配列）
│   ├── components/
│   │   ├── EventCard.vue    # カード表示コンポーネント
│   │   ├── EventListItem.vue # リスト行表示コンポーネント
│   │   └── EventModal.vue   # イベント詳細モーダル
│   ├── views/
│   │   ├── HomeView.vue     # ホーム画面
│   │   ├── EventsView.vue   # イベント一覧・フィルター画面
│   │   ├── CalendarView.vue # カレンダー画面
│   │   ├── AreaView.vue     # エリアマップ画面
│   │   └── SourcesView.vue  # 情報源一覧画面
│   └── __tests__/
│       ├── setup.js             # テストグローバルセットアップ
│       ├── useEvents.test.js    # 日付ユーティリティテスト
│       ├── calendarView.test.js # カレンダーロジックテスト
│       ├── dataIntegrity.test.js # データ整合性テスト
│       ├── eventsView.test.js   # フィルター・検索・ソートテスト
│       ├── areaView.test.js     # エリアマップロジックテスト
│       ├── holidays.test.js     # 祝日判定テスト
│       ├── homeView.test.js     # ホーム画面ロジックテスト
│       ├── router.test.js       # ルート定義テスト
│       └── sources.test.js      # 情報源一覧テスト
└── scraper/
    ├── package.json
    └── scrape.js            # イベント自動収集スクリプト
```

---

## セットアップ

```bash
# 依存インストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドプレビュー
npm run preview

# テスト実行（ワンショット）
npm run test

# テスト実行（ウォッチモード）
npm run test:watch
```

### スクレイパー

```bash
cd scraper
npm install
node scrape.js
```

スクレイパーを実行すると `src/data/events.js` の id 10000 以上のイベントが上書きされます。id 1〜999 の手動登録イベントは保持されます。

---

## データ構造

### EVENTS（イベント配列）

各イベントオブジェクトのフィールド:

| フィールド | 型       | 説明                                                                        |
| ---------- | -------- | --------------------------------------------------------------------------- |
| id         | number   | 一意 ID（手動: 1〜999, 自動: 10000〜99999）                                 |
| title      | string   | イベント名（最大 80 文字）                                                  |
| emoji      | string   | 絵文字アイコン                                                              |
| category   | string   | カテゴリ（`experience` / `exhibition` / `nature` / `culture` / `festival`） |
| label      | string   | カテゴリ日本語ラベル                                                        |
| area       | string   | 開催エリア（市区町村名）                                                    |
| venue      | string   | 会場名                                                                      |
| startDate  | string   | 開始日（YYYY-MM-DD）                                                        |
| endDate    | string   | 終了日（YYYY-MM-DD）                                                        |
| tags       | string[] | タグ配列                                                                    |
| desc       | string   | 説明文（最大 120 文字）                                                     |
| url        | string   | 公式サイト URL                                                              |
| free       | boolean  | 無料フラグ                                                                  |
| age        | string   | 対象年齢                                                                    |

### SOURCES（情報源配列）

各情報源オブジェクトのフィールド:

| フィールド      | 型             | 説明                   |
| --------------- | -------------- | ---------------------- |
| name            | string         | 情報源名               |
| icon            | string         | アイコン文字           |
| calendarUrl     | string \| null | イベントカレンダー URL |
| calendarLabel   | string \| null | カレンダーリンクラベル |
| newsletterUrl   | string \| null | 広報紙 URL             |
| newsletterLabel | string \| null | 広報紙リンクラベル     |
| kidsUrl         | string \| null | 子育て情報 URL         |
| kidsLabel       | string \| null | 子育て情報リンクラベル |
| rssUrl          | string \| null | RSS フィード URL       |
| matchUrl        | string \| null | 情報源フィルター照合文字列（URL の一部） |

---

## スクレイパー対応情報源

| 情報源               | 取得方式                                                    |
| -------------------- | ----------------------------------------------------------- |
| 太田市               | RSS フィード                                                |
| 高崎市               | HTML スクレイピング（イベントカレンダー）                   |
| 前橋市               | JSON API（calendar.json）                                   |
| 太田市（カレンダー） | HTML スクレイピング                                         |
| 群馬県立自然史博物館 | HTML スクレイピング                                         |
| 群馬サファリパーク   | HTML スクレイピング                                         |
| ぐんま天文台         | HTML スクレイピング                                         |
| ぐんラボ！           | HTML スクレイピング（ページネーション対応、最大 15 ページ） |

---

## ルーティング

Vue Router の Hash モード（`createWebHashHistory`）を使用します。

| パス        | コンポーネント | 画面         |
| ----------- | -------------- | ------------ |
| `/`         | HomeView       | ホーム       |
| `/events`   | EventsView     | イベント一覧 |
| `/calendar` | CalendarView   | カレンダー   |
| `/area`     | AreaView       | エリアマップ |
| `/sources`  | SourcesView    | 情報源       |

---

## ライセンス

このプロジェクトにはライセンスファイルが含まれていません。
