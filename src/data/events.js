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
    "id": 12993,
    "title": "30_キャンプボランティア養成講習会",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-03-06",
    "endDate": "2027-03-06",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "ボランティアスタッフのみんなで、必要な知識や技術を身につけましょう！ たくさんの仲間がいますよ♪皆様の参加、心よりお待ちしております。",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=30_%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E3%83%9C%E3%83%A9%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%E9%A4%8A%E6%88%90%E8%AC%9B%E7%BF%92%E4%BC%9A",
    "free": false,
    "age": "高校生以上(当施設でボランティアスタッフを希望する方対象)"
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 17768,
    "title": "28_冬のファミリーキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-01-23",
    "endDate": "2027-01-23",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "赤城山の冬を満喫しながらご家族で素敵な思い出を作りませんか？ 冬ならではの活動や身体も心もあったまるプログラムをご用意しております♡",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=28_%E5%86%AC%E3%81%AE%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "年少～一般"
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
    "id": 21168,
    "title": "熊野神社　大酉祭",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "熊野神社境内",
    "startDate": "2026-11-07",
    "endDate": "2026-11-07",
    "tags": [
      "じゃらん",
      "前橋市",
      "観光"
    ],
    "desc": "【熊野神社境内】熊野神社　大酉祭",
    "url": "https://www.jalan.net/event/evt_361518/",
    "free": null,
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
    "id": 26464,
    "title": "市民教室「自然な香りとともにクリスマスリース作り」参加者募集",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-10-29",
    "endDate": "2026-10-29",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1014908.html",
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
    "id": 32336,
    "title": "24_HOSHIZORA CAMP",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-12-05",
    "endDate": "2026-12-06",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "その名の通り、星空に関する内容です！ 赤城の山は、空気が澄んでとってもきれいな星が見えます！一緒に星をみよう！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=24_HOSHIZORA%E3%80%80CAMP",
    "free": false,
    "age": "小学生"
  },
  {
    "id": 32387,
    "title": "21_やきいも＆ネイチャークラフト体験",
    "emoji": "🌿",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-11-14",
    "endDate": "2026-11-14",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "自然豊かな赤城山で、美しい景色を見ながらやきいも体験を楽しめます。 ネイチャークラフトで世界に一つしかない、オリジナルの思い出を作りましょう！ 「特別で充実した時間」を家族や仲間同士と満喫しにぜひお越しください♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=21_%E3%82%84%E3%81%8D%E3%81%84%E3%82%82%EF%BC%86%E3%83%8D%E3%82%A4%E3%83%81%E3%83%A3%E3%83%BC%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88%E4%BD%93%E9%A8%93",
    "free": false,
    "age": "年少～一般"
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
    "id": 35423,
    "title": "32_若草キャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-03-28",
    "endDate": "2027-03-31",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "春になって新しい草木や芽が生えてくる頃、のびのびと赤城少年自然の家で野外活動をしてキャンプを楽しもう！ 仲間たちと3泊4日の思い出作りができるよ♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=32_%E8%8B%A5%E8%8D%89%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生～中学生"
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
    "id": 36015,
    "title": "29_ビギナースキー教室",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-02-20",
    "endDate": "2027-02-21",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "赤城少年自然の家で毎年開催されている歴史が長い初心者向けのビギナースキー教室！ スキー技術を習得しながら仲間たちと楽しく集団生活をして絆を深めよう♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=29_%E3%83%93%E3%82%AE%E3%83%8A%E3%83%BC%E3%82%B9%E3%82%AD%E3%83%BC%E6%95%99%E5%AE%A4",
    "free": false,
    "age": "小学生"
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 38719,
    "title": "アウトドアスクール ～11/3黒檜登山に学ぶ～",
    "emoji": "🎈",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-11-03",
    "endDate": "2026-11-03",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "7つの山からなる赤城山。赤城山で一番高い黒檜山を登山します。 ガイドと一緒に赤城山を知ることができるプランです♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB+%E3%80%80%EF%BD%9E11%2F3%E9%BB%92%E6%AA%9C%E7%99%BB%E5%B1%B1%E3%81%AB%E5%AD%A6%E3%81%B6%EF%BD%9E",
    "free": false,
    "age": "小学5年生～一般"
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
    "id": 42650,
    "title": "アウトドアスクール 雪山登山に学ぶ",
    "emoji": "🎈",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-02-27",
    "endDate": "2027-02-27",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "黒檜山の雪山登山です！！！ 冬の赤城山を楽しみながら一緒に学びましょう♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%80%80%E9%9B%AA%E5%B1%B1%E7%99%BB%E5%B1%B1%E3%81%AB%E5%AD%A6%E3%81%B6",
    "free": false,
    "age": "中学生～一般"
  },
  {
    "id": 43177,
    "title": "藍染で三浦絞りの浴衣地を染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-12-01",
    "endDate": "2026-12-01",
    "tags": [
      "高崎市"
    ],
    "desc": "藍染で三浦絞りの浴衣地を染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/95783.html",
    "free": false,
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 46717,
    "title": "AKAGIアクティビティ倶楽部～2/11ツリーイング＆雪中キャンプ飯プラン～",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-02-11",
    "endDate": "2027-02-11",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "冬のツリーイング・雪遊びや、キャンプ飯などの雪中キャンプを手ぶらで気軽に楽しめます。 普段と違う季節でのアクティビティはまさに特別！ 樹上から結氷した大沼を眺めてみませんか？ 家族や仲間と自然豊かな赤城山で「特別な赤城時間」を満喫し、充実し",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=AKAGI%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E5%80%B6%E6%A5%BD%E9%83%A8%EF%BD%9E2%2F11%E3%83%84%E3%83%AA%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0%EF%BC%86%E9%9B%AA%E4%B8%AD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E9%A3%AF%E3%83%97%E3%83%A9%E3%83%B3%EF%BD%9E",
    "free": false,
    "age": "小学生～一般"
  },
  {
    "id": 47705,
    "title": "猫と幸せに暮らそう　「猫の飼い方教室」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/page/1064260.html",
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
    "id": 48423,
    "title": "第13回 おおた地球環境映像祭",
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
    "desc": "11月23日(月・祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/%e7%ac%ac13%e5%9b%9e-%e3%81%8a%e3%81%8a%e3%81%9f%e5%9c%b0%e7%90%83%e7%92%b0%e5%a2%83%e6%98%a0%e5%83%8f%e7%a5%ad/",
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
    "id": 52424,
    "title": "「令和8年度デジタルものづくり体験学習会」を開催します！",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-12-25",
    "endDate": "2026-12-25",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/site/monodukuri/1065883.html",
    "free": null,
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 53679,
    "title": "27_ウインターキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-01-16",
    "endDate": "2027-01-17",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "魅力たっぷりな冬の赤城山を赤城少年自然の家で満喫しよう♪ 楽しい雪遊びやキャンプ体験を実施予定！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=27_%E3%82%A6%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
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
    "id": 55838,
    "title": "31_サイエンスキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-03-13",
    "endDate": "2027-03-14",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "魅力たっぷりな冬の赤城山でサイエンスを体験します！ お友だちとワクワクしながら学んでみよう♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=31_%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
  },
  {
    "id": 57095,
    "title": "「太田市人権啓発講演会2026（あさのあつこ氏）」を開催します",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-02",
    "endDate": "2026-11-02",
    "tags": [
      "太田市"
    ],
    "desc": "「太田市人権啓発講演会2026（あさのあつこ氏）」を開催します 学び・体験",
    "url": "https://www.city.ota.gunma.jp/page/1052662.html",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 61090,
    "title": "多文化ふれあいフェスタおおた2026",
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
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1063083.html",
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
    "desc": "【満員御礼】企画展特別講演会「恐竜研究最前線in2026」 2026年11月15日（日） 企画展",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 65118,
    "title": "26_ものづくり合宿",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-12-26",
    "endDate": "2026-12-28",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "たくさんのものづくりをする2泊3日！ クラフトやご飯を作って楽しもう！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=26_%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E5%90%88%E5%AE%BF",
    "free": false,
    "age": "小学生～中学生"
  },
  {
    "id": 65488,
    "title": "23_クッキングキャンプ～料理を通して学ぶ食育体験～",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-11-21",
    "endDate": "2026-11-22",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "3食自分たちで考えて作ります！！！ みんなで作るごはん、どんなごはんになるか、楽しみ♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=23_%E3%82%AF%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%EF%BD%9E%E6%96%99%E7%90%86%E3%82%92%E9%80%9A%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%E9%A3%9F%E8%82%B2%E4%BD%93%E9%A8%93%EF%BD%9E",
    "free": false,
    "age": "小学生～中学生"
  },
  {
    "id": 66243,
    "title": "企画展ワークショップ「つくって学ぼう！北米ジュラ紀の恐竜のペーパー...",
    "emoji": "🦕",
    "category": "exhibition",
    "label": "展覧会",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【受付中】企画展ワークショップ「つくって学ぼう！北米ジュラ紀の恐竜のペーパー... 2026年11月29日（日） 企画展",
    "url": "https://www.gmnh.pref.gunma.jp/event/id13306/",
    "free": null,
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
    "id": 70772,
    "title": "25_クリスマスキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-12-12",
    "endDate": "2026-12-13",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "みんな大好きクリスマス♡ パーティーや行事食をみんなで楽しもう！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=25_%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
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
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 71800,
    "title": "AKAGIアクティビティ倶楽部 赤城山スノーシューハイキングツアー（半日コース）",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-01-31",
    "endDate": "2027-01-31",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "今しか体験できない赤城山。気分爽快！白銀の世界を見てみませんか？ 自然豊かなこの環境で赤城山の雪を体感しましょう！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=AKAGI%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E5%80%B6%E6%A5%BD%E9%83%A8%E3%80%80%E8%B5%A4%E5%9F%8E%E5%B1%B1%E3%82%B9%E3%83%8E%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%84%E3%82%A2%E3%83%BC%EF%BC%88%E5%8D%8A%E6%97%A5%E3%82%B3%E3%83%BC%E3%82%B9%EF%BC%89",
    "free": false,
    "age": "小学4年生～一般"
  },
  {
    "id": 73248,
    "title": "１１月サイエンス・サタデー「化石ミニ発掘体験　北米ジュラ紀編」",
    "emoji": "🦕",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-11-02",
    "endDate": "2026-11-02",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【受付中】１１月サイエンス・サタデー「化石ミニ発掘体験 北米ジュラ紀編」 11月14日(土)・21日(土)・28日(土) サイエンス・サタデー",
    "url": "https://www.gmnh.pref.gunma.jp/event/id15055/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 73588,
    "title": "産業フェスティバル",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-02",
    "endDate": "2026-11-02",
    "tags": [
      "太田市"
    ],
    "desc": "産業フェスティバル しごと・産業・まちづくり",
    "url": "https://www.city.ota.gunma.jp/site/monodukuri/2620.html",
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
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学の公開講座」（10月15日（木曜日）～12月16日（水曜日）の全10回＜外部リンク＞",
    "url": "https://www.tcue.ac.jp/leafpage/382.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 78666,
    "title": "【中央公民館】「クリスマスファミリーシネマ〜親子で楽しむ映画時間〜」を開催します",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "会場：前橋シネマハウス",
    "startDate": "2026-12-19",
    "endDate": "2026-12-19",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kyoiku/chuokominkan/gyomu/1/46616.html",
    "free": null,
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
    "id": 81972,
    "title": "アウトドアスクール 雪中キャンプのすすめ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-02-23",
    "endDate": "2027-02-23",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "雪中でのキャンプイベント！ 白銀の世界で赤城時間を楽しみませんか？",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%80%80%E9%9B%AA%E4%B8%AD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E3%81%AE%E3%81%99%E3%81%99%E3%82%81",
    "free": false,
    "age": "小学5年生～一般"
  },
  {
    "id": 82213,
    "title": "定期歴史講座「かみつけ塾」（12月20日）",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-12-01",
    "endDate": "2026-12-01",
    "tags": [
      "高崎市"
    ],
    "desc": "定期歴史講座「かみつけ塾」（12月20日） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/5542.html",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 84739,
    "title": "【韮川】市民教室「トルコランプ風ミニランタンランプづくり」",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-02",
    "endDate": "2026-11-02",
    "tags": [
      "太田市"
    ],
    "desc": "【韮川】市民教室「トルコランプ風ミニランタンランプづくり」 学び・体験",
    "url": "https://www.city.ota.gunma.jp/site/gyousei-center/1063056.html",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 88442,
    "title": "22_やきいも＆オリジナルカトラリー作り",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-11-15",
    "endDate": "2026-11-15",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "自然豊かな赤城山で、美しい景色を見ながらやきいも体験を楽しめます。 今回は世界に一つだけ！オリジナルカトラリーも作ります！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=22_%E3%82%84%E3%81%8D%E3%81%84%E3%82%82%EF%BC%86%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%82%AB%E3%83%88%E3%83%A9%E3%83%AA%E3%83%BC%E4%BD%9C%E3%82%8A",
    "free": false,
    "age": "年少～一般"
  },
  {
    "id": 89778,
    "title": "AKAGIアクティビティ倶楽部 赤城山スノーシューハイキングツアー（一日コース）",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2027-02-13",
    "endDate": "2027-02-13",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "今しか体験できない赤城山。気分爽快！白銀の世界を見てみませんか？ 自然豊かなこの環境で赤城山の雪を体感しましょう！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=AKAGI%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E5%80%B6%E6%A5%BD%E9%83%A8%E3%80%80%E8%B5%A4%E5%9F%8E%E5%B1%B1%E3%82%B9%E3%83%8E%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%84%E3%82%A2%E3%83%BC%EF%BC%88%E4%B8%80%E6%97%A5%E3%82%B3%E3%83%BC%E3%82%B9%EF%BC%89",
    "free": false,
    "age": "小学4年生～一般"
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
    "startDate": "2026-11-02",
    "endDate": "2026-11-02",
    "tags": [
      "太田市"
    ],
    "desc": "花結び講座「干支・未（ひつじ）」（大隅俊平美術館） 学び・体験",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "startDate": "2026-11-02",
    "endDate": "2027-05-02",
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
    "id": 93327,
    "title": "おもいやりプラネタリウム",
    "emoji": "🌟",
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
    "url": "https://kodomonokuni.or.jp/event/r8omoiyaripurane/",
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
    "id": 97273,
    "title": "染色ワークショップ「干支の絵馬ハンカチを作ろう」",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-12-01",
    "endDate": "2026-12-01",
    "tags": [
      "高崎市"
    ],
    "desc": "染色ワークショップ「干支の絵馬ハンカチを作ろう」 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/74197.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 97516,
    "title": "で～っかいボードゲームひろば",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月29日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/boardgame_big/",
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
  }
];
