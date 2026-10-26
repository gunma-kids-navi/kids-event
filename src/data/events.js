/**
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
export const EVENTS = [
  {
    "id": 1,
    "title": "群桐祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "桐生市",
    "venue": "群馬大学 理工学部（桐生キャンパス）",
    "startDate": "2026-10-10",
    "endDate": "2026-10-11",
    "tags": [
      "学園祭",
      "大学",
      "桐生市"
    ],
    "desc": "群馬大学 理工学部（桐生キャンパス）の学園祭。模擬店、ステージ、展示など多彩な企画が行われます。一般公開あり。",
    "url": "https://www.gunma-u.ac.jp/",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 2,
    "title": "シャロン祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "前橋市",
    "venue": "共愛学園前橋国際大学",
    "startDate": "2026-10-17",
    "endDate": "2026-10-18",
    "tags": [
      "学園祭",
      "大学",
      "前橋市"
    ],
    "desc": "共愛学園前橋国際大学の学園祭「シャロン祭」。模擬店、ステージ、展示など。一般公開あり。",
    "url": "https://www.kyoai.ac.jp/",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 3,
    "title": "藤龍祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "高崎市",
    "venue": "高崎健康福祉大学",
    "startDate": "2026-10-17",
    "endDate": "2026-10-18",
    "tags": [
      "学園祭",
      "大学",
      "高崎市"
    ],
    "desc": "高崎健康福祉大学の学園祭「藤龍祭」。模擬店、ステージ、展示など。一般公開あり。",
    "url": "https://toryu-sai.com/",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 4,
    "title": "流星祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "前橋市",
    "venue": "群馬パース大学",
    "startDate": "2026-10-24",
    "endDate": "2026-10-25",
    "tags": [
      "学園祭",
      "大学",
      "前橋市"
    ],
    "desc": "群馬パース大学の学園祭「流星祭」。模擬店、ステージ、展示など。一般公開あり。",
    "url": "\thttps://www.paz.ac.jp",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 5,
    "title": "桔梗祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "高崎市",
    "venue": "育英大学・育英短期大学",
    "startDate": "2026-10-24",
    "endDate": "2026-10-25",
    "tags": [
      "学園祭",
      "大学",
      "高崎市"
    ],
    "desc": "育英大学・育英短期大学の学園祭「桔梗祭」。模擬店、ステージ、展示など。一般公開あり。",
    "url": "https://sites.google.com/view/ikuei-kikyousai/top",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 6,
    "title": "彩霞祭 2026",
    "emoji": "🎓",
    "category": "festival",
    "label": "学園祭",
    "area": "高崎市",
    "venue": "高崎商科大学・短期大学部",
    "startDate": "2026-10-24",
    "endDate": "2026-10-25",
    "tags": [
      "学園祭",
      "大学",
      "高崎市"
    ],
    "desc": "高崎商科大学・短期大学部の学園祭「彩霞祭」。模擬店、ステージ、展示など。一般公開あり。",
    "url": "https://www.tuc.ac.jp/dept/",
    "free": true,
    "age": "どなたでも"
  },
  {
    "id": 7,
    "title": "まえばし元気フェスタ2026",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "ミヤケン元気21（前橋プラザ元気２１）　にぎわいホール",
    "startDate": "2026-06-07",
    "endDate": "2026-06-07",
    "desc": "18の体験型のブースが出展！お子様から大人まで楽しめます。３つ以上のブースをまわって抽選会に参加しよう！「マルエ商品券」が当たる。全員に参加賞をプレゼント。会場３階で『歯と口の健康フェア』同日開催。ぜひご家族、お友達と一緒にご来場ください。",
    "url": "https://www.instagram.com/p/DYrcEO_jaW7/",
    "free": true,
    "age": "どなたでも",
    "tags": [
      "前橋市",
      "体験",
      "祭り"
    ],
    "image": "https://github.com/user-attachments/assets/3eb7cca9-44a3-4c16-aa89-2da2f107cdb0"
  },
  {
    "id": 10153,
    "title": "おもしろ科学教室「ステレオスコープで飛び出す写真を見てみよう」",
    "emoji": "🔬",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月28日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/omoshiro/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 11530,
    "title": "第29回 富士見産業祭 〜スローシティフェステイバルinふじみ〜 開催【令和8年11月3日】",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "富士見公民館周辺、田島なかよし広場公園",
    "startDate": "2026-11-03",
    "endDate": "2026-11-03",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/shimin/fujimi/gyomu/4/17704.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 12321,
    "title": "ゴールデンウィークイベント“昼から星見る最大級の贅沢”",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-05-02",
    "endDate": "2026-05-06",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.astron.pref.gunma.jp/events/26gw.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13692,
    "title": "ふたご座流星群観察会",
    "emoji": "🌟",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-12-12",
    "endDate": "2026-12-14",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "夜、観測広場でふたご座流星群を観察します。3夜連続で開催。",
    "url": "https://www.astron.pref.gunma.jp/events/261212geminids.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13754,
    "title": "飼育室探検ツアー",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎週"
    ],
    "desc": "ぐんま昆虫の森で毎週開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/761007.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 14654,
    "title": "チャレンジクラフト「サンドアートを体験しよう♪」",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月14日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_sand_art/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 15838,
    "title": "駅からハイキング「秋の八ッ場あがつま周遊湖コース」",
    "emoji": "🎈",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "中之条町",
    "startDate": "2026-10-01",
    "endDate": "2026-11-30",
    "tags": [
      "群馬県観光公式",
      "中之条町",
      "吾妻エリア"
    ],
    "desc": "吾妻エリアで開催。詳細は群馬県観光公式サイトをご確認ください。",
    "url": "https://gunma-kanko.jp/events/341",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 17351,
    "title": "群馬サファリパーク　ナイトサファリバスツアー",
    "emoji": "🦁",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-05-02",
    "endDate": "2026-10-31",
    "tags": [
      "じゃらん",
      "富岡市",
      "観光"
    ],
    "desc": "【群馬サファリパーク】群馬サファリパーク　ナイトサファリバスツアー",
    "url": "https://www.jalan.net/event/evt_354915/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 17603,
    "title": "11/14 開催決定 !!『グランツーリスモ』で熱くなれ！【 秋の最速王決定戦】【カーディーラー対抗戦】",
    "emoji": "🎮",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県（詳細は公式サイト）",
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "tags": [
      "群馬eスポーツ連合",
      "eスポーツ",
      "前橋市"
    ],
    "desc": "希薄になっている社員同士のコミュニケーションや企業間交流。",
    "url": "https://gunma-esu.com/news/1637/",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 18855,
    "title": "こどもわくわく劇場「みにおけ屋公演」",
    "emoji": "🎭",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月1日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/wakuwaku_miniokeya/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 21134,
    "title": "草木染で立涌絞りのウールショールを染める（ラック染めコース）",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "草木染で立涌絞りのウールショールを染める（ラック染めコース） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/95782.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 21833,
    "title": "染めてみよう10月　板締め絞りでバンダナを染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "染めてみよう10月 板締め絞りでバンダナを染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/92444.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 23975,
    "title": "自然のふしぎ実験教室【②電気のふしぎ-14:00~15:15】",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-03",
    "endDate": "2026-11-03",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月3日(火･祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/shizen_hushigi_1400/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 24306,
    "title": "ラムサール条約登録地を歩く！ 芳ヶ平湿原とチャツボミゴケ公園散策ツアー受付中！（中之条町）【3月30日（月）～10月31日（土）】",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "中之条町",
    "startDate": "2026-03-01",
    "endDate": "2026-10-31",
    "tags": [
      "群馬県観光公式",
      "中之条町",
      "吾妻エリア"
    ],
    "desc": "吾妻エリアで開催。詳細は群馬県観光公式サイトをご確認ください。",
    "url": "https://gunma-kanko.jp/events/269",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 26916,
    "title": "ペルセウス座流星群観察会",
    "emoji": "🌟",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-08-12",
    "endDate": "2026-08-12",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "深夜まで開館、観測広場で流星を観察します。",
    "url": "https://www.astron.pref.gunma.jp/events/260812perseids.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 27114,
    "title": "2026太田スポーツ・レクリエーション祭",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-23",
    "endDate": "2026-10-25",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/site/home-town-ota/1063572.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 27785,
    "title": "群馬県民の日イベント「ぐんま天文台からの挑戦状 ～星空招隊 救出大作戦～」",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-10-28",
    "endDate": "2026-10-28",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "観覧料が無料に。昼は様々なイベントを、夜は天体観望を開催します。",
    "url": "https://www.astron.pref.gunma.jp/events/26kenmin.html",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 27981,
    "title": "昼からま～ず（火星）惑湧く（ワクワク）すんべぇ！！夜もどう（土星）～かい（海王星）！？",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-09-19",
    "endDate": "2026-09-23",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "様々なイベントを行います。",
    "url": "https://www.astron.pref.gunma.jp/events/26sw.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 28900,
    "title": "水澤観世音の紅葉",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "渋川市",
    "venue": "水澤観世音",
    "startDate": "2026-11-10",
    "endDate": "2026-11-30",
    "tags": [
      "じゃらん",
      "渋川市",
      "観光"
    ],
    "desc": "【水澤観世音】水澤観世音の紅葉",
    "url": "https://www.jalan.net/event/evt_361523/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 29862,
    "title": "紅葉をイメージした木綿のトートバッグを染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "紅葉をイメージした木綿のトートバッグを染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/92150.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30492,
    "title": "Twilight jazz and tap live ~夜空にまつわる音楽~",
    "emoji": "🎵",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-08-12",
    "endDate": "2026-08-12",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "夕暮れの空の下、ジャズとタップダンスが響き合う特別なライブイベント（雨天時は中止）",
    "url": "https://www.astron.pref.gunma.jp/events/260812jazz.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30569,
    "title": "たまむらのおいしいもの大集合 たまむらマルシェ テイクアウト&イートイン 入場無料 玉村町文化センター・小ホール 12:00〜売り切れ次第終了",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "渋川市",
    "venue": "渋川市",
    "startDate": "2026-11-08",
    "endDate": "2026-11-08",
    "tags": [
      "群馬県観光公式",
      "渋川市",
      "県央エリア"
    ],
    "desc": "県央エリアで開催。詳細は群馬県観光公式サイトをご確認ください。",
    "url": "https://gunma-kanko.jp/events/345",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30796,
    "title": "少林山七草大祭だるま市",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "少林山達磨寺",
    "startDate": "2027-01-06",
    "endDate": "2027-01-07",
    "tags": [
      "じゃらん",
      "高崎市",
      "観光"
    ],
    "desc": "【少林山達磨寺】少林山七草大祭だるま市",
    "url": "https://www.jalan.net/event/evt_364477/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 32095,
    "title": "自然観察会　秋を楽しむ～落ち葉とドングリ",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "自然観察会 秋を楽しむ～落ち葉とドングリ",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/60678.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 33246,
    "title": "金山城秋まつり2026開催！（金山城跡ガイダンス施設）",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-22",
    "endDate": "2026-10-22",
    "tags": [
      "太田市"
    ],
    "desc": "10月31日に金山城跡ガイダンス施設で秋まつりが行われます",
    "url": "https://www.city.ota.gunma.jp/page/1051075.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 34717,
    "title": "クラフトルーム工作「にこっとちゃん♪かんむり」",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-04",
    "endDate": "2026-11-29",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月4日(水)～ 29日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_nikotto/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 35165,
    "title": "夏休みイベント ～作って＋宿題して＋観望する＝チョー楽しい！～",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-07-18",
    "endDate": "2026-07-20",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "様々なイベントを行います。",
    "url": "https://www.astron.pref.gunma.jp/events/26summer.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 35728,
    "title": "友の会×自然史博物館「群馬県民の日特別企画!!化石ミニ発掘体験」",
    "emoji": "🦕",
    "category": "exhibition",
    "label": "展覧会",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-10-28",
    "endDate": "2026-10-28",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "友の会×自然史博物館「群馬県民の日特別企画!!化石ミニ発掘体験」 2026年10月28日（日） その他",
    "url": "https://www.gmnh.pref.gunma.jp/event/id15417/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 36048,
    "title": "絵画・イラスト展",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-10-23",
    "endDate": "2026-12-16",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "児童や生徒が描いた作品から、受賞作品35作品の写真を天文台で掲示。Webでは学校代表作品等204点を公開。",
    "url": "https://www.astron.pref.gunma.jp/events/../26ka/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 36062,
    "title": "信州の名工による藍の型染実演会～糊置きから染色まで",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "信州の名工による藍の型染実演会～糊置きから染色まで イベント講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/92166.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 36395,
    "title": "第63回　巨樹・古木巡りツアー",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-26",
    "endDate": "2026-10-26",
    "tags": [
      "太田市"
    ],
    "desc": "第63回 巨樹・古木巡りツアー スポーツ・文化・イベント・観光学び・体験",
    "url": "https://www.city.ota.gunma.jp/page/1014237.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 37455,
    "title": "クラフトルーム工作「こすり絵アート」",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-10-01",
    "endDate": "2026-11-03",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "10月1日(木)～11月3日(火・祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_scratch_art/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 37938,
    "title": "カピバラもぐもぐタイム",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/snack-time-capybara/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 39166,
    "title": "【韮川】市民教室「健康麻雀　入門編」",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-26",
    "endDate": "2026-10-26",
    "tags": [
      "太田市"
    ],
    "desc": "【韮川】市民教室「健康麻雀 入門編」",
    "url": "https://www.city.ota.gunma.jp/site/gyousei-center/1049530.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 39199,
    "title": "染めてみよう11月　藍下・重ね染めでシルクストールを染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "染めてみよう11月 藍下・重ね染めでシルクストールを染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/95785.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 39471,
    "title": "第50回県民芸術祭参加事業・県民音楽のひろば　群馬交響楽団　NEW YEAR CONCERT 2027",
    "emoji": "🎵",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2027-01-24",
    "endDate": "2027-01-24",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1065686.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 40723,
    "title": "【11月1日】韮川ふれあいまつり",
    "emoji": "🦁",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/page/1065265.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 42034,
    "title": "双眼鏡で天体を探そう",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "望遠鏡より視野が広い双眼鏡で楽しもう。星ボラがご案内します。",
    "url": "https://www.astron.pref.gunma.jp/events/261114bino.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 42990,
    "title": "ぐんま環境フェスティバル",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "群馬県庁1階県民ホール、県民広場",
    "startDate": "2026-10-31",
    "endDate": "2026-10-31",
    "tags": [
      "じゃらん",
      "前橋市",
      "観光"
    ],
    "desc": "【群馬県庁1階県民ホール、県民広場】ぐんま環境フェスティバル",
    "url": "https://www.jalan.net/event/evt_361528/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43253,
    "title": "ウォーキングゾーン エサやり体験(トラ・ライオン）週末祝のみ",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物",
      "週末・祝日のみ"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/carnivore-feeding-experience/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43400,
    "title": "【中央公民館】子育て支援講座「きらきら笑顔で親子遊び〜Baby版・Kids版〜」を開催します。",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市中央公民館 4階 404スタジオ",
    "startDate": "2026-11-04",
    "endDate": "2026-11-04",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kyoiku/chuokominkan/gyomu/1/49607.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43969,
    "title": "高崎経済大学経済学会　令和8年度第2回学術講演会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "高崎経済大学経済学会 令和8年度第2回学術講演会＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2281.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 44059,
    "title": "ユーザーズミーティング",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-05-31",
    "endDate": "2026-05-31",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "〔要予約〕 「観測体験時間」の情報提供等を行います。",
    "url": "https://www.astron.pref.gunma.jp/events/../senyu/usersm2026.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 44859,
    "title": "パソコン工房「秋のリースをつくろう！」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-07",
    "endDate": "2026-11-07",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月7日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/pc_autumn/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 45580,
    "title": "かやぶき民家見学・昔あそび",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎日"
    ],
    "desc": "ぐんま昆虫の森で毎日開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 48082,
    "title": "ちょこっとプラネタリウム",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月14日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/%e3%81%a1%e3%82%87%e3%81%93%e3%81%a3%e3%81%a8%e3%83%97%e3%83%a9%e3%83%8d%e3%82%bf%e3%83%aa%e3%82%a6%e3%83%a0/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 50595,
    "title": "前橋市手話体験教室",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "K'BIXまえばし福祉会館（前橋市総合福祉会館）",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/fukushibu/shogaifukushi/gyomu/ishisotsushien/47004.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 51359,
    "title": "「高崎経済大学地域科学研究所第24回公開講演会について」",
    "emoji": "🔬",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学地域科学研究所第24回公開講演会について」＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/leafpage/379.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53185,
    "title": "定期歴史講座「かみつけ塾」（10月25日）",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "定期歴史講座「かみつけ塾」（10月25日） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/5542.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53219,
    "title": "マーラもぐもぐタイム",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/snack-time-mara/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53489,
    "title": "こども・子育て相談室(理学療法士)",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-13",
    "endDate": "2026-11-13",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月13日(金)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/sodan_rigaku/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 54065,
    "title": "中学生ボランティア体験活動事業",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-09-17",
    "endDate": "2026-09-17",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/3326.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 54416,
    "title": "秋のバラフェスタ2026を開催します！",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "敷島公園門倉テクノばら園",
    "startDate": "2026-10-17",
    "endDate": "2026-11-08",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kensetsu/koenkanrijimusho/oshirase/34838.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57523,
    "title": "自然のふしぎ実験教室【①空気のふしぎ-10:30~11:45】",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-03",
    "endDate": "2026-11-03",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月3日(火･祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/shizen_hushigi_1030/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57575,
    "title": "「高崎経済大学の地域めぐり」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学の地域めぐり」＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2128.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57601,
    "title": "【令和8年11月15日】休泊地区文化祭 ふれあい広場",
    "emoji": "🦁",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-14",
    "endDate": "2026-11-15",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/site/gyousei-center/1040855.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 59499,
    "title": "チャレンジ！ジャグリング",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月21日(土)・22日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/juggling/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 60410,
    "title": "G-WALK＋アプリで見どころを巡るウォークラリー",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎日"
    ],
    "desc": "ぐんま昆虫の森で毎日開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 62734,
    "title": "スターキャッチコンテスト",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-06-07",
    "endDate": "2026-06-07",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "〔要申込〕 望遠鏡で指定された星を導入する速さを競う大会です",
    "url": "https://www.astron.pref.gunma.jp/events/260607starcatch.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 63187,
    "title": "企画展特別講演会「恐竜研究最前線in2026」",
    "emoji": "🦕",
    "category": "exhibition",
    "label": "展覧会",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-11-15",
    "endDate": "2026-11-15",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "企画展特別講演会「恐竜研究最前線in2026」 2026年11月15日（日） 企画展",
    "url": "https://www.gmnh.pref.gunma.jp/event/id13288/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 63434,
    "title": "ウォーキングサファリエサやり体験（草食動物）",
    "emoji": "🦁",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/herbivore-feeding-experience/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 64327,
    "title": "こどもプラッツ入室申込は随時受け付けています",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-09-30",
    "endDate": "2026-09-30",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/site/kosodate/1028029.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 64427,
    "title": "刀匠による刀剣解説会【同時開催：ふいご祭り】（大隅俊平美術館）",
    "emoji": "🎈",
    "category": "exhibition",
    "label": "展覧会",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "tags": [
      "太田市"
    ],
    "desc": "大隅俊平美術館行事、刀匠による刀剣解説会を紹介します。刀剣、刀作り、刀鍛冶についてなどについて、本田俊正刀匠にお話頂く、解説会です。",
    "url": "https://www.city.ota.gunma.jp/page/1039753.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 64441,
    "title": "秋の特別企画「とどけ！きみのパフォーマンス」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-10-24",
    "endDate": "2026-10-28",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "10月24日(土)～28日(水・群馬県民の日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/performance/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 69889,
    "title": "ひとり親家庭や低所得子育て世帯のこどもに対する大学等受験料助成事業",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-09-14",
    "endDate": "2026-09-14",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/site/kosodate/1042045.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 70222,
    "title": "自然と友達になろう―ネイチャーゲーム",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "自然と友達になろう―ネイチャーゲーム 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/92443.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 70630,
    "title": "【城南公民館】「もしも」に備える防災講座",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "城南公民館",
    "startDate": "2026-12-22",
    "endDate": "2026-12-22",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/shimin/jounan/gyomu/1/51611.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 71097,
    "title": "吾妻観光写真コンクール 入賞作品展示",
    "emoji": "🎈",
    "category": "exhibition",
    "label": "展覧会",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-10-01",
    "endDate": "2026-10-20",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "「第58回吾妻観光写真コンクール」の入賞作品を展示します",
    "url": "https://www.astron.pref.gunma.jp/events/261001photo.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 71136,
    "title": "高崎市少年科学館プラネタリウム「名探偵コナン　閃光の宇宙船(ペイロード)」",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "高崎市少年科学館プラネタリウム「名探偵コナン 閃光の宇宙船(ペイロード)」＜外部リンク＞",
    "url": "https://www.takasaki-foundation.or.jp/t-kagakukan/show-detail.php?&id=36",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 71591,
    "title": "カピバラの入浴タイム",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/capybara-bathing/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 73248,
    "title": "１１月サイエンス・サタデー「化石ミニ発掘体験　北米ジュラ紀編」",
    "emoji": "🦕",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-10-26",
    "endDate": "2026-10-26",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "１１月サイエンス・サタデー「化石ミニ発掘体験 北米ジュラ紀編」 11月14日(土)・21日(土)・28日(土) サイエンス・サタデー",
    "url": "https://www.gmnh.pref.gunma.jp/event/id15055/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 76009,
    "title": "定期歴史講座「かみつけ塾」（11月15日）",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "定期歴史講座「かみつけ塾」（11月15日） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/5542.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 77863,
    "title": "「高崎経済大学の公開講座」（10月15日（木曜日）～12月16日（水曜日）の全10回",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学の公開講座」（10月15日（木曜日）～12月16日（水曜日）の全10回＜外部リンク＞",
    "url": "https://www.tcue.ac.jp/leafpage/382.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 79171,
    "title": "【中央公民館】子育て支援講座「みんなで守ろう！子どもの命と安全〜地域で学ぶ幼児安全法〜」を開催します。",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市中央公民館 3階ホール",
    "startDate": "2027-01-16",
    "endDate": "2027-01-16",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kyoiku/chuokominkan/gyomu/1/50977.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 79300,
    "title": "榛名地域の歴史を知る講演会",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "榛名地域の歴史を知る講演会 文化・芸術講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/95417.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 83391,
    "title": "昆虫観察館スタンプラリー",
    "emoji": "🦋",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎日"
    ],
    "desc": "ぐんま昆虫の森で毎日開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 83466,
    "title": "森のスタンプラリー",
    "emoji": "🌿",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎日"
    ],
    "desc": "ぐんま昆虫の森で毎日開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 83668,
    "title": "開館30周年記念企画展「北米ジュラ紀の恐竜たち」",
    "emoji": "🦕",
    "category": "exhibition",
    "label": "展覧会",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-09-19",
    "endDate": "2026-09-19",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【開催中】開館30周年記念企画展「北米ジュラ紀の恐竜たち」 【後期展示】2026年9月19日(土)～12月6日(日) 企画展",
    "url": "https://www.gmnh.pref.gunma.jp/event/id11471/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 84240,
    "title": "にこっと自然学校「身近なしぜんとあ・そ・ぼ」",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-03",
    "endDate": "2026-11-03",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月3日(火･祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/shizen_asobi/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 84752,
    "title": "スマホやデジカメで月を撮ろう",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-04-25",
    "endDate": "2026-04-25",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "持参したスマホまたはコンパクトデジカメで月の撮影に挑戦できます。",
    "url": "https://www.astron.pref.gunma.jp/events/26digicam.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 87351,
    "title": "フライングショー",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/flying-show/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 87733,
    "title": "第23回たかさき雷舞フェスティバル",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "高崎市"
    ],
    "desc": "第23回たかさき雷舞フェスティバル＜外部リンク＞ イベント",
    "url": "https://takasaki-live.com/",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 90728,
    "title": "草木染で立涌絞りのウールショールを染める（ビワ染めコース）",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "草木染で立涌絞りのウールショールを染める（ビワ染めコース） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/95781.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 91824,
    "title": "花結び講座「干支・未（ひつじ）」（大隅俊平美術館）",
    "emoji": "🌿",
    "category": "exhibition",
    "label": "展覧会",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-25",
    "endDate": "2026-11-26",
    "tags": [
      "太田市"
    ],
    "desc": "太田市立大隅俊平美術館 花結び講座「干支・未（ひつじ）」をご紹介しています。本行事は、参加者がひも結びで来年の干支「未」を作る体験講座です。",
    "url": "https://www.city.ota.gunma.jp/page/1050044.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 92870,
    "title": "レッサーパンダもぐもぐタイム",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/snack-time-sichuan-red-panda/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93059,
    "title": "モルモットの行進",
    "emoji": "🎈",
    "image": null,
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬サファリパーク",
    "startDate": "2026-10-26",
    "endDate": "2027-04-26",
    "tags": [
      "群馬サファリパーク",
      "富岡市",
      "動物"
    ],
    "desc": "群馬サファリパークで毎日開催中のショー・体験イベントです。詳細は公式サイトをご確認ください。",
    "url": "https://safari.co.jp/event/guinea-pig-parade/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93063,
    "title": "あそぼー広場「けん玉・ベーコマであそぼー」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-08",
    "endDate": "2026-11-08",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月8日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/asobo_kendama-koma/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93662,
    "title": "国指定名勝「吾妻峡」の紅葉",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "東吾妻町",
    "venue": "吾妻峡",
    "startDate": "2026-10-20",
    "endDate": "2026-11-08",
    "tags": [
      "じゃらん",
      "東吾妻町",
      "観光"
    ],
    "desc": "【吾妻峡】国指定名勝「吾妻峡」の紅葉",
    "url": "https://www.jalan.net/event/evt_361530/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 94174,
    "title": "第75回企画展「チャーリー博士とめぐる自然史博物館コレクション～標...",
    "emoji": "🌿",
    "category": "exhibition",
    "label": "展覧会",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2027-03-20",
    "endDate": "2027-03-20",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【開催予告】第75回企画展「チャーリー博士とめぐる自然史博物館コレクション～標... 2027年3月20日(土)～5月23日(日) 企画展",
    "url": "https://www.gmnh.pref.gunma.jp/event/id14176/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 96246,
    "title": "はじめての望遠鏡教室",
    "emoji": "🌟",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "ぐんま天文台",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "天文台",
      "中之条町",
      "星"
    ],
    "desc": "〔要申込〕〔応募多数のときは抽選〕 自分で望遠鏡を操作し星を観察します。",
    "url": "https://www.astron.pref.gunma.jp/events/26hajimete.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 97923,
    "title": "伊香保温泉の紅葉",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "渋川市",
    "venue": "伊香保温泉　湯元河鹿橋",
    "startDate": "2026-10-20",
    "endDate": "2026-11-20",
    "tags": [
      "じゃらん",
      "渋川市",
      "観光"
    ],
    "desc": "【伊香保温泉　湯元河鹿橋】伊香保温泉の紅葉",
    "url": "https://www.jalan.net/event/evt_361525/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 97979,
    "title": "熟睡プラ寝たリウム 大人のためのお昼寝プラネ～台湾の夜空～",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月23日(月・勤労感謝の日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/jukusui/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 98073,
    "title": "令和８年度下期イベントガイド",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "令和８年度下期イベントガイド 2026年10月1日(木)～2027年3月31日(水) その他",
    "url": "https://www.gmnh.pref.gunma.jp/event/id14518/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 99355,
    "title": "市民教室（2件）参加者募集",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-14",
    "endDate": "2026-10-14",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1014908.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  }
];
