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
    "id": 10064,
    "title": "（参加者募集！）太鼓の達人eスポーツ体験会を行います！",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-07-31",
    "endDate": "2026-07-31",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/page/1059767.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 10832,
    "title": "六華地蔵祭　ROCKAZIZO(前橋市中央イベント広場／前橋市)",
    "emoji": "🎵",
    "image": "https://www.gunlabo.net/images_c/event/image6744.jpeg?1779091662",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市中央イベント広場",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "前橋市",
      "音楽",
      "街・地域"
    ],
    "desc": "6月14日に前橋中央イベント広場にて地域密着型音楽ライブイベントを行います。ぜひご観覧ください。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6744",
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
    "id": 12525,
    "title": "「そよかぜ」（群馬県生涯学習センター　キッズルームぐんまちゃん（育児学習室）／前橋市）",
    "emoji": "🎨",
    "image": "https://www.gunlabo.net/images_c/event/image6756.png?1779863755",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "群馬県生涯学習センター キッズルームぐんまちゃん（育児学習室",
    "startDate": "2026-06-12",
    "endDate": "2026-06-12",
    "tags": [
      "前橋市",
      "子育て",
      "家族"
    ],
    "desc": "親子で絵本を楽しみましょう。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6756",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 12722,
    "title": "GUNMA D:FEST 2026（高崎芸術劇場スタジオシアター/高崎市）",
    "emoji": "🎭",
    "image": "https://www.gunlabo.net/images_c/event/image6755.jpg?1779851131",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎芸術劇場 スタジオシアター",
    "startDate": "2026-08-11",
    "endDate": "2026-08-11",
    "tags": [
      "高崎市",
      "演劇・ダンス",
      "街・地域",
      "音楽"
    ],
    "desc": "今年の夏もDフェスで熱狂と感動を!\n\n今夏、オールジャンル屋内型ダンスフェスティバルが前橋のベイシア文化ホール 大ホー…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6755",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 12755,
    "title": "向井千秋記念子ども科学館　理科工作教室「キラキラ！光の不思議   空き缶万華鏡を作ろう」 （館林市）",
    "emoji": "🔧",
    "image": "https://www.gunlabo.net/images_c/event/image1655.jpg?1681348721",
    "category": "experience",
    "label": "体験・工作",
    "area": "館林市",
    "venue": "向井千秋記念子ども科学館",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "館林市",
      "講演・講座",
      "学習",
      "体験"
    ],
    "desc": "空き缶を使ってキラキラ光る万華鏡を \n作ります。光の不思議を持って帰ろう！\n\n \n申 込：不要（直接科学館へ） \n参加…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1655",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 12789,
    "title": "「ヨボ読ボの会」（群馬県生涯学習センター　キッズルームぐんまちゃん（育児学習室）／前橋市）",
    "emoji": "🎨",
    "image": "https://www.gunlabo.net/images_c/event/image6186.png?1762311804",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "群馬県生涯学習センター キッズルームぐんまちゃん（育児学習室",
    "startDate": "2026-06-09",
    "endDate": "2026-06-09",
    "tags": [
      "前橋市",
      "家族"
    ],
    "desc": "絵本または紙芝居の読み聞かせをします。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6186",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13620,
    "title": "ノンキ・佐藤のスペシャルイベント～マジック＆腹話術ショー！～",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月14日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/nonki-sato/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 13893,
    "title": "【6月開催】IKEA前橋社会科見学ツアー～サステナブルってなあに？～​（前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6767.png?1780216942",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "IKEA前橋",
    "startDate": "2026-06-10",
    "endDate": "2026-06-10",
    "tags": [
      "前橋市",
      "体験"
    ],
    "desc": "＜IKEA Familyメンバー限定＞​\nイケアでは環境に配慮したさまざまな取り組みをしています。​\nこのツアーでは、…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6767",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 14163,
    "title": "小野池あじさい公園　あじさいまつり",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "渋川市",
    "venue": "小野池あじさい公園",
    "startDate": "2026-06-13",
    "endDate": "2026-07-05",
    "tags": [
      "じゃらん",
      "渋川市",
      "観光"
    ],
    "desc": "【小野池あじさい公園】小野池あじさい公園　あじさいまつり",
    "url": "https://www.jalan.net/event/evt_357105/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 16791,
    "title": "令和8年度 第76回前橋七夕まつりの開催について",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "中央通り",
    "startDate": "2026-07-10",
    "endDate": "2026-07-12",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/sangyokeizai/kankoseisaku/gyomu/1/23905.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 16803,
    "title": "小野池あじさい公園あじさいまつり（渋川市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image5756.png?1746747946",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "渋川市",
    "venue": "小野池あじさい公園",
    "startDate": "2026-06-13",
    "endDate": "2026-07-05",
    "tags": [
      "渋川市",
      "街・地域",
      "季節",
      "自然"
    ],
    "desc": "群馬県渋川市で毎年6月中旬～7月上旬に開催される｢小野池あじさい公園あじさいまつり」。\n風輪の演出、和傘の貸出、夜間の…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5756",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 16916,
    "title": "第3次太田市環境基本計画ワークショップ参加者募集",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-05-28",
    "endDate": "2026-05-28",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1059507.html",
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
    "id": 17945,
    "title": "17_秋のファミリーキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-10-03",
    "endDate": "2026-10-03",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "秋の赤城山で季節ならではの体験やご飯を作るプログラムです。 ご家族で秋の赤城山を体験しませんか？",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=17_%E7%A7%8B%E3%81%AE%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "年少～一般"
  },
  {
    "id": 18100,
    "title": "キッズマネースクール「おみせやさんごっこ～はたらくってなあに？～」（前橋市市民活動支援センター／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6768.jpg?1780239160",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市市民活動支援センター会議室",
    "startDate": "2026-06-21",
    "endDate": "2026-06-21",
    "tags": [
      "前橋市",
      "子供",
      "子育て",
      "学習"
    ],
    "desc": "後援：群馬県金融広報委員会・前橋市教育委員会\n\n年中から小学4年生のお子様とその保護者様対象（10組まで）\nずっと子ど…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6768",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 18165,
    "title": "向井千秋記念子ども科学館　サイエンスショー「光と色の大実験」（館林市）",
    "emoji": "🔬",
    "image": "https://www.gunlabo.net/images_c/event/image2013.jpg?1594106303",
    "category": "culture",
    "label": "文化・学習",
    "area": "館林市",
    "venue": "向井千秋記念子ども科学館",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "館林市",
      "体験",
      "学習",
      "子供"
    ],
    "desc": "偏光板とブラックライトで、光と色のひみつを大実験！どんな風に見えるの？身近なものが光るの？ふしぎがいっぱいのサイエンス…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2013",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 18766,
    "title": "飼育室探検ツアー",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
    "tags": [
      "昆虫の森",
      "桐生市",
      "昆虫",
      "毎週"
    ],
    "desc": "ぐんま昆虫の森で毎週開催中の体験プログラムです。詳細は公式サイトをご確認ください。",
    "url": "https://www.pref.gunma.jp/site/giw/618881.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 19239,
    "title": "こどもわくわく劇場「つくしんぼ・虹色ハートシアター公演」",
    "emoji": "🎭",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月20日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/wakuwaku_tsukushi/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 21207,
    "title": "こどもたちを本気で怖がらせる「肝試し」つくらない？",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-21",
    "endDate": "2026-07-26",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月21日(日)・7月12日(日)・7月26日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/summer-night_kikaku/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 21450,
    "title": "サブリナビアガーデン高崎 星空と焼肉のビアガーデン",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "群馬県\n        \n          高崎市\n        \n        高崎オーパ",
    "startDate": "2026-09-30",
    "endDate": "2026-09-30",
    "tags": [
      "ウォーカープラス"
    ],
    "desc": "【群馬県\n        \n          高崎市\n        \n        高崎オーパ】サブリナビアガーデン高崎 星空と焼肉のビアガーデン",
    "url": "https://www.walkerplus.com/event/ar0310e548217/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 22267,
    "title": "【花・見ごろ】赤城山　レンゲツツジ",
    "emoji": "🌿",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県\n        \n          前橋市\n        \n        赤城山各所（大沼湖畔、白樺牧場、",
    "startDate": "2026-06-08",
    "endDate": "2026-06-08",
    "tags": [
      "ウォーカープラス",
      "入場無料"
    ],
    "desc": "【群馬県\n        \n          前橋市\n        \n        赤城山各所（大沼湖畔、白樺牧場、覚満淵）】【花・見ごろ】赤城山　レンゲツツジ",
    "url": "https://www.walkerplus.com/event/ar0310e578518/",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 22708,
    "title": "100万人のクラシックライブ　ぐんまこどもの国児童会館（令和8年7月20日）",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-05-16",
    "endDate": "2026-05-16",
    "tags": [
      "太田市"
    ],
    "desc": "100万人のクラシックライブ",
    "url": "https://www.city.ota.gunma.jp/page/1059010.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 22797,
    "title": "OYAKO NATU FES（桐生織物会館／桐生市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image5864.jpg?1779154838",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生織物会館",
    "startDate": "2026-07-25",
    "endDate": "2026-07-25",
    "tags": [
      "桐生市",
      "夏休み",
      "ワークショップ",
      "マルシェ"
    ],
    "desc": "暑い夏も安心の屋内で、親子で最高の思い出を作ろう！\n\n夏の思い出を彩る、最高のラインナップが勢揃い！\n\n今回も、親子で…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5864",
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
    "id": 26428,
    "title": "ふるさとエコツアー」杉木立から湧き出す「立馬沢」のホタルを鑑賞し、「夏の星空観察会」に参加しよう！（長野原町）【6月20日（土）・6月21日（日）】",
    "emoji": "🌟",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "中之条町",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "群馬県観光公式",
      "中之条町",
      "吾妻エリア"
    ],
    "desc": "吾妻エリアで開催。詳細は群馬県観光公式サイトをご確認ください。",
    "url": "https://gunma-kanko.jp/events/285",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 28902,
    "title": "麦とろフェスティバル（道の駅おおた／太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6775.jpg?1780886517",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "道の駅おおた",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "太田市",
      "グルメ",
      "街・地域"
    ],
    "desc": "大和芋早すりの世界大会も！年に一度のやまといもの祭典「麦とろフェスティバル」を開催！\n\n太田市の特産品である「やまとい…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6775",
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
    "id": 29509,
    "title": "太田市内の保育士の子どもの保育料無償化事業",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-05-27",
    "endDate": "2026-05-27",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/page/1058841.html",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 29824,
    "title": "いっしょに うたって おどろう キッズゴスペル（ぐんまこどもの国　児童会館／太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6758.jpg?1779934331",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国",
    "startDate": "2026-06-27",
    "endDate": "2026-06-27",
    "tags": [
      "太田市",
      "音楽"
    ],
    "desc": "東毛地域で活動する子どもゴスペルサークル『ハッピーエンジェルス』は２０２６年９月で結成２０年を迎えます！\n\nこのたび、…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6758",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30242,
    "title": "ぐんまの民俗芸能in県立女子大vol.6～人形浄瑠璃～",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6255.jpg?1779174786",
    "category": "culture",
    "label": "文化・学習",
    "area": "玉村町",
    "venue": "群馬県立女子大学　講堂",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "佐波郡玉村町",
      "伝統芸能",
      "学習"
    ],
    "desc": "人形の構造を説明するワークショップや公演、群馬の人形芝居についてのレクチャーなど、初めての方でも理解を深めながらお楽し…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6255",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30356,
    "title": "09_カッター指導者養成講習会",
    "emoji": "🌿",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-07-04",
    "endDate": "2026-07-04",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "前橋市赤城少年自然の家では、関東でも珍しいカッターボート体験のプログラムを実施！ 夏の思い出作りにスポーツクラブの仲間や同窓会の行事など、大沼で力を合わせてカッターボートを漕いでみませんか？ こちらの講習会を受講していただくとカッターボート",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=09_%E3%82%AB%E3%83%83%E3%82%BF%E3%83%BC%E6%8C%87%E5%B0%8E%E8%80%85%E9%A4%8A%E6%88%90%E8%AC%9B%E7%BF%92%E4%BC%9A",
    "free": false,
    "age": "高校生以上(カッターボート訓練を行う利用団体指導者、及びカッ"
  },
  {
    "id": 30516,
    "title": "クラフトルーム工作「アニマルなるこ♪」",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-07-01",
    "endDate": "2026-07-26",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "7月1日(水)～26日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_naruko/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 30721,
    "title": "前橋バルストリート2025（前橋駅前けやき通り／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image3477.jpg?1780374149",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋駅前けやき並木",
    "startDate": "2026-10-03",
    "endDate": "2026-10-04",
    "tags": [
      "前橋市",
      "グルメ",
      "野外",
      "街・地域"
    ],
    "desc": "カッコイイお店が本気で作る　カッコイイ大人の休日。\n「前橋バルストリート2026」開催です！\n\n今年も2DAYSで駅前…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=3477",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 31439,
    "title": "夏休み染色体験　藍の生葉染体験",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "夏休み染色体験 藍の生葉染体験 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/66862.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 32135,
    "title": "第14回ぐんまフランス祭2026～ぐんまがフランスになる3日間～（群馬県庁／前橋市）",
    "emoji": "🎭",
    "image": "https://www.gunlabo.net/images_c/event_tag/0003.png?1322546400",
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
    "id": 33484,
    "title": "高崎経済大学地域政策学会令和8年度第1回学術文化講演会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "高崎経済大学地域政策学会令和8年度第1回学術文化講演会＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2231.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 34015,
    "title": "普段は入れない！赤城白樺牧場　秘密の絶景ツアー",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "赤城白樺牧場（受付/赤城山総合観光案内所）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-15",
    "tags": [
      "じゃらん",
      "前橋市",
      "観光"
    ],
    "desc": "【赤城白樺牧場（受付/赤城山総合観光案内所）】普段は入れない！赤城白樺牧場　秘密の絶景ツアー",
    "url": "https://www.jalan.net/event/evt_357112/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 34145,
    "title": "おおたまつり（南会場）",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-05-21",
    "endDate": "2026-05-21",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1024861.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 34268,
    "title": "19_どんぐりキャンプ",
    "emoji": "🏕️",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-10-17",
    "endDate": "2026-10-18",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "ハイキングやどんぐりクラフト体験、野外炊事等、仲間たちと協力して楽しく過ごします！ 赤城でチャレンジした事、友だちとの思い出は一生の宝物に♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=19_%E3%81%A9%E3%82%93%E3%81%90%E3%82%8A%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
  },
  {
    "id": 34350,
    "title": "老神温泉ホタル観賞",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "沼田市",
    "venue": "老神湿地公園",
    "startDate": "2026-06-10",
    "endDate": "2026-07-20",
    "tags": [
      "じゃらん",
      "沼田市",
      "観光"
    ],
    "desc": "【老神湿地公園】老神温泉ホタル観賞",
    "url": "https://www.jalan.net/event/evt_357114/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 34636,
    "title": "18_アクティビティキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-10-10",
    "endDate": "2026-10-11",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "赤城の自然の中でいろいろなキャンプスポーツをする、アクティビティキャンプです！ 体力があってもなくても、みんなで楽しもう♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=18_%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
  },
  {
    "id": 34659,
    "title": "アウトドアスクール ～8/29黒檜登山に学ぶ～",
    "emoji": "🎈",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-08-29",
    "endDate": "2026-08-29",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "7つの山からなる赤城山。赤城山で一番高い黒檜山を登山します。 ガイドと一緒に赤城山を知ることができるプランです♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB+%EF%BD%9E8%2F29%E9%BB%92%E6%AA%9C%E7%99%BB%E5%B1%B1%E3%81%AB%E5%AD%A6%E3%81%B6%EF%BD%9E",
    "free": false,
    "age": "小学5年生～一般"
  },
  {
    "id": 34854,
    "title": "あそぼうタイム「忍者学校～きみも忍者になろう！！～」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-28",
    "endDate": "2026-06-28",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月28日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/asobo_ninja/",
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
    "id": 35593,
    "title": "トハメルカド境赤レンガ倉庫 第14回  ボタニカル × レイニーワークフェス（伊勢崎境赤レンガ倉庫／伊勢崎市）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image6677.jpg?1775877187",
    "category": "culture",
    "label": "文化・学習",
    "area": "伊勢崎市",
    "venue": "伊勢崎境赤レンガ倉庫",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "伊勢崎市",
      "マルシェ",
      "ワークショップ",
      "家族"
    ],
    "desc": "6月の雨は、植物たちを輝かせ、私たちの心を静かに整えてくれる恵みの雨。\n歴史を刻んだ重厚な赤レンガ倉庫を舞台に、\n心と…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6677",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 35831,
    "title": "AKAGI アクティビティー倶楽部 森林ヨガ＆ノルディックウォークプラン",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-09-05",
    "endDate": "2026-09-05",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "自然豊かな赤城山でゆったりデイキャンプを楽しみませんか♪ 心地よい大沼湖畔沿い・森林の中でヨガを体験しリフレッシュ！ 午後のノルディックウォークプログラムでは、ウォーキング指導、赤城山のガイドもお楽しみできます♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=AKAGI+%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E3%83%BC%E5%80%B6%E6%A5%BD%E9%83%A8%E3%80%80%E6%A3%AE%E6%9E%97%E3%83%A8%E3%82%AC%EF%BC%86%E3%83%8E%E3%83%AB%E3%83%87%E3%82%A3%E3%83%83%E3%82%AF%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%97%E3%83%A9%E3%83%B3",
    "free": false,
    "age": "小学生～一般"
  },
  {
    "id": 37404,
    "title": "群馬県立ぐんま昆虫の森　夏の特別展「カブト・クワガタ展」",
    "emoji": "🦋",
    "category": "exhibition",
    "label": "展覧会",
    "area": "桐生市",
    "venue": "群馬県立ぐんま昆虫の森",
    "startDate": "2026-07-11",
    "endDate": "2026-08-30",
    "tags": [
      "じゃらん",
      "桐生市",
      "観光"
    ],
    "desc": "【群馬県立ぐんま昆虫の森】群馬県立ぐんま昆虫の森　夏の特別展「カブト・クワガタ展」",
    "url": "https://www.jalan.net/event/evt_358427/",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 39548,
    "title": "【花・見ごろ】シャクヤク　道の駅ぐりーんふらわー牧場・大胡　※シャクヤクは昨年撤去され現在は観賞不可",
    "emoji": "🌿",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "群馬県\n        \n          前橋市\n        \n        道の駅ぐりーんふらわー牧場・大胡",
    "startDate": "2026-06-08",
    "endDate": "2026-06-08",
    "tags": [
      "ウォーカープラス",
      "入場無料"
    ],
    "desc": "【群馬県\n        \n          前橋市\n        \n        道の駅ぐりーんふらわー牧場・大胡】【花・見ごろ】シャクヤク　道の駅ぐりーんふらわー牧場・大胡　※シャクヤクは昨年撤去され現在は観賞不可",
    "url": "https://www.walkerplus.com/event/ar0310e578520/",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 39820,
    "title": "尾瀬ヶ原ハイキングへ",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6759.png?1779944550",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "片品村",
    "venue": "尾瀬ヶ原（尾瀬の玄関口鳩待峠～牛首分岐付近",
    "startDate": "2026-07-11",
    "endDate": "2026-07-11",
    "tags": [
      "利根郡片品村",
      "自然",
      "夏休み",
      "植物"
    ],
    "desc": "上毛高原駅・沼田駅・利根沼田各地から出発♪\nはじめてでも安心、尾瀬ガイドさんと一緒に無理なく楽しく歩くがテーマです♪\n…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6759",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 40269,
    "title": "07_クッキングキャンプ～みんなでつくるアウトドアごはん！～",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-06-20",
    "endDate": "2026-06-21",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "3食自分たちで自分たちのごはんを作るキャンプ♡ 1泊2日で料理の腕が上がります！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=07_%E3%82%AF%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%EF%BD%9E%E3%81%BF%E3%82%93%E3%81%AA%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%81%94%E3%81%AF%E3%82%93%EF%BC%81%EF%BD%9E",
    "free": false,
    "age": "小学生～中学生"
  },
  {
    "id": 40274,
    "title": "第7回 KIRYU FES～KIDS DREAM SKY FES（昭和村総合運動公園／昭和村）",
    "emoji": "🎭",
    "image": "https://www.gunlabo.net/images_c/event/image6315.jpg?1780283488",
    "category": "culture",
    "label": "文化・学習",
    "area": "昭和村",
    "venue": "昭和村総合運動公園",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "利根郡昭和村",
      "家族",
      "ワークショップ"
    ],
    "desc": "第7回目となる KIRYUFES を開催いたします！\n今回の舞台は群馬県昭和村です。昭和村は「日本で最も美しい村」連合…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6315",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 40619,
    "title": "16_親子幼児キャンプ～秋の自然で遊ぼう♪～",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-09-19",
    "endDate": "2026-09-19",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "年少から年長のおともだち！！！赤城の自然の中で一緒にあそびましょうー！！！ 保護者のみなさま、簡単なキャンプ体験やご飯作り等をします！ スタッフが全力でサポートさせていただきます！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=16_%E8%A6%AA%E5%AD%90%E5%B9%BC%E5%85%90%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%EF%BD%9E%E7%A7%8B%E3%81%AE%E8%87%AA%E7%84%B6%E3%81%A7%E9%81%8A%E3%81%BC%E3%81%86%E2%99%AA%EF%BD%9E",
    "free": false,
    "age": "幼児親子"
  },
  {
    "id": 40798,
    "title": "藍染で大桝絞りの浴衣地を染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "藍染で大桝絞りの浴衣地を染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/74194.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 41318,
    "title": "甘楽町花火大会／甘楽町商工会夏まつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event_tag/0008.png?1322546386",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "甘楽町",
    "venue": "甘楽ふれあいの丘",
    "startDate": "2026-08-14",
    "endDate": "2026-08-14",
    "tags": [
      "甘楽郡甘楽町",
      "花火",
      "祭・伝統行事",
      "街・地域"
    ],
    "desc": "甘楽町商工会主催の夏まつりに合わせて実施される甘楽町花火大会。\n大輪の花火が、甘楽の真夏の夜空を彩ります。\n\n※開催状…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=2642",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43159,
    "title": "ぐんま方言かるた体験会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月14日(日)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/hougenkaruta/",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 43373,
    "title": "ホンダカーズ群馬 地域安全フェスタ　2026夏（ホンダカーズ群馬 前橋大島店／前橋市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image5886.jpg?1779064759",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "ホンダカーズ群馬 前橋大島店",
    "startDate": "2026-06-13",
    "endDate": "2026-06-13",
    "tags": [
      "前橋市",
      "体験",
      "家族"
    ],
    "desc": "毎回大好評の「地域安全フェスタ」、今回はHonda Cars群馬 前橋大島店で開催！\n\n群馬県警察やザスパ群馬、前橋東…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5886",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43521,
    "title": "令和８年度前期イベントガイド",
    "emoji": "💧",
    "category": "culture",
    "label": "文化・学習",
    "area": "富岡市",
    "venue": "群馬県立自然史博物館",
    "startDate": "2026-04-01",
    "endDate": "2026-04-01",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "令和８年度前期イベントガイド 2026年4月1日(水)～2026年9月30日(水) その他",
    "url": "https://www.gmnh.pref.gunma.jp/event/id9372/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43523,
    "title": "赤堀花しょうぶ園（伊勢崎市）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image1303.jpg?1496107276",
    "category": "culture",
    "label": "文化・学習",
    "area": "伊勢崎市",
    "venue": "赤堀花しょうぶ園",
    "startDate": "2026-06-05",
    "endDate": "2026-06-21",
    "tags": [
      "伊勢崎市",
      "植物",
      "野外",
      "花見"
    ],
    "desc": "約25,000株もの花しょうぶが咲き誇る赤堀花しょうぶ園で毎年開催されているイベントです。\n紫と白の花の美しいグラデー…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1303",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43622,
    "title": "みんなde Signマルシェ（あそか会館／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6740.jpg?1778741004",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "社会福祉法人前橋あそか会「あそか会館」",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "前橋市",
      "マルシェ",
      "グルメ",
      "ワークショップ"
    ],
    "desc": "『みんなde Signマルシェ』\nみんなで繋がる、やさしい時間\n手話を使って楽しむ時間\n2026年6月14日(日曜日)…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6740",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 43699,
    "title": "AKAGIアクティビティ倶楽部 ツリーイング＆焚火キャンプ飯プラン(７/20)",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-07-20",
    "endDate": "2026-07-20",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "景色抜群なツリーイングと、自分で火おこしした火で作る焚火キャンプ飯は格別！！！ 赤城山の自然の中でゆったりとした時間を過ごすイベントです。充実した赤城時間をお楽しみください♪",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=AKAGI%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%93%E3%83%86%E3%82%A3%E5%80%B6%E6%A5%BD%E9%83%A8%E3%80%80%E3%83%84%E3%83%AA%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0%EF%BC%86%E7%84%9A%E7%81%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E9%A3%AF%E3%83%97%E3%83%A9%E3%83%B3%28%EF%BC%97%2F20%29",
    "free": false,
    "age": "小学生以上～一般"
  },
  {
    "id": 43848,
    "title": "桐生市マーチングフェスティバル（桐生ガススポーツセンター／桐生市）",
    "emoji": "🎵",
    "image": "https://www.gunlabo.net/images_c/event_tag/0003.png?1322546400",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "桐生市",
    "venue": "桐生ガススポーツセンター（桐生市民体育館",
    "startDate": "2026-08-29",
    "endDate": "2026-08-29",
    "tags": [
      "桐生市",
      "街・地域",
      "音楽"
    ],
    "desc": "桐生市と近隣の小・中学校、高校、音楽団体などが集い、息の合った音楽演奏を披露します。",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6673",
    "free": null,
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
    "id": 44339,
    "title": "20_ハロウィンキャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-10-31",
    "endDate": "2026-11-01",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "仲間と一緒にハロウィンの仮装やお菓子作りをしよう！ 内容はお楽しみに♡",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=20_%E3%83%8F%E3%83%AD%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学生"
  },
  {
    "id": 45580,
    "title": "かやぶき民家見学・昔あそび",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "ぐんま昆虫の森",
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 47715,
    "title": "デジタルものづくり体験学習会を開催します！",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-06-07",
    "endDate": "2026-06-07",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/page/1049286.html",
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
    "startDate": "2026-06-13",
    "endDate": "2026-06-13",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月13日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/%e3%81%a1%e3%82%87%e3%81%93%e3%81%a3%e3%81%a8%e3%83%97%e3%83%a9%e3%83%8d%e3%82%bf%e3%83%aa%e3%82%a6%e3%83%a0/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 49811,
    "title": "護国神社 七夕祭り＆マルシェ（高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event_tag/0022.png?1322546390",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "群馬県護国神社【ポイントUP対象】",
    "startDate": "2026-07-04",
    "endDate": "2026-07-04",
    "tags": [
      "高崎市",
      "音楽",
      "季節"
    ],
    "desc": "今年もやります‼︎\n\n2026年7月4日（土）、当社4回目となる七夕祭りを開催致します☆\n\nイベント内容やタイムテーブ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5812",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 52633,
    "title": "NPO法人 麦わら屋×ぐんラボ！フェスタ　コラボイベント（ミヤケン元気21（前橋プラザ元気21）／前橋市",
    "emoji": "🎨",
    "image": "https://www.gunlabo.net/images_c/event/image6753.jpg?1779756113",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "ミヤケン元気21（前橋プラザ元気21",
    "startDate": "2026-11-06",
    "endDate": "2026-11-08",
    "tags": [
      "前橋市",
      "アート",
      "街・地域"
    ],
    "desc": "アート活動にも注力し、近年注目を集めている「NPO法人 麦わら屋」と、ぐんラボ！フェスタがコラボイベントを開催！\n前橋…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6753",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 52996,
    "title": "人形劇であそぼう！",
    "emoji": "🎭",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月20日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/ningyogekideasobo/",
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
    "startDate": "2026-06-24",
    "endDate": "2026-06-24",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月24日(水)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/nenne/",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 53428,
    "title": "「高崎経済大学地域科学研究所 研究プロジェクト公開講演会について」",
    "emoji": "🔬",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学地域科学研究所 研究プロジェクト公開講演会について」＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2214.html",
    "free": false,
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
    "startDate": "2026-06-12",
    "endDate": "2026-06-12",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月12日(金)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/sodan_rinsho/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 54119,
    "title": "【小学生対象】　英検・漢検の受検料半額を助成します",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-04-30",
    "endDate": "2026-04-30",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1047111.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 54711,
    "title": "伊香保ハワイアンフェスティバル",
    "emoji": "💧",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "渋川市",
    "venue": "渋川市営物聞駐車場　特設ステージ　ほか",
    "startDate": "2026-07-02",
    "endDate": "2026-07-05",
    "tags": [
      "じゃらん",
      "渋川市",
      "観光"
    ],
    "desc": "【渋川市営物聞駐車場　特設ステージ　ほか】伊香保ハワイアンフェスティバル",
    "url": "https://www.jalan.net/event/evt_358421/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 55186,
    "title": "藍染・立涌絞りで木綿のストールを染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "藍染・立涌絞りで木綿のストールを染める 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/70687.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 56132,
    "title": "くらぶちの夏祭り",
    "emoji": "🎈",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎市倉渕支所前駐車場",
    "startDate": "2026-08-11",
    "endDate": "2026-08-11",
    "tags": [
      "じゃらん",
      "高崎市",
      "観光"
    ],
    "desc": "【高崎市倉渕支所前駐車場】くらぶちの夏祭り",
    "url": "https://www.jalan.net/event/evt_358407/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 56621,
    "title": "プレミアムドッグフェスタ（Gメッセ群馬／高崎市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event/image6523.jpg?1770092041",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "Gメッセ群馬（群馬コンベンションセンター",
    "startDate": "2026-08-15",
    "endDate": "2026-08-16",
    "tags": [
      "高崎市",
      "ペット・動物"
    ],
    "desc": "関東各地で開催中の大型ドッグイベント、群馬県内で室内開催！！\n愛犬が思いっきり遊べて、オーナー様も心から楽しめる特別な…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6523",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 56952,
    "title": "＜令和8（2026）年開催中止＞たまむら花火大会",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image895.jpg?1559788777",
    "category": "culture",
    "label": "文化・学習",
    "area": "玉村町",
    "venue": "玉村町上陽地区（上陽小学校西側",
    "startDate": "2026-06-08",
    "endDate": "2026-06-08",
    "tags": [
      "佐波郡玉村町",
      "花火",
      "祭・伝統行事",
      "街・地域"
    ],
    "desc": "令和8（2026）年の「たまむら花火大会」開催はありません。\n\n\n＊＊＊＊＊＊＊＊＊＊＊＊＊＊\n「群馬の夏は玉村の花火…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=895",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57012,
    "title": "たまごフェスタ2026（群馬県庁／前橋市）",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event_tag/0009.png?1322546386",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "群馬県庁",
    "startDate": "2026-06-28",
    "endDate": "2026-06-28",
    "tags": [
      "前橋市",
      "グルメ",
      "街・地域",
      "講演・講座"
    ],
    "desc": "県内の養鶏農家による、卵をテーマとしたイベントを開催します。　\n当日は、ひよこと直接触れ合える「ひよこと遊ぼう」や、…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5075",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57179,
    "title": "高崎市少年科学館プラネタリウム「ヒーリングアース In Japan　日本の絶景と煌めく星空」",
    "emoji": "🌟",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "高崎市少年科学館プラネタリウム「ヒーリングアース In Japan 日本の絶景と煌めく星空」＜外部リンク＞",
    "url": "https://www.takasaki-foundation.or.jp/t-kagakukan/show-detail.php?&id=37",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57280,
    "title": "夏休み親子藍染教室（Tシャツ染め）",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "夏休み親子藍染教室（Tシャツ染め）",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/66869.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57832,
    "title": "第128回企画展「まつおりかこ 絵本の世界」（群馬県立土屋文明記念文学館／高崎市）",
    "emoji": "🦁",
    "image": "https://www.gunlabo.net/images_c/event/image6710.jpg?1776755197",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "群馬県立土屋文明記念文学館",
    "startDate": "2026-04-25",
    "endDate": "2026-06-28",
    "tags": [
      "高崎市",
      "展示会・展覧会",
      "ゴールデンウィーク"
    ],
    "desc": "まつおりかこは、愛らしい動物たちが登場する絵本を数多く手がける絵本作家です。\n本展では、最新作『いつつごうさぎとはなの…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6710",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 57856,
    "title": "草木染・親子ではじめての型染ー2日コース",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "草木染・親子ではじめての型染ー2日コース 子ども",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/66873.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 58864,
    "title": "フレッセイ×キリンビバレッジ共同企画　『ぐんまちゃんこども支援プロジェクト』",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6726.jpg?1777617112",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "フレッセイ全店（ネットスーパー含む",
    "startDate": "2026-05-01",
    "endDate": "2026-10-31",
    "tags": [
      "前橋市",
      "キャンペーン",
      "子供"
    ],
    "desc": "フレッセイ×キリンビバレッジ共同企画\n午後の紅茶４０周年特別企画\nぐんまちゃんこども支援プロジェクト。\n\n「午後の紅茶…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6726",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 58874,
    "title": "OTA Musec LIVE 2026（オープンハウスアリーナOTA／太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6762.jpg?1780030848",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "オープンハウスアリーナ太田（太田市総合体育館",
    "startDate": "2026-07-20",
    "endDate": "2026-07-20",
    "tags": [
      "太田市",
      "音楽"
    ],
    "desc": "-世代を超えて心を満たす本物のライブ体験を。-\n\n『OTA Musec LIVE 2026』では、心温まる素晴らしい音…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6762",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 60226,
    "title": "お気に入りの反物で浴衣を仕立てる",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "お気に入りの反物で浴衣を仕立てる 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/66872.html",
    "free": false,
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 61054,
    "title": "富岡どんとまつり",
    "emoji": "🎪",
    "image": "https://www.gunlabo.net/images_c/event_tag/0001.png?1322546399",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "富岡市",
    "venue": "富岡市街地",
    "startDate": "2026-10-17",
    "endDate": "2026-10-18",
    "tags": [
      "富岡市",
      "祭・伝統行事",
      "街・地域"
    ],
    "desc": "市内最大規模の祭り。市街地の夜を彩る祭りちょうちん、勇壮で華やかな山車、そして活気あふれるお囃子と踊り連の大競演などが…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=264",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 61997,
    "title": "八幡ホタルの郷の蛍",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "榛東村",
    "venue": "八幡ホタルの郷",
    "startDate": "2026-06-01",
    "endDate": "2026-07-07",
    "tags": [
      "じゃらん",
      "榛東村",
      "観光"
    ],
    "desc": "【八幡ホタルの郷】八幡ホタルの郷の蛍",
    "url": "https://www.jalan.net/event/evt_357115/",
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
    "id": 62940,
    "title": "向井千秋記念子ども科学館　夜間天体観望会 「春の星空を中心に  探してみよう」 （館林市）",
    "emoji": "🌟",
    "image": "https://www.gunlabo.net/images_c/event/image1403.jpg?1594183788",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "館林市",
    "venue": "向井千秋記念子ども科学館",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "館林市",
      "学習",
      "自然",
      "講演・講座"
    ],
    "desc": "春の星座を観察します。\n\n申 込：不要（直接科学館へ）\n参加費：無料\n※雨天・曇天の場合は中止\n\n※小学生以下は保護者…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1403",
    "free": true,
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "startDate": "2026-04-24",
    "endDate": "2026-04-24",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/site/kosodate/1028029.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 64581,
    "title": "大名庭園のホタル観賞会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "甘楽町",
    "venue": "楽山園",
    "startDate": "2026-06-06",
    "endDate": "2026-06-13",
    "tags": [
      "じゃらん",
      "甘楽町",
      "観光"
    ],
    "desc": "【楽山園】大名庭園のホタル観賞会",
    "url": "https://www.jalan.net/event/evt_357117/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 64728,
    "title": "「高崎経済大学地域科学研究所第11回連携公開講座」（5月16（土曜日）5月30日（土曜日）6月6日（土曜日）6月13日（土曜日）6月20日（土曜日））",
    "emoji": "🔬",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "「高崎経済大学地域科学研究所第11回連携公開講座」（5月16（土曜日）5月30日（土曜日）6月6日（土曜日）6月13日（土曜日）6月20日（土曜日））＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2043.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 65260,
    "title": "月夜野ホタルの里の蛍",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "みなかみ町",
    "venue": "月夜野ホタルの里遊歩道",
    "startDate": "2026-06-10",
    "endDate": "2026-07-20",
    "tags": [
      "じゃらん",
      "みなかみ町",
      "観光"
    ],
    "desc": "【月夜野ホタルの里遊歩道】月夜野ホタルの里の蛍",
    "url": "https://www.jalan.net/event/evt_357116/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 65464,
    "title": "令和8年　館林手筒花火大会【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image914.png?1560219254",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "館林市",
    "venue": "館林城ゆめひろば（館林市役所東広場",
    "startDate": "2026-07-25",
    "endDate": "2026-07-25",
    "tags": [
      "館林市",
      "花火",
      "祭・伝統行事"
    ],
    "desc": "館林藩主榊原氏の発祥の地である三河地方に伝わる手筒花火。約10mも火柱が吹き上がる様子は迫力満点！\n手筒花火だけでなく…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=914",
    "free": null,
    "age": "詳細は公式サイトへ"
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
    "id": 65527,
    "title": "花結び講座「梅結びのバックチャーム」（大隅俊平美術館）",
    "emoji": "🌿",
    "category": "exhibition",
    "label": "展覧会",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-06-11",
    "endDate": "2026-06-12",
    "tags": [
      "太田市"
    ],
    "desc": "太田市立大隅俊平美術館 花結び講座「梅結び　バックチャーム」をご紹介しています。本行事は、参加者が江戸紐でバックチャームを作る体験講座です。",
    "url": "https://www.city.ota.gunma.jp/page/1030602.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 67820,
    "title": "Buggy yoga / 産後ダイエット 産後ケア 産後ヨガ ママ友作り（道の駅まえばし赤城／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6776.jpeg?1780888075",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "道の駅まえばし赤城",
    "startDate": "2026-06-23",
    "endDate": "2026-06-23",
    "tags": [
      "前橋市",
      "ママ",
      "子育て",
      "体験"
    ],
    "desc": "バギーヨガはベビーカーを使ったヨガです☺\n産後バランス力が低下していたり、身体の固い方でもベビーカーを支えにしてポーズ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6776",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 67897,
    "title": "パソコンプログラミング体験「ロボット工房」",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-13",
    "endDate": "2026-06-13",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月13日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/pc_programming/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 68776,
    "title": "利根川坂東大橋花火大会（いせさき花火大会）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image918.jpg?1771228432",
    "category": "culture",
    "label": "文化・学習",
    "area": "伊勢崎市",
    "venue": "八斗島ちびっこ広場周辺河川敷",
    "startDate": "2026-10-10",
    "endDate": "2026-10-10",
    "tags": [
      "伊勢崎市",
      "花火",
      "祭・伝統行事"
    ],
    "desc": "今年の いせさき花火大会は...\n\n＼ 利根川坂東大橋花火大会 ／\n\n坂東大橋上流を打上場所として\n本庄市と合同で花火…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=918",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 68787,
    "title": "2026道の駅まえばし赤城　赤城で台湾さんぽ　昭和をみつける〜九份の夜〜（前橋市）",
    "emoji": "🏺",
    "image": "https://www.gunlabo.net/images_c/event/image6763.jpg?1780034907",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "道の駅まえばし赤城",
    "startDate": "2026-07-04",
    "endDate": "2026-07-05",
    "tags": [
      "前橋市",
      "街・地域",
      "祭・伝統行事"
    ],
    "desc": "前橋市と歴史的に交流がある台南市や台湾の魅力をはじめ、\n本場でしか味わえない台湾グルメ、心踊るステージ、\nそして奥深い…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6763",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 70916,
    "title": "しもにた青空市（こんにゃく体験道場及び前広場／下仁田町）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image5441.jpg?1780035257",
    "category": "culture",
    "label": "文化・学習",
    "area": "下仁田町",
    "venue": "こんにゃく体験道場及び前広場",
    "startDate": "2026-06-28",
    "endDate": "2026-06-28",
    "tags": [
      "甘楽郡下仁田町",
      "街・地域",
      "グルメ",
      "子供"
    ],
    "desc": "しもにた青空市が開催となります。ご来場お待ちしております。\n\n＜内容＞\nこんにゃく道場前広場、まちなかマルシェ広場 に…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5441",
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
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 74241,
    "title": "定期歴史講座「かみつけ塾」（7月19日）",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "定期歴史講座「かみつけ塾」（7月19日） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/5542.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 74631,
    "title": "アウトドアスクール キャンプでやりたい10のこと",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-09-21",
    "endDate": "2026-09-22",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "キャンプでやりたい10のことを体験を通して学んでみませんか！ キャンプやアウトドアに関する知識を深め、楽しみながら次のステップに繋げてください！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%80%80%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E3%81%A7%E3%82%84%E3%82%8A%E3%81%9F%E3%81%8410%E3%81%AE%E3%81%93%E3%81%A8",
    "free": false,
    "age": "小学4年生～一般"
  },
  {
    "id": 76597,
    "title": "15_防災キャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-09-12",
    "endDate": "2026-09-13",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "電気がない、水が足りない、そんな時に役立つ知識や行動力をキャンプ活動をしながら身につけよう！ 防災ゲームなど、楽しく災害について学ぶ１泊２日のイベントです！",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=15_%E9%98%B2%E7%81%BD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E3%80%80",
    "free": false,
    "age": "小学生～中学生"
  },
  {
    "id": 76907,
    "title": "ハンドメイドマルシェ　bouquet（ブーケ）（エアリスの小さな森公園／太田市）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image6192.jpg?1775026656",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "太田市",
    "venue": "エアリスの小さな森公園（旧アンディ＆ウィリアムス ボタニックガーデン",
    "startDate": "2026-10-17",
    "endDate": "2026-10-18",
    "tags": [
      "太田市",
      "マルシェ",
      "グルメ",
      "ワークショップ"
    ],
    "desc": "今年も、群馬県太田市にあるエアリスの小さな森公園にて、「ハンドメイドマルシェ」を開催いたします。\n花と緑に囲まれた自然…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6192",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 77157,
    "title": "令和8年　大胡祇園まつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image931.png?1559883041",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "下町通り（歩行者天国",
    "startDate": "2026-07-25",
    "endDate": "2026-07-26",
    "tags": [
      "前橋市",
      "祭・伝統行事",
      "伝統芸能",
      "街・地域"
    ],
    "desc": "令和8年の「大胡祇園まつり」を、令和8年7月25日（土曜日）・26日（日曜日）に開催します。\n\n--- ---\n【大胡…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=931",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 77429,
    "title": "尾島ねぷたまつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image1152.jpg?1528942787",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "尾島商店街大通り（県道142号線",
    "startDate": "2026-08-14",
    "endDate": "2026-08-15",
    "tags": [
      "太田市",
      "祭・伝統行事",
      "街・地域",
      "伝統芸能"
    ],
    "desc": "「ねぷた」で有名な青森県弘前市との歴史的なつながりから、昭和61年に誕生した尾島ねぷたまつり。今年で40周年を迎えます…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1152",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 77802,
    "title": "第52回高崎まつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image905.jpg?1528942807",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "あら町、慈光通り、もてなし広場など／烏川河川敷",
    "startDate": "2026-08-22",
    "endDate": "2026-08-23",
    "tags": [
      "高崎市",
      "祭・伝統行事",
      "花火",
      "街・地域"
    ],
    "desc": "高崎まつりは、高崎山車まつりと同時に行われるお祭り。\n神輿のほかに、巨大だるまみこしや創作だるまみこしといった高崎まつ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=905",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 78055,
    "title": "吾妻公園　花菖蒲まつり",
    "emoji": "🌿",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "桐生市",
    "venue": "吾妻公園",
    "startDate": "2026-06-06",
    "endDate": "2026-06-21",
    "tags": [
      "じゃらん",
      "桐生市",
      "観光"
    ],
    "desc": "【吾妻公園】吾妻公園　花菖蒲まつり",
    "url": "https://www.jalan.net/event/evt_357109/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 78061,
    "title": "高崎経済大学経済学会 令和8年度第1回学術講演会",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-07-01",
    "endDate": "2026-07-01",
    "tags": [
      "高崎市"
    ],
    "desc": "高崎経済大学経済学会 令和8年度第1回学術講演会＜外部リンク＞ 講演・講座",
    "url": "https://www.tcue.ac.jp/news/2229.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 79985,
    "title": "【城南地区】私たちの身近にある自然豊かな子ども絵画コンクール",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "前橋市",
    "venue": "前橋市（詳細は公式サイト）",
    "startDate": "2026-09-14",
    "endDate": "2026-09-14",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/shimin/jounan/gyomu/3/33806.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 80653,
    "title": "【夏休み群馬発バスツアー！】夏の大冒険！上越うみがたりとシアター・トレイン",
    "emoji": "💧",
    "image": "https://www.gunlabo.net/images_c/event/image6760.png?1779945275",
    "category": "culture",
    "label": "文化・学習",
    "area": "沼田市",
    "venue": "上越市",
    "startDate": "2026-07-19",
    "endDate": "2026-07-19",
    "tags": [
      "沼田市",
      "夏休み",
      "野外",
      "体験"
    ],
    "desc": "【利根沼田各乗車場所より出発！】\n\n夏の思い出作り♪\n日本海をバックに\n爽快感抜群のイルカショー\n電車の天井がシアター…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6760",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 82567,
    "title": "KIRYU SKY LANTERN（桐生スカイランタン） 2026 （桐生市南公園／桐生市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event_tag/0003.png?1322546400",
    "category": "culture",
    "label": "文化・学習",
    "area": "桐生市",
    "venue": "桐生市南公園",
    "startDate": "2026-10-11",
    "endDate": "2026-10-11",
    "tags": [
      "桐生市",
      "街・地域"
    ],
    "desc": "昨年、多くの感動と笑顔を生み出したスカイランタンの祭典が、今年も桐生の夜空に帰ってきます。\nぜひ、大切な人やご家族と一…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6123",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 83409,
    "title": "『父の日ギフト屋』お父さんにありがとう！って伝えよう（駄菓子屋「よこまちや」／桐生市）",
    "emoji": "🔧",
    "image": "https://www.gunlabo.net/images_c/event/image6770.jpg?1780289073",
    "category": "experience",
    "label": "体験・工作",
    "area": "桐生市",
    "venue": "駄菓子屋「よこまちや」",
    "startDate": "2026-06-21",
    "endDate": "2026-06-21",
    "tags": [
      "桐生市",
      "ワークショップ",
      "街・地域"
    ],
    "desc": "父の日に「父親へきちんとありがとうと伝える」ギフト作り工作会を初開催！\n紙袋でワイシャツ型のプレゼント作りをするよ♪\n…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6770",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "startDate": "2026-07-18",
    "endDate": "2026-07-18",
    "tags": [
      "博物館",
      "富岡市"
    ],
    "desc": "【予告】開館30周年記念企画展「北米ジュラ紀の恐竜たち」 2026年7月18日(土)～9月13日(日)、9月19日(土)～12月6日(日) ※9/15(火)～9/18(金)は展示入替のため観覧できません 企画展",
    "url": "https://www.gmnh.pref.gunma.jp/event/id11471/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 84014,
    "title": "ボードゲームひろば",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-27",
    "endDate": "2026-06-27",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月27日(土)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/boardgame/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 84464,
    "title": "太田市スポーツ少年団",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市（詳細は公式サイト）",
    "startDate": "2026-04-30",
    "endDate": "2026-04-30",
    "tags": [
      "太田市"
    ],
    "desc": "新着情報、イベント情報、観光情報、施設予約、行財政改革、医療情報、公共施設案内、防災情報、市議会情報、入札・契約情報、キッズサイトなど豊富な情報を掲載。",
    "url": "https://www.city.ota.gunma.jp/site/home-town-ota/1146.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 84543,
    "title": "第14回　大名庭園のホタル観賞会（国指定名勝楽山園／甘楽町）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image1240.jpg?1779779423",
    "category": "culture",
    "label": "文化・学習",
    "area": "甘楽町",
    "venue": "国指定名勝 楽山園",
    "startDate": "2026-06-13",
    "endDate": "2026-06-13",
    "tags": [
      "甘楽郡甘楽町",
      "ホタル",
      "季節",
      "野外"
    ],
    "desc": "第14回大名庭園のホタル鑑賞会を開催します！！\n\n　令和８年６月６日（土）、１３日（土）の２日間、大名庭園のホタル鑑賞…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=1240",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 87396,
    "title": "熊田千佳慕の世界　～愛するからこそ美しい～（群馬県立館林美術館／館林市）",
    "emoji": "🦁",
    "image": "https://www.gunlabo.net/images_c/event/image6649.jpg?1775112122",
    "category": "exhibition",
    "label": "展覧会",
    "area": "館林市",
    "venue": "群馬県立館林美術館",
    "startDate": "2026-04-25",
    "endDate": "2026-06-28",
    "tags": [
      "館林市",
      "アート",
      "展示会・展覧会",
      "ゴールデンウィーク"
    ],
    "desc": "花や昆虫、動物を細密に描き、「プチ・ファーブル」と呼ばれた熊田千佳慕（くまだちかぼ・1911~2009）の世界を紹介す…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6649",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 87999,
    "title": "千代田の祭　川せがき【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image907.jpg?1718672434",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "千代田町",
    "venue": "【開催場所】群馬県邑楽郡千代田町赤岩地先　利根川河畔",
    "startDate": "2026-08-18",
    "endDate": "2026-08-18",
    "tags": [
      "邑楽郡千代田町",
      "祭・伝統行事",
      "花火",
      "伝統芸能"
    ],
    "desc": "千代田の祭 川せがきは、約150年の歴史を持つ伝統のある祭りです。\n僧侶の読経と灯ろう流し（川せがき）を中心に、打上花…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=907",
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
    "id": 89319,
    "title": "制服バンク（洗濯工房 ココア／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image3882.jpg?1595991162",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "洗濯工房 COCOA（ココア",
    "startDate": "2026-06-08",
    "endDate": "2026-06-08",
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
    "id": 89416,
    "title": "キッズマネースクール「おみせやさんごっこ～はたらくってなあに？～」（前橋市市民活動支援センター／前橋市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6769.jpg?1780239742",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市市民活動支援センター会議室",
    "startDate": "2026-07-12",
    "endDate": "2026-07-12",
    "tags": [
      "前橋市",
      "子供",
      "子育て",
      "学習"
    ],
    "desc": "後援：群馬県金融広報委員会・前橋市教育委員会\n\n年中から小学4年生のお子様とその保護者様対象（10組まで）\nずっと子ど…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6769",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 90163,
    "title": "ダンスワークショップ（カリマ高崎／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6704.png?1776577810",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "カリマ高崎",
    "startDate": "2026-06-21",
    "endDate": "2026-06-21",
    "tags": [
      "高崎市",
      "演劇・ダンス",
      "音楽",
      "募集"
    ],
    "desc": "ダンス・ボイストレーニングスクールNAYUTAS高崎校ダンスWS開催\n\n▶︎▷どなたでも参加可能！\n\n日時\n2026年…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6704",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 90331,
    "title": "たてばやし花菖蒲まつり",
    "emoji": "🌿",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "館林市",
    "venue": "館林花菖蒲園（つつじが岡第二公園）",
    "startDate": "2026-05-30",
    "endDate": "2026-06-14",
    "tags": [
      "じゃらん",
      "館林市",
      "観光"
    ],
    "desc": "【館林花菖蒲園（つつじが岡第二公園）】たてばやし花菖蒲まつり",
    "url": "https://www.jalan.net/event/evt_354930/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 92233,
    "title": "第76回前橋七夕まつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image934.jpg?1494983193",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "前橋中心市街地",
    "startDate": "2026-07-10",
    "endDate": "2026-07-12",
    "tags": [
      "前橋市",
      "祭・伝統行事",
      "街・地域",
      "季節"
    ],
    "desc": "今年で第76回を迎える七夕まつりは、市内を彩る夏の風物詩として広く親しまれています。\n今年の前橋七夕まつりも、ぜひお楽…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=934",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "startDate": "2026-06-08",
    "endDate": "2026-12-08",
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
    "id": 93257,
    "title": "子どもがつくる子ども食堂（太田市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6684.jpg?1776212203",
    "category": "culture",
    "label": "文化・学習",
    "area": "太田市",
    "venue": "太田市天神公園内　浜町会館",
    "startDate": "2026-06-08",
    "endDate": "2026-06-08",
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
    "id": 93447,
    "title": "尾島ねぷたまつり",
    "emoji": "🎪",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "太田市",
    "venue": "尾島商店街大通り（県道142号）",
    "startDate": "2026-08-14",
    "endDate": "2026-08-15",
    "tags": [
      "じゃらん",
      "太田市",
      "観光"
    ],
    "desc": "【尾島商店街大通り（県道142号）】尾島ねぷたまつり",
    "url": "https://www.jalan.net/event/evt_358443/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93540,
    "title": "向井千秋記念子ども科学館　 公開天文台",
    "emoji": "🌟",
    "image": "https://www.gunlabo.net/images_c/event/image5164.jpg?1720498761",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "館林市",
    "venue": "向井千秋記念子ども科学館",
    "startDate": "2026-06-21",
    "endDate": "2026-06-21",
    "tags": [
      "館林市",
      "子供",
      "自然",
      "夏休み"
    ],
    "desc": "太陽の黒点や昼間でも見ることが\nできる星等を観察します。\n\n申込：不要（直接科学館へ）\n参加費：無料\n※雨天・曇天の場…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5164",
    "free": true,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93655,
    "title": "藍染で木綿のＴシャツを染める",
    "emoji": "🎨",
    "category": "experience",
    "label": "体験・工作",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "藍染で木綿のＴシャツを染める 子ども",
    "url": "https://www.city.takasaki.gunma.jp/site/senryou/67020.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 93881,
    "title": "クラフトルーム工作「オリジナル☆スポンジケーキ」",
    "emoji": "🔧",
    "category": "experience",
    "label": "体験・工作",
    "area": "太田市",
    "venue": "ぐんまこどもの国 児童会館",
    "startDate": "2026-06-02",
    "endDate": "2026-06-30",
    "tags": [
      "ぐんまこどもの国",
      "太田市",
      "児童会館"
    ],
    "desc": "6月2日(火)～30日(火)開催。詳細は公式サイトをご確認ください。",
    "url": "https://kodomonokuni.or.jp/event/craft_cake/",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 94470,
    "title": "/19(日)夏休み！キャンプ場でおやこ野草講座＠吾妻郡",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "中之条町",
    "venue": "中之条町",
    "startDate": "2026-07-19",
    "endDate": "2026-07-19",
    "tags": [
      "群馬県観光公式",
      "中之条町",
      "吾妻エリア"
    ],
    "desc": "吾妻エリアで開催。詳細は群馬県観光公式サイトをご確認ください。",
    "url": "https://gunma-kanko.jp/events/295",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 94575,
    "title": "13_大冒険キャンプ",
    "emoji": "🏕️",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "前橋市",
    "venue": "前橋市赤城少年自然の家",
    "startDate": "2026-08-08",
    "endDate": "2026-08-12",
    "tags": [
      "赤城少年自然の家",
      "前橋市",
      "キャンプ",
      "自然体験"
    ],
    "desc": "4泊5日、仲間と一緒に寝る場所やご飯を作ったり、様々な活動などに取り組んだりするプログラムです！ 仲間の大切さ、日常生活のありがたみ、体験を通して「楽しい！」などの感情や達成感が味わえます。",
    "url": "https://gunma-nsp.com/akagi/reservation/?event_name=13_%E5%A4%A7%E5%86%92%E9%99%BA%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97",
    "free": false,
    "age": "小学4年生～中学生"
  },
  {
    "id": 94725,
    "title": "ちょっと見直す生活習慣教室〜忙しくてもできる血糖値ケア〜",
    "emoji": "🎈",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "前橋市（詳細は公式サイト）",
    "startDate": "2026-07-10",
    "endDate": "2026-07-10",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kenko/kenkozoshin/gyomu/4/3/1/3993.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 95436,
    "title": "琉球の風〜沖縄祭りin高崎 2026 （もてなし広場／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image5194.jpg?1779411303",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "高崎市",
    "venue": "高崎市 もてなし広場",
    "startDate": "2026-10-17",
    "endDate": "2026-10-17",
    "tags": [
      "高崎市",
      "街・地域",
      "演劇・ダンス",
      "グルメ"
    ],
    "desc": "沖縄を、群馬で体験できる\n「琉球の風」開催！！\n\n沖縄の魅力を知っていただくために\n沖縄の《食　音　踊》を体感できるイ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=5194",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 95473,
    "title": "令和8（2026）年度　第70回前橋花火大会【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image901.jpg?1528432646",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "前橋市",
    "venue": "利根川河畔 (大渡橋南北河川緑地",
    "startDate": "2026-08-08",
    "endDate": "2026-08-08",
    "tags": [
      "前橋市",
      "花火",
      "祭・伝統行事",
      "街・地域"
    ],
    "desc": "毎年、県内外から沢山の観客が訪れる、「前橋花火大会」は夏の風物詩。\n\n前橋市の利根川大渡橋河川敷にて行われる花火大会。…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=901",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 95488,
    "title": "定期歴史講座「かみつけ塾」（6月21日）",
    "emoji": "🏺",
    "category": "culture",
    "label": "文化・学習",
    "area": "高崎市",
    "venue": "高崎市（詳細は公式サイト）",
    "startDate": "2026-06-01",
    "endDate": "2026-06-01",
    "tags": [
      "高崎市"
    ],
    "desc": "定期歴史講座「かみつけ塾」（6月21日） 講演・講座",
    "url": "https://www.city.takasaki.gunma.jp/site/cultural-assets/5542.html",
    "free": false,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 96186,
    "title": "TSUMAGOI SKYRUN-SKY SNOW（嬬恋村）",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event/image6764.jpg?1780035128",
    "category": "nature",
    "label": "自然・アウトドア",
    "area": "嬬恋村",
    "venue": "パルコール嬬恋リゾート",
    "startDate": "2026-08-15",
    "endDate": "2026-08-16",
    "tags": [
      "吾妻郡嬬恋村",
      "スポーツ",
      "街・地域"
    ],
    "desc": "「嬬恋をガチ冒険しよう！」\n\nオトナもコドモもファミリーも嬬恋の大自然をガチで大冒険できる山岳ランニング大会が開催され…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6764",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 97568,
    "title": "令和8年　館林まつり【群馬の花火大会・夏祭り特集2026】",
    "emoji": "🌿",
    "image": "https://www.gunlabo.net/images_c/event_tag/0001.png?1322546399",
    "category": "festival",
    "label": "祭り・フェスタ",
    "area": "館林市",
    "venue": "本町通り周辺",
    "startDate": "2026-07-18",
    "endDate": "2026-07-19",
    "tags": [
      "館林市",
      "祭・伝統行事",
      "伝統芸能",
      "街・地域"
    ],
    "desc": "館林市の本町通りを中心に開催されるお祭りです。\n夕方からパレードや民踊流し、子どもみこしなどさまなまなイベントが行われ…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=921",
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
    "startDate": "2026-05-31",
    "endDate": "2026-05-31",
    "tags": [
      "太田市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.ota.gunma.jp/page/1014908.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 99402,
    "title": "【定員に達しました】前橋市動物愛護管理センター開設記念講演会を開催します",
    "emoji": "🦁",
    "category": "culture",
    "label": "文化・学習",
    "area": "前橋市",
    "venue": "K'BIXまえばし福祉会館（前橋市総合福祉会館）多目的ホール   前橋市日吉町二丁目17-10",
    "startDate": "2026-06-20",
    "endDate": "2026-06-20",
    "tags": [
      "前橋市"
    ],
    "desc": "詳細は公式サイトをご確認ください。",
    "url": "https://www.city.maebashi.gunma.jp/soshiki/kenko/eiseikensa/oshirase/48487.html",
    "free": null,
    "age": "詳細は公式サイトへ"
  },
  {
    "id": 99888,
    "title": "合同ランドセル展示会2026群馬（Gメッセ群馬／高崎市）",
    "emoji": "🎈",
    "image": "https://www.gunlabo.net/images_c/event/image6749.jpg?1779177185",
    "category": "exhibition",
    "label": "展覧会",
    "area": "高崎市",
    "venue": "Gメッセ群馬　メインホール",
    "startDate": "2026-06-14",
    "endDate": "2026-06-14",
    "tags": [
      "高崎市",
      "子供",
      "家族",
      "子育て"
    ],
    "desc": "ランドセル選び決定版！日本最大ランドセル展示会。\n\n各社モデルを一度に見比べられる！\n群馬会場には9メーカー約680本…",
    "url": "https://www.gunlabo.net/event/event.shtml?id=6749",
    "free": null,
    "age": "詳細は公式サイトへ"
  }
];
