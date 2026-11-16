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
    "id": 10177,
    "title": "第59回吾妻観光写真コンクール（吾妻郡中之条町ほか）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6953.jpeg?1787540486",
    "category": "culture",
    "label": "文化・学習",
    "area": "中之条町",
    "venue": "中之条町、長野原町、嬬恋村、草津町、高山村、東吾妻町",
    "startDate": "2026-08-24",
    "endDate": "2026-11-30",
    "tags": [
      "吾妻郡中之条町",
      "募集",
      "街・地域",
      "自然"
    ],
    "desc": "群馬県吾妻地域（中之条町、長野原町、嬬恋村、草津町、高山村、東吾妻町）の観光スポットや地域のイベントなど、見る人を吾妻…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6953",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 10898,
    "title": "【12月12日開催】冬のこどもフェスティバル おはなし会",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "前橋市（詳細は公式サイト）",
    "startDate": "2026-12-12",
    "endDate": "2026-12-12",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kyoiku/maebashishiritsutoshokan/oshirase/library_event/21772.html",
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
    "id": 13657,
    "title": "第18回さかい赤レンガまつり＆境宿六斎市（境赤レンガ倉庫／伊勢崎市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image6248.jpg?1792129363",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "伊勢崎市",
    "venue": "伊勢崎市境赤レンガ倉庫",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "伊勢崎市",
      "マルシェ",
      "街・地域"
    ],
    "desc": "「さかい赤レンガまつり＆境宿六斎市」今年も開催！\n\n第18回さかい赤レンガまつり＆境宿六斎市を、11月21日(土)に開…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6248",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13679,
    "title": "OTAふるさと応援体験会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-12-12",
    "endDate": "2026-12-12",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/ota-furusato.html",
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
    "startDate": "2026-11-16",
    "endDate": "2027-05-16",
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
    "id": 13935,
    "title": "こどもわくわく劇場「大泉保育福祉専門学校『あつまれ！クリスマスフェスタ』」",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月6日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/wakuwaku_oizumi/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13948,
    "title": "スマイル子育て応援マルシェ（あんなかスマイルパーク／安中市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/common/images/no_image.png?1447748952",
    "category": "culture",
    "label": "文化・学習",
    "area": "安中市",
    "venue": "あんなかスマイルパーク",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "安中市",
      "マルシェ",
      "家族",
      "子育て"
    ],
    "desc": "♪つながれ広がれ子育て支援の輪♪\nスマイルパークにキッチンカーや美味しいグルメが勢ぞろい。\n\nかわいいハンドメイド作家…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7058",
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
    "id": 15974,
    "title": "まちなかキャンパス　ドイツのボードゲーム・カードゲームで遊ぼう！（まちなかサロン「マチナカさん」／前橋市）",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image7101.jpg?1793598425",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "まちなかサロン「マチナカさん」",
    "startDate": "2026-11-20",
    "endDate": "2026-11-20",
    "tags": [
      "前橋市",
      "講演・講座",
      "カルチャー",
      "学習"
    ],
    "desc": "ドイツのボードゲーム・カードゲームで遊ぼう！\n独創的な海外のボードゲームやカードゲームをたくさん揃えています。 子ども…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7101",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 17013,
    "title": "岩櫃山【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image524.png?1537340546",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "東吾妻町",
    "venue": "岩櫃山",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "吾妻郡東吾妻町",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "標高802mの岩山で、吾妻八景を代表する景勝地として知られています。新緑と紅葉の季節の登山がおすすめで、山頂からの景観…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=524",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 17099,
    "title": "榛名神社【群馬の紅葉特集2026】",
    "emoji": "🏺",
    "image": "https://www.gunlabo.net/images_c/event/image2139.jpg?1505798155",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "榛名神社",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "高崎市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "榛名神社は榛名山の中腹にあり、6世紀後半の創建と伝えられる歴史ある神社です。火の神と土の神を祀り、開運や五穀豊穣、商売…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2139",
    "free": null,
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
    "id": 18293,
    "title": "バギーヨガ / 子連れヨガ 産後ケア（道の駅まえばし赤城／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7129.jpeg?1794714361",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "道の駅　まえばし赤城　芝生広場",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "前橋市",
      "ママ",
      "子育て",
      "子供"
    ],
    "desc": "【初の土曜開催！】\nバギーヨガはベビーカーを使ったヨガです☺\n産後バランス力が低下していたり、身体の固い方でもベビーカ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7129",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 19541,
    "title": "キタグチタウンイベントマルシェ（東武太田駅北口／太田市）",
    "emoji": "🎵",
    "image": "https://www.gunlabo.net/images_c/event/image7039.jpg?1790921846",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "東武太田駅キタグチ商店街周辺",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "太田市",
      "街・地域"
    ],
    "desc": "駅周辺に賑わいを創出しようと恒例の地域活性化イベントを開催！\n\n今回は音楽やダンスなど楽しい体験で、子どもから大人まで…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7039",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 20578,
    "title": "黒保根キッチンカーフェスティバルin牡蠣祭り2027（桐生市黒保根町水沼運動公園／桐生市）",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image7122.jpeg?1794284889",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "桐生市",
    "venue": "桐生市黒保根町水沼運動公園",
    "startDate": "2027-01-17",
    "endDate": "2027-01-17",
    "tags": [
      "桐生市",
      "祭・伝統行事",
      "グルメ",
      "街・地域"
    ],
    "desc": "恒例となりました新春のイベント\n「黒保根キッチンカーフェスティバルin牡蠣祭り2027」\n岡山県産の新鮮な牡蠣料理を提…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7122",
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
    "id": 21799,
    "title": "ファンクショナルローラーピラティスフェスタ2026in群馬（群馬県庁／前橋市）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image7114.jpg?1793865445",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "群馬県庁",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "前橋市",
      "街・地域",
      "講演・講座",
      "映画"
    ],
    "desc": "身体の可能性を広げるファンクショナルローラーピラティス体験と、\n生きること、死ぬこと、自然とのつながりを考えるドキュメ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7114",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 25260,
    "title": "星空観察 こどもの国スターフレンド －ふたご座流星群－",
    "emoji": "🌟",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-12",
    "endDate": "2026-12-12",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月12日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/starfriend/",
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
    "id": 28708,
    "title": "碓氷湖【群馬の紅葉特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image2140.jpg?1541659776",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "安中市",
    "venue": "碓氷湖",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "安中市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "中尾川と碓氷川の合流点を堰き止めて造られた、豊かな自然に囲まれた碓氷湖。めがね橋をイメージしたレンガ調の橋がかかる湖面…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2140",
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
    "id": 29401,
    "title": "Musuhiマルシェ（アメイジンググレイス前橋／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7124.png?1794294754",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "アメイジンググレイス前橋",
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "tags": [
      "前橋市",
      "マルシェ",
      "体験",
      "街・地域"
    ],
    "desc": "第5回 Musuhiマルシェ開催！\n\n占い・癒し・施術・ハンドメイド・美味しいお食事など、さまざまな出店者さんが集まり…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7124",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 29506,
    "title": "前橋国際芸術祭　2026（前橋市中心街／前橋市）",
    "emoji": "🎨",
    "image": "https://www.gunlabo.net/images_c/event/image6085.jpg?1755836746",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "アーツ前橋",
    "startDate": "2026-09-19",
    "endDate": "2026-12-20",
    "tags": [
      "前橋市",
      "街・地域",
      "アート"
    ],
    "desc": "【前橋から世界へ発信する、2年に1度の芸術の祭典が始動】\nアートと建築が誘う、都市生成の物語へ。 第1回 「前橋国際芸…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6085",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30401,
    "title": "桜山まつり（桜山公園／藤岡市）【群馬の紅葉特集2026】",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image6281.jpg?1790745541",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "藤岡市",
    "venue": "桜山公園",
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "tags": [
      "藤岡市",
      "街・地域",
      "紅葉",
      "花見"
    ],
    "desc": "藤岡市・桜山公園に咲く冬桜と紅葉の、季節の共演を楽しむお祭り。\n歌謡ショー・芸人MC ネタ、とっちゃなげ汁配布などイベ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6281",
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
    "id": 31813,
    "title": "桐生川源流林【群馬の紅葉特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image2135.jpg?1505872014",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生川源流林",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "桐生市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "桐生川の上流域には根本沢と呼ばれる美しい渓谷があり、豊かな森が広がっています。昭和61年に「森林浴の森 日本100選」…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2135",
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
    "id": 32135,
    "title": "第14回ぐんまフランス祭2026～ぐんまがフランスになる3日間～（群馬県庁／前橋市）",
    "emoji": "🎭",
    "image": "https://www.gunlabo.net/images_c/event/image1743.jpg?1792545044",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県庁",
    "startDate": "2026-11-20",
    "endDate": "2026-11-22",
    "tags": [
      "前橋市",
      "街・地域",
      "グルメ"
    ],
    "desc": "「グンマがフランスになる3日間」、今年もフランス好きにはたまらないグルメや本場の雰囲気を体験できるマルシェ、音楽、舞台…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1743",
    "free": null,
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
    "id": 33400,
    "title": "第一回 前橋国際芸術祭 2026公式「MAEBASHI ART MARKET – 持ち帰る芸術祭」",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7038.jpg?1790921678",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋中央通り商店街",
    "startDate": "2026-11-21",
    "endDate": "2026-11-22",
    "tags": [
      "前橋市",
      "街・地域",
      "アート"
    ],
    "desc": "2026年9月19日（土）から12月20日（日）まで群馬県前橋市で開催される「第一回 前橋国際芸術祭 2026」の公式…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7038",
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
    "id": 35271,
    "title": "GUNMA AREA MUSIC FESTIVAL Ⅲ（イオンモール高崎／高崎市）",
    "emoji": "🎵",
    "image": "https://www.gunlabo.net/images_c/event/image7060.jpeg?1791510429",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "イオンモール高崎",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "高崎市",
      "大型イベント/観客動員数千人～",
      "街・地域",
      "音楽"
    ],
    "desc": "イオンモール高崎を会場に、音楽祭を開催します。\n　当日はバンドステージとダンスステージを設け、交互にアーティストが出…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7060",
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
    "id": 35493,
    "title": "碓氷第三橋梁「めがね橋」【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image1594.png?1537340884",
    "category": "culture",
    "label": "文化・学習",
    "area": "安中市",
    "venue": "碓氷第三橋梁「めがね橋」",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "安中市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "横川−軽井沢間にある碓氷第三橋梁（明治26年碓氷線開業）は通称「めがね橋」と呼ばれ、全長約91m・高さ31mの日本最大…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1594",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 35837,
    "title": "洞窟観音 徳明園 山徳記念館【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image1511.jpg?1473385467",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "洞窟観音 徳明園 山徳記念館",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "高崎市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "42体の観音像（高橋楽山作）が安置されている観光参拝場「洞窟観音」。併設の徳明園は北関東屈指の日本庭園として名高い池泉…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1511",
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
    "id": 37176,
    "title": "伊香保森林公園【群馬の紅葉特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image1506.jpg?1473310449",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "渋川市",
    "venue": "群馬県立伊香保森林公園",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "渋川市",
      "紅葉",
      "植物",
      "自然"
    ],
    "desc": "二ツ岳を中心に広がる、総面積224haの緑豊かな自然公園です。園内には二ツ岳風穴やワシノ巣風穴、蒸湯跡、火口原、つつじ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1506",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 37791,
    "title": "県民芸術祭50周年記念・渋川市民会館50周年記念事業　令和８年度ぐんま伝統芸能の祭典",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image5416.jpg?1794185115",
    "category": "culture",
    "label": "文化・学習",
    "area": "渋川市",
    "venue": "渋川市民会館",
    "startDate": "2027-01-24",
    "endDate": "2027-01-24",
    "tags": [
      "渋川市",
      "伝統芸能"
    ],
    "desc": "若い世代のエネルギッシュな伝統芸能公演と、郷土芸能を気軽にお楽しみいただける「ぐんま伝統芸能の祭典」を開催します。\n\n…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5416",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 37864,
    "title": "高崎経済大学地域政策学会令和8年度第2回学術文化講演会（トークショー）",
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
    "desc": "高崎経済大学地域政策学会令和8年度第2回学術文化講演会（トークショー）＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2303.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 37946,
    "title": "向井千秋記念子ども科学館　大人の科学講座  「乾物の科学」（館林市）",
    "emoji": "🔬",
    "image": "https://www.gunlabo.net/images_c/event/image6977.jpg?1788395856",
    "category": "culture",
    "label": "文化・学習",
    "area": "館林市",
    "venue": "たてばやし向井千秋記念子ども科学館",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "館林市",
      "体験",
      "学習",
      "講演・講座"
    ],
    "desc": "対象　公募",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6977",
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
    "id": 40834,
    "title": "グランドマルシェ（太田グランドホテル／太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7127.png?1794470515",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田グランドホテル",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "太田市",
      "マルシェ",
      "ワークショップ",
      "街・地域"
    ],
    "desc": "GRAND MARCHE（グランドマルシェ）開催！\n\n11月29日（日）10:00〜18:00\n太田グランドホテルにて…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7127",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 41295,
    "title": "向井千秋記念子ども科学館　大人のプラネタリウム（館林市）",
    "emoji": "🌟",
    "image": "https://www.gunlabo.net/images_c/event/image6974.jpg?1788393730",
    "category": "culture",
    "label": "文化・学習",
    "area": "館林市",
    "venue": "たてばやし向井千秋記念子ども科学館",
    "startDate": "2026-11-18",
    "endDate": "2026-11-18",
    "tags": [
      "館林市",
      "体験",
      "学習",
      "講演・講座"
    ],
    "desc": "対 象  入館者",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6974",
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
    "id": 42193,
    "title": "向井千秋記念子ども科学館　サイエンスショー「キッチンアラカルト」（館林市）",
    "emoji": "🔬",
    "image": "https://www.gunlabo.net/images_c/event/image4239.jpg?1644222556",
    "category": "culture",
    "label": "文化・学習",
    "area": "館林市",
    "venue": "たてばやし向井千秋記念子ども科学館",
    "startDate": "2026-11-22",
    "endDate": "2026-11-22",
    "tags": [
      "館林市",
      "学習",
      "講演・講座",
      "体験"
    ],
    "desc": "対象：入館者",
    "url": "https://www.gunlabo.net/event/event.shtml?id=4239",
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
    "id": 43400,
    "title": "【中央公民館】子育て支援講座「きらきら笑顔で親子遊び〜Baby版・Kids版〜」を開催します。",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市中央公民館 4階 404スタジオ",
    "startDate": "2026-11-20",
    "endDate": "2026-11-20",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kyoiku/chuokominkan/gyomu/1/49607.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43952,
    "title": "県民芸術祭50周年記念事業 「GUNMAストリートダンスフェス2027」（群馬音楽センター／高崎市）",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image7063.png?1791856157",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "群馬音楽センター",
    "startDate": "2027-01-17",
    "endDate": "2027-01-17",
    "tags": [
      "高崎市",
      "演劇・ダンス"
    ],
    "desc": "県民芸術祭50周年記念事業「GUNMAストリートダンスフェス2027」を開催！\n\n本イベントでは、海外や日本国内で活躍…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7063",
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
    "id": 45580,
    "title": "かやぶき民家見学・昔あそび",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-11-16",
    "endDate": "2027-05-16",
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
    "id": 45595,
    "title": "第4回 親子で楽しむ性教育フェスタ（群馬県青少年会館 ／前橋市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image5280.jpg?1791510804",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "群馬県青少年会館",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "前橋市",
      "講演・講座",
      "家族"
    ],
    "desc": "第４回親子で楽しむ性教育フェスタ\n今年は11/23 （祝）に開催します！！\n\n近年、小さな子どもが性被害に遭ったり、望…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5280",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 46079,
    "title": "桐生西宮神社　えびす講",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event_tag/0001.png?1322546399",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "桐生市",
    "venue": "関東一社 桐生西宮神社",
    "startDate": "2026-11-19",
    "endDate": "2026-11-20",
    "tags": [
      "桐生市",
      "祭・伝統行事",
      "街・地域",
      "グルメ"
    ],
    "desc": "秋季例大祭であるえびす講は毎年11月19日(宵祭り)、20日(本祭り)の両日斎行です。\n桐生近郊、関東一円から20万人…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2795",
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
    "id": 48596,
    "title": "古路瀬（こじせ）渓谷【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image2136.jpg?1541659592",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "古路瀬渓谷",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "桐生市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "古路瀬（こじせ）渓谷は、渡良瀬川流域でも屈指の紅葉の名所です。わたらせ渓谷鐵道の車窓からも眺めることができます。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2136",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 48647,
    "title": "まえばしこどもフェス（前橋中央イベント広場／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6898.jpg?1785139284",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋中央イベント広場",
    "startDate": "2026-12-12",
    "endDate": "2026-12-12",
    "tags": [
      "前橋市",
      "子供",
      "クリスマス"
    ],
    "desc": "昨年に引き続き「まえばしこどもフェス」開催決定✨️\n今年はなんとクリスマスシーズンでの開催です\n⁡\n昨年度と同じ場所、…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6898",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 49679,
    "title": "トハメルカド有鄰館第5回 ボタニカルと猫の物語（有鄰館煉瓦蔵／桐生市）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image7109.png?1793781310",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生市 有鄰館",
    "startDate": "2027-02-27",
    "endDate": "2027-02-28",
    "tags": [
      "桐生市",
      "植物",
      "ペット・動物",
      "家族"
    ],
    "desc": "猫と植物が紡ぐ、時を重ねた煉瓦蔵の物語 \n 第5回 トハメルカド 有鄰館 \n\n静けさと温もりが漂う歴史ある煉瓦蔵で、心…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7109",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 50072,
    "title": "にっこりマルシェ（エコラボカフェ／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6343.png?1794790527",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "ecolab cafe",
    "startDate": "2026-12-05",
    "endDate": "2026-12-05",
    "tags": [
      "高崎市",
      "マルシェ",
      "家族"
    ],
    "desc": "ファミリー向けイベント【にっこりマルシェ】を、高崎市エコラボカフェで開催します。\n家族みんなで楽しめるイベントですので…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6343",
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
    "id": 50713,
    "title": "NATURE IN BLUE － ECHOES OF SHIMA －（群馬県・四万温泉）",
    "emoji": "🎨",
    "image": "https://www.gunlabo.net/images_c/event/image6910.jpg?1785466263",
    "category": "experience",
    "label": "体験・工作",
    "area": "中之条町",
    "venue": "四万温泉協会",
    "startDate": "2026-08-08",
    "endDate": "2026-11-30",
    "tags": [
      "吾妻郡中之条町",
      "街・地域"
    ],
    "desc": "群馬県・四万温泉で、自然とデジタルアートが融合した新感覚の体験「NATURE IN BLUE － ECHOES OF …",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6910",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 50975,
    "title": "秋の１DAYキャンプ③～秋の自然あそび（チャウス自然体験学校／みどり市）",
    "emoji": "🏕️",
    "image": "https://www.gunlabo.net/images_c/event/image7087.jpg?1792378264",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "桐生市",
    "venue": "チャウス自然体験学校（桐生市広沢町",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "桐生市",
      "体験",
      "子供",
      "子育て"
    ],
    "desc": "「家の中でゲームやスマホばかり…」と、ついつい小言を言ってしまっていませんか？そんなお子様には、秋の自然体験がぴったり…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7087",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 51205,
    "title": "諏訪峡【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image283.jpg?1631501481",
    "category": "culture",
    "label": "文化・学習",
    "area": "みなかみ町",
    "venue": "諏訪峡",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "利根郡みなかみ町",
      "紅葉",
      "自然",
      "季節"
    ],
    "desc": "利根川が織りなすみなかみ屈指の景勝地。\n川の流れに沿って2.5kmの渓谷には、道の駅みなかみ水紀行館を起点に徒歩約30…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=283",
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
    "id": 52999,
    "title": "ねんねでパシャリ！",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-02",
    "endDate": "2026-12-02",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月2日(水)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/nenne/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53239,
    "title": "紅葉山公園【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image1510.jpg?1568094292",
    "category": "culture",
    "label": "文化・学習",
    "area": "甘楽町",
    "venue": "紅葉山公園",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "甘楽郡甘楽町",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "自生しているヤマモミジやイロハモミジなど、併せて約500本の紅葉がみられます。また、周辺にある甘楽総合公園には、モミジ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1510",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53648,
    "title": "こども・子育て相談室(臨床発達心理士)",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-10",
    "endDate": "2026-12-10",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月10日(木)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/sodan_rinsho/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 53657,
    "title": "たかさき食育・健康フェスタ2026（高崎市総合保健センター／高崎市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7076.jpg?1791960258",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎市総合保健センター",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "高崎市",
      "街・地域"
    ],
    "desc": "たかさき食育・健康フェスタ2026「今日からできる！からだがよろこぶ健康習慣」を開催します。\n\n市民のみなさんが食や健…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7076",
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
    "id": 56376,
    "title": "「ぴよぴよの会」（群馬県生涯学習センター２Ｆ　キッズルームぐんまちゃん（育児学習室）／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6062.png?1762311790",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県生涯学習センター キッズルームぐんまちゃん（育児学習室",
    "startDate": "2026-12-01",
    "endDate": "2026-12-01",
    "tags": [
      "前橋市",
      "子育て"
    ],
    "desc": "手あそび、親子あそび、親子リズム、読み聞かせ、季節の製作などを行います。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6062",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57095,
    "title": "「太田市人権啓発講演会2026（あさのあつこ氏）」を開催します",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "太田市"
    ],
    "desc": "「太田市人権啓発講演会2026（あさのあつこ氏）」を開催します 学び・体験",
    "url": "https://www.city.ota.gunma.jp/page/1052662.html",
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
    "id": 57728,
    "title": "荒船山【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image2144.jpg?1505959694",
    "category": "culture",
    "label": "文化・学習",
    "area": "下仁田町",
    "venue": "荒船山",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "甘楽郡下仁田町",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "荒波をけたてて進む巨艦を思わせる山容から「荒船山」の名がつけられました。艫岩（ともいわ）からの眺望は見事。秋には美しい…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2144",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57894,
    "title": "クラフトルーム工作「クリスマス☆まきまきオーナメント」",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-01",
    "endDate": "2026-12-25",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月1日(火)～25日(金)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_christmas/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 58377,
    "title": "ぐんラボ！フェスタvol.20　ジョイホンパーク吉岡（吉岡町）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image6225.jpg?1773370827",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "吉岡町",
    "venue": "ジョイホンパーク吉岡",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "北群馬郡吉岡町",
      "マルシェ"
    ],
    "desc": "ぐんラボ！フェスタ、通算20回目の開催決定です！\n\n月間PV600万突破！2026年8月1日で創設15周年を迎えた群馬…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6225",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 58858,
    "title": "あつまれ新田KIDS！ 地域芸能体験まつり 新田音頭フェスタ（生品行政センター／太田市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7125.jpg?1794361511",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "生品行政センター",
    "startDate": "2026-12-05",
    "endDate": "2026-12-05",
    "tags": [
      "太田市",
      "伝統芸能",
      "街・地域"
    ],
    "desc": "子どもたちを対象にした、体験型伝統芸能イベント。\n\n歴史に名高い新田義貞公挙兵７００年（2033年）に向けて活気立つ新…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7125",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 59016,
    "title": "リトル・ママフェスタ高崎2026Nov.（ビエント高崎／高崎市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7111.png?1793798799",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "ビエント高崎",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "高崎市",
      "子育て",
      "家族",
      "マルシェ"
    ],
    "desc": "＼年間約30万人を動員する、国内最大級のファミリーイベント!／\nご家族で楽しんでいただけるよう様々なコンテンツを用意し…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7111",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 59083,
    "title": "焼きそばで世界をつなぐ！大泉町発ワールドカップ（スバル運動公園多目的広場／大泉町）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6962.jpg?1788149787",
    "category": "culture",
    "label": "文化・学習",
    "area": "大泉町",
    "venue": "スバル運動公園",
    "startDate": "2026-12-13",
    "endDate": "2026-12-13",
    "tags": [
      "邑楽郡大泉町",
      "街・地域",
      "グルメ"
    ],
    "desc": "世界の味と文化を体験！\n人と人がつながる！\n大泉町の新たな名物イベントへ！\n\n50カ国以上の人々が暮らす、\n多文化共生…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6962",
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
    "id": 60261,
    "title": "【こどもプラッツ】連絡アプリシステム（はなまる連絡帳）の不正アクセスに伴う注意喚起​",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-11-12",
    "endDate": "2026-11-12",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/site/kosodate/1066354.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 60341,
    "title": "クマの秘密をさぐる冒険イベント！（群馬県庁／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7107.jpg?1793777482",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県庁28階281A会議室",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "前橋市",
      "体験",
      "ワークショップ",
      "自然"
    ],
    "desc": "​【参加無料】親子で探検！クマのひみつを探る冒険イベントへ出かけよう！\n​11月21日（土）、群馬県庁28階にて「環境…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7107",
    "free": true,
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
    "startDate": "2026-11-16",
    "endDate": "2027-05-16",
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
    "id": 61176,
    "title": "高崎ラーメン祭2027 スゴウマ！ラーメン大集合 produced by 二代目！ラーメンD 伊達一平（もてなし広場／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6322.jpg?1792474067",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "もてなし広場",
    "startDate": "2027-02-05",
    "endDate": "2027-02-07",
    "tags": [
      "高崎市",
      "グルメ",
      "街・地域"
    ],
    "desc": "高崎スゴウマ！ラーメン大集合2027実行委員会は、大型ラーメンフェス『高崎ラーメン祭2027 スゴウマ！ラーメン大集合…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6322",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 62146,
    "title": "向井千秋記念子ども科学館　大人のためのプラネタリウムヒーリ ング2026「星灯りの処方箋～旅する 星～」（館林市）",
    "emoji": "🌟",
    "image": "https://www.gunlabo.net/images_c/event/image7096.jpg?1792542954",
    "category": "culture",
    "label": "文化・学習",
    "area": "館林市",
    "venue": "たてばやし向井千秋記念子ども科学館",
    "startDate": "2026-11-23",
    "endDate": "2026-11-23",
    "tags": [
      "館林市",
      "学習",
      "講演・講座",
      "体験"
    ],
    "desc": "大人のためのプラネタリウムヒーリング2026「星灯りの処方箋～旅する星～」",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7096",
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
    "id": 63135,
    "title": "令和8年度健康まつり（保健センター(くわまるプラザ)／伊勢崎市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7072.png?1791958558",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "伊勢崎市",
    "venue": "保健センター(くわまるプラザ",
    "startDate": "2026-11-28",
    "endDate": "2026-11-28",
    "tags": [
      "伊勢崎市",
      "講演・講座",
      "街・地域"
    ],
    "desc": "市民の皆さん一人ひとりが楽しみながら健康づくりの意識を高めることを目的として、健康まつりを開催します。\n\n健康に関する…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7072",
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
    "id": 68039,
    "title": "空と大地の冒険キャンプ（みどり市小平の里キャンプ場／みどり市）",
    "emoji": "🏕️",
    "image": "https://www.gunlabo.net/images_c/event/image7015.jpg?1790213686",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "みどり市",
    "venue": "小平の里",
    "startDate": "2026-12-19",
    "endDate": "2026-12-20",
    "tags": [
      "みどり市",
      "野外",
      "子供"
    ],
    "desc": "2026年12月19日（土）・20日（日）の2日間、「空と大地の冒険キャンプ」をみどり市小平の里キャンプ場にて開催しま…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7015",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 68120,
    "title": "OYAKO FUYU FES （桐生織物会館 ／桐生市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6464.jpg?1793595648",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生市地場産業振興センター",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "桐生市",
      "ワークショップ",
      "グルメ",
      "家族"
    ],
    "desc": "Rejoiceがお届けする、この冬とっておきのイベントのお知らせです！✨\n\n⁡「親子で一日中、時間を忘れて楽しめる」を…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6464",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 70468,
    "title": "橋林寺 大晦日 除日の鐘（前橋市）　【群馬の新春イベント特集2027】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image5410.jpg?1793751659",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "曹洞宗 青松山橋林寺境内",
    "startDate": "2026-12-31",
    "endDate": "2026-12-31",
    "tags": [
      "前橋市",
      "祭・伝統行事"
    ],
    "desc": "大みそかには、みんなで一緒に除日の鐘を。\n大きな鐘を打ち今年を振り返り、清らかな心で新年のスタートを切りましょう！\n\n…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5410",
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
    "id": 71051,
    "title": "トハメルカド境赤レンガ倉庫第16回 ボタニカル X 年末フェス（伊勢崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7110.png?1793782254",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "伊勢崎市",
    "venue": "伊勢崎市境赤レンガ倉庫",
    "startDate": "2026-12-27",
    "endDate": "2026-12-27",
    "tags": [
      "伊勢崎市",
      "植物",
      "ワークショップ",
      "マルシェ"
    ],
    "desc": "❄️ 1年分の感謝を込めて！今年最後のボタニカル・フェスティバル ❄️\n 第15回 トハメルカド 境赤レンガ倉庫 \n✨…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7110",
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
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【満員御礼】１１月サイエンス・サタデー「化石ミニ発掘体験 北米ジュラ紀編」 11月14日(土)・21日(土)・28日(土) サイエンス・サタデー",
    "url": "https://www.gmnh.pref.gunma.jp/event/id15055/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 74514,
    "title": "少林山達磨寺【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image2142.jpg?1600394212",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "少林山達磨寺",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "高崎市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "元禄10年(1697年)に中国僧東皐心越禅師を開山として開創された禅寺。縁起だるま発祥の寺で、本堂には多くのだるまが納…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2142",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 74837,
    "title": "GUNMA FOODTRUCK FESTIVAL（群馬フードトラックフェスティバル）（もてなし広場／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6771.jpg?1791257231",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "もてなし広場",
    "startDate": "2027-01-16",
    "endDate": "2027-01-17",
    "tags": [
      "高崎市",
      "グルメ"
    ],
    "desc": "第2回開催！\n「フードトラックの可能性を、より多くの方に」\n食の多様性や表現力、コミュニティーの拡大を目指して、\n普段…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6771",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 75297,
    "title": "親子でおいしい工場見学「牛乳のお話＆バターづくりに挑戦！」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-12-06",
    "endDate": "2026-12-06",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "12月6日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/toumourakunou/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 75381,
    "title": "共愛学園前橋国際大学公開授業「人間を考える」～ぐんまの郷土芸能人形浄瑠璃～（共愛学園前橋国際大学／前橋市）",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image7081.jpg?1792114782",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "共愛学園前橋国際大学",
    "startDate": "2026-11-26",
    "endDate": "2026-11-26",
    "tags": [
      "前橋市",
      "伝統芸能",
      "街・地域"
    ],
    "desc": "江戸時代より渋川市に伝わる「津久田人形芝居」のワークショップと英語・現代語訳字幕付き公演を実施します。\n\n内　容：\n【…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7081",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 75405,
    "title": "大蔵流山本会　狂言公演（美喜仁桐生文化会館（桐生市市民文化会館）／桐生市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6935.jpg?1786858074",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "美喜仁桐生文化会館（桐生市市民文化会館",
    "startDate": "2026-12-05",
    "endDate": "2026-12-05",
    "tags": [
      "桐生市",
      "伝統芸能",
      "家族"
    ],
    "desc": "大蔵流山本会狂言公演\n『夫婦のゆくえ』\n\n毎年、開催されている大蔵流山本会狂言公演ですが、今年度のテーマは\n「夫婦のゆ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6935",
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
    "id": 77538,
    "title": "不動滝【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image278.jpg?1567128140",
    "category": "culture",
    "label": "文化・学習",
    "area": "みどり市",
    "venue": "不動滝",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "みどり市",
      "紅葉",
      "自然",
      "季節"
    ],
    "desc": "みどり市東町座間の柱戸川に落ちる落差25メートルの滝。澄みきった滝の水しぶきに美しい紅葉が映えます。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=278",
    "free": null,
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
    "id": 77955,
    "title": "勤福フェスタ（群馬県勤労福祉センター／前橋市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7119.png?1794186027",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "(公財",
    "startDate": "2026-11-21",
    "endDate": "2026-11-21",
    "tags": [
      "前橋市",
      "フリーマーケット・バザー",
      "街・地域"
    ],
    "desc": "「勤福フェスタ」は、勤労感謝の日に開催される地域イベントです。\n勤労者の余暇活動や健康管理の促進と公共施設の開放を目的…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7119",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 78100,
    "title": "Xmas Market in Kiryu（桐生市南公園／桐生市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7098.png?1793597666",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生市南公園",
    "startDate": "2026-11-22",
    "endDate": "2026-11-22",
    "tags": [
      "桐生市",
      "クリスマス"
    ],
    "desc": "今年の冬、桐生南公園がクリスマス一色に染まります！\n\n人気のフードやかわいいクリスマス雑貨、体験型ワークショップに癒や…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7098",
    "free": null,
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
    "id": 78977,
    "title": "第35回ぐんまこどもの夢大賞 入選作品展",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-11-15",
    "endDate": "2026-11-23",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "11月15日(日)～23日(月祝)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/yumetaisyou/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 79165,
    "title": "高津戸峡【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image275.jpg?1567127950",
    "category": "culture",
    "label": "文化・学習",
    "area": "みどり市",
    "venue": "高津戸峡",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "みどり市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "関東の耶馬渓とも讃えられる高津戸峡。渓谷沿いには、上流の「はねたき橋」から下流の「高津戸橋」までを結ぶ約500mの遊歩…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=275",
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
    "id": 80362,
    "title": "赤城自然園【群馬の紅葉特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image1504.jpg?1567127694",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "渋川市",
    "venue": "赤城自然園",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "渋川市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "赤城自然園は赤城山西麓に位置する広大な癒しの森。20種類以上のカエデやブナ、コナラなど豊富な木々で彩られ、包まれるよう…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1504",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 80549,
    "title": "わたらせ渓谷鐵道の紅葉",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "みどり市",
    "venue": "群馬県\n        \n          みどり市\n        \n        わたらせ渓谷鐵道",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "ウォーカープラス"
    ],
    "desc": "【群馬県\n        \n          みどり市\n        \n        わたらせ渓谷鐵道】わたらせ渓谷鐵道の紅葉",
    "url": "https://www.walkerplus.com/event/ar0310e372634/",
    "free": null,
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
    "id": 82584,
    "title": "吾妻渓谷【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image285.png?1537340585",
    "category": "culture",
    "label": "文化・学習",
    "area": "東吾妻町",
    "venue": "国指定名勝 吾妻峡",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "吾妻郡東吾妻町",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "関東の耶馬溪とも称される「吾妻渓谷」は、吾妻川両岸の溶岩が長い年月をかけ浸食された渓谷です。深い渓谷と、赤、黄色に染ま…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=285",
    "free": null,
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
    "startDate": "2026-11-16",
    "endDate": "2027-05-16",
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
    "startDate": "2026-11-16",
    "endDate": "2027-05-16",
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
    "id": 85403,
    "title": "草木湖【群馬の紅葉特集2026】",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image277.jpg?1663119044",
    "category": "culture",
    "label": "文化・学習",
    "area": "みどり市",
    "venue": "草木湖",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "みどり市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "利根川の第一の支流、渡良瀬川に建設された多目的ダム。足尾の山々を背景に、青々とした草木湖面と紅葉のコントラストは大変美…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=277",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 85851,
    "title": "人形劇であそぼう！",
    "emoji": "🎭",
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
    "desc": "11月21日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/%e4%ba%ba%e5%bd%a2%e5%8a%87%e3%81%a7%e3%81%82%e3%81%9d%e3%81%bc%e3%81%86%ef%bc%81/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 88447,
    "title": "「ぴよぴよの会」（群馬県生涯学習センター２Ｆ　キッズルームぐんまちゃん（育児学習室）／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7131.png?1794802236",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県生涯学習センター キッズルームぐんまちゃん（育児学習室",
    "startDate": "2026-12-08",
    "endDate": "2026-12-08",
    "tags": [
      "前橋市",
      "子育て"
    ],
    "desc": "手あそび、親子あそび、親子リズム、読み聞かせ、季節の製作などを行います。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7131",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 88798,
    "title": "ちよだまち夢フェスタ2026～スポーツ×こども×地域の未来～（千代田町東部運動公園／千代田町）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image7097.jpg?1793596068",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "千代田町",
    "venue": "千代田町東部運動公園",
    "startDate": "2026-12-19",
    "endDate": "2026-12-19",
    "tags": [
      "邑楽郡千代田町",
      "街・地域",
      "子供"
    ],
    "desc": "地域のみらいを一緒につくるスペシャルイベント「ちよだまち 夢フェスタ 2026」が開催されます。\n\n大人気のバルーンリ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7097",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 89319,
    "title": "制服バンク（洗濯工房 ココア／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image3882.jpg?1595991162",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "洗濯工房 COCOA（ココア",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "前橋市",
      "ボランティア・チャリティー",
      "エコ",
      "子育て"
    ],
    "desc": "前橋市の中学校を卒業した等で制服が「いらなくなった」「譲りたい」ご家庭から、「譲って欲しい」ご家庭へクリーニング済の中…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=3882",
    "free": null,
    "age": "詳細は公式サイトへ"
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
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "太田市"
    ],
    "desc": "花結び講座「干支・未（ひつじ）」（大隅俊平美術館） 学び・体験",
    "url": "https://www.city.ota.gunma.jp/page/1050044.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 91827,
    "title": "妙義山【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image280.jpg?1537922920",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "妙義山",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "富岡市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "妙義山は上毛三山のひとつで、また、日本三奇勝のひとつに数えられています。紅葉の時期は、険しい岩肌と色づいた樹木のコント…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=280",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 92983,
    "title": "まちなかキャンパス　AIで防災を始めよう！（前橋プラザ元気２１／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7099.jpg?1793598037",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋プラザ元気２１　中央公民館　5階503学習室",
    "startDate": "2026-11-26",
    "endDate": "2026-11-26",
    "tags": [
      "前橋市",
      "講演・講座",
      "学習"
    ],
    "desc": "AIで防災を始めよう！\n・今の備えで大丈夫？ AIと話しながら、防災の備えを見直します。\n・備蓄・避難・連絡方法 など…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7099",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93042,
    "title": "11月29日（日曜日）前橋総合卸売市場まつりを開催します",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "前橋市（詳細は公式サイト）",
    "startDate": "2026-11-29",
    "endDate": "2026-11-29",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/noseibu/nosei/oshirase/26103.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93257,
    "title": "子どもがつくる子ども食堂（太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6684.jpg?1776212203",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市天神公園内　浜町会館",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "太田市",
      "子供",
      "街・地域"
    ],
    "desc": "『みんなで作って、みんなで食べよう』をモットーに温かい食事を通じて、孤食を防ぎ、地域コミュニティーの活性化を図ろうと2…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6684",
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
    "id": 96253,
    "title": "榛名神社社家町新そば祭り",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "榛名神社社家町新そば祭り イベント",
    "url": "https://www.city.takasaki.gunma.jp/site/digital/51762.html",
    "free": false,
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
    "startDate": "2026-11-01",
    "endDate": "2026-11-01",
    "tags": [
      "高崎市"
    ],
    "desc": "染色ワークショップ「干支の絵馬ハンカチを作ろう」",
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
  },
  {
    "id": 98836,
    "title": "小中大滝【群馬の紅葉特集2026】",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image2134.jpg?1567128191",
    "category": "culture",
    "label": "文化・学習",
    "area": "みどり市",
    "venue": "小中大滝（けさかけ橋",
    "startDate": "2026-11-16",
    "endDate": "2026-11-16",
    "tags": [
      "みどり市",
      "紅葉",
      "季節",
      "自然"
    ],
    "desc": "階段式つり橋「けさかけ橋」を渡ると、眼前に壮大なスケールの小中大滝を眺めることができます。滝周辺は、春はカタクリ、ヤシ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2134",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 99779,
    "title": "下仁田ミート周年祭（安中市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image7106.jpg?1793773624",
    "category": "culture",
    "label": "文化・学習",
    "area": "安中市",
    "venue": "下仁田ミート(株",
    "startDate": "2026-11-21",
    "endDate": "2026-11-23",
    "tags": [
      "安中市",
      "グルメ",
      "街・地域"
    ],
    "desc": "今年は下仁田ミート・ミート事業部ができて50周年！\n日頃の感謝を込めて、今年は11/21(土)・22(日)・23(月・…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=7106",
    "free": null,
    "age": "詳細は公式サイトへ"
  }
];
