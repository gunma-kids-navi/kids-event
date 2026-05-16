// イベントデータは events.js で定義されています
// EVENTS 配列を追加・編集するには events.js を編集してください

/* ===== SOURCES DATA ===== */
const SOURCES = [
  {
    name: "前橋市",
    icon: "前",
    calendarUrl: "https://www.city.maebashi.gunma.jp/calendar/",
    calendarLabel: "イベントカレンダー",
    newsletterUrl: "https://www.city.maebashi.gunma.jp/site/koho/",
    newsletterLabel: "広報まえばし",
    kidsUrl: "https://www.city.maebashi.gunma.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "高崎市",
    icon: "高",
    calendarUrl: "https://www.city.takasaki.gunma.jp/calendar/",
    calendarLabel: "イベントカレンダー（子どもフィルタ可）",
    newsletterUrl: "https://www.city.takasaki.gunma.jp/page/2882.html",
    newsletterLabel: "広報高崎",
    kidsUrl: "https://www.city.takasaki.gunma.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "桐生市",
    icon: "桐",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.city.kiryu.lg.jp/shisei/koho/kohokiryu/index.html",
    newsletterLabel: "広報きりゅう",
    kidsUrl: "https://www.city.kiryu.lg.jp/kosodate/1009943.html",
    kidsLabel: "子育て応援サイト",
    rssUrl: null,
  },
  {
    name: "伊勢崎市",
    icon: "伊",
    calendarUrl: "https://www.city.isesaki.lg.jp/calendar/",
    calendarLabel: "イベントカレンダー",
    newsletterUrl: "https://www.city.isesaki.lg.jp/site/koho/",
    newsletterLabel: "広報いせさき",
    kidsUrl: "https://www.city.isesaki.lg.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "太田市",
    icon: "太",
    calendarUrl: "https://www.city.ota.gunma.jp/calendar/",
    calendarLabel: "イベントカレンダー",
    newsletterUrl: "https://www.city.ota.gunma.jp/site/koho-ota/",
    newsletterLabel: "広報おおた",
    kidsUrl: "https://www.city.ota.gunma.jp/site/kosodate/",
    kidsLabel: "おおたの子育て支援",
    rssUrl: "https://www.city.ota.gunma.jp/rss/10/list1.xml",
  },
  {
    name: "渋川市",
    icon: "渋",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.city.shibukawa.lg.jp/shisei/koho/kouhousi/index.html",
    newsletterLabel: "広報しぶかわ",
    kidsUrl: "https://www.city.shibukawa.lg.jp/kurashi/kosodate/index.html",
    kidsLabel: "子育て",
    rssUrl: null,
  },
  {
    name: "富岡市",
    icon: "富",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.city.tomioka.lg.jp/admin/soumu/koho/",
    newsletterLabel: "広報とみおか",
    kidsUrl: "https://www.city.tomioka.lg.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "安中市",
    icon: "安",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.city.annaka.lg.jp/soshiki/3/",
    newsletterLabel: "広報あんなか",
    kidsUrl: "https://www.city.annaka.lg.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "藤岡市",
    icon: "藤",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.city.fujioka.gunma.jp/site/koho/",
    newsletterLabel: "広報ふじおか",
    kidsUrl: "https://www.city.fujioka.gunma.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "みなかみ町",
    icon: "水",
    calendarUrl: null,
    calendarLabel: null,
    newsletterUrl: "https://www.town.minakami.gunma.jp/soshiki/2/",
    newsletterLabel: "広報みなかみ",
    kidsUrl: "https://www.town.minakami.gunma.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
  {
    name: "群馬県（県全体）",
    icon: "県",
    calendarUrl: "https://www.pref.gunma.jp/",
    calendarLabel: "群馬県公式サイト",
    newsletterUrl: "https://www.pref.gunma.jp/site/koho/",
    newsletterLabel: "県広報",
    kidsUrl: "https://www.pref.gunma.jp/life/2/",
    kidsLabel: "子育て・教育",
    rssUrl: null,
  },
];

/* ===== RSS KEYWORDS for children's events ===== */
const KIDS_KEYWORDS = [
  "子ども", "こども", "子供", "親子", "小学", "幼児", "キッズ", "ちびっこ",
  "工作", "体験", "ワークショップ", "遊び", "あそび", "学習", "まつり", "フェスタ",
  "キャンプ", "自然観察", "プラネタリウム", "動物", "昆虫",
];

/* ===== PAGE: SOURCES ===== */
async function renderSources() {
  // Render municipality cards
  const grid = document.getElementById("sources-grid");
  const areaCounts = {};
  EVENTS.forEach(e => { areaCounts[e.area] = (areaCounts[e.area] || 0) + 1; });

  grid.innerHTML = SOURCES.map(s => {
    const count = areaCounts[s.name] || 0;
    const links = [];
    if (s.calendarUrl) {
      links.push(`<a class="source-link" href="${s.calendarUrl}" target="_blank" rel="noopener">
        <span class="source-link-icon">📅</span>
        <span class="source-link-text">${s.calendarLabel}</span>
        ${s.rssUrl ? '<span class="source-rss-badge">RSS</span>' : ""}
      </a>`);
    }
    links.push(`<a class="source-link" href="${s.newsletterUrl}" target="_blank" rel="noopener">
      <span class="source-link-icon">📰</span>
      <span class="source-link-text">${s.newsletterLabel}</span>
    </a>`);
    links.push(`<a class="source-link" href="${s.kidsUrl}" target="_blank" rel="noopener">
      <span class="source-link-icon">👶</span>
      <span class="source-link-text">${s.kidsLabel}</span>
    </a>`);

    return `<div class="source-card">
      <div class="source-card-header">
        <div class="source-city-icon">${s.icon}</div>
        <div>
          <div class="source-city-name">${s.name}</div>
          <div class="source-city-count">掲載中 ${count}件${s.rssUrl ? " • RSS対応" : ""}</div>
        </div>
      </div>
      <div class="source-links">${links.join("")}</div>
    </div>`;
  }).join("");

  // Try RSS fetch for cities that have it
  const rssSourcesWithFeed = SOURCES.filter(s => s.rssUrl);
  if (rssSourcesWithFeed.length === 0) return;

  const rssSection = document.getElementById("rss-section");
  const rssStatus = document.getElementById("rss-status");
  const rssListEl = document.getElementById("rss-events-list");
  rssSection.style.display = "block";
  rssStatus.textContent = "取得中...";

  let allItems = [];
  for (const src of rssSourcesWithFeed) {
    try {
      // Use allorigins.win as CORS proxy
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(src.rssUrl)}`;
      const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();
      const parser = new DOMParser();
      const doc = parser.parseFromString(json.contents, "text/xml");
      const items = Array.from(doc.querySelectorAll("item")).map(item => ({
        title: item.querySelector("title")?.textContent || "",
        link: item.querySelector("link")?.textContent || "",
        pubDate: item.querySelector("pubDate")?.textContent || "",
        desc: item.querySelector("description")?.textContent || "",
        source: src.name,
      }));
      // Filter by children's keywords
      const filtered = items.filter(item =>
        KIDS_KEYWORDS.some(kw =>
          item.title.includes(kw) || item.desc.includes(kw)
        )
      );
      allItems = allItems.concat(filtered);
    } catch (e) {
      console.warn(`RSS fetch failed for ${src.name}:`, e);
    }
  }

  if (allItems.length === 0) {
    rssStatus.textContent = "子ども関連の新着情報は現在見つかりませんでした";
    rssListEl.innerHTML = '<p style="color:var(--text-muted);padding:1rem 0">キーワードに一致する新着情報がありません。各市の公式サイトを直接ご確認ください。</p>';
    return;
  }

  rssStatus.textContent = `${allItems.length}件の関連情報`;
  rssListEl.innerHTML = allItems.map(item => {
    const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString("ja-JP") : "";
    return `<div class="rss-item" onclick="window.open('${item.link}','_blank','noopener')">
      <span class="rss-item-source">📡 ${item.source}</span>
      <div class="rss-item-title">${item.title}</div>
      <div class="rss-item-meta">${date ? `📅 ${date}` : ""}</div>
    </div>`;
  }).join("");
}

/* ===== STATE ===== */
let currentPage = "home";
let favorites = JSON.parse(localStorage.getItem("gunma_favs") || "[]");
let filterStatus = "all";
let filterCategory = "all";
let filterArea = "all";
let searchQuery = "";
let sortOrder = "date-asc";
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();
const TODAY = new Date("2026-05-15");

/* ===== UTILITIES ===== */
function parseDate(s) { return new Date(s + "T00:00:00"); }
function formatDate(s) {
  const d = parseDate(s);
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
}
function formatDateRange(start, end) {
  if (start === end) return formatDate(start);
  const s = parseDate(start), e = parseDate(end);
  if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth())
    return `${s.getFullYear()}年${s.getMonth()+1}月${s.getDate()}日〜${e.getDate()}日`;
  return `${formatDate(start)} 〜 ${formatDate(end)}`;
}
function getStatus(ev) {
  const s = parseDate(ev.startDate), e = parseDate(ev.endDate);
  if (TODAY > e) return "ended";
  if (TODAY >= s) return "ongoing";
  return "upcoming";
}
function statusLabel(s) {
  return { ongoing: "開催中", upcoming: "近日開催", ended: "終了" }[s];
}
function statusClass(s) {
  return { ongoing: "badge--ongoing", upcoming: "badge--upcoming", ended: "badge--ended" }[s];
}
function isFav(id) { return favorites.includes(id); }
function toggleFav(id) {
  if (isFav(id)) favorites = favorites.filter(f => f !== id);
  else favorites.push(id);
  localStorage.setItem("gunma_favs", JSON.stringify(favorites));
}
function daysLeft(ev) {
  const e = parseDate(ev.endDate);
  const diff = Math.ceil((e - TODAY) / 86400000);
  return diff;
}

/* ===== UNIQUE AREAS ===== */
function getAreas() {
  return [...new Set(EVENTS.map(e => e.area))].sort();
}

/* ===== CARD HTML ===== */
function renderCard(ev, compact = false) {
  const status = getStatus(ev);
  const fav = isFav(ev.id);
  const days = daysLeft(ev);
  let daysHtml = "";
  if (status === "ongoing" && days <= 7) daysHtml = `<span style="color:#ef4444;font-size:.75rem;font-weight:700"> 残り${days}日</span>`;
  if (status === "upcoming") {
    const s = parseDate(ev.startDate);
    const d = Math.ceil((s - TODAY) / 86400000);
    if (d <= 7) daysHtml = `<span style="color:#3b82f6;font-size:.75rem;font-weight:700"> あと${d}日</span>`;
  }
  return `
    <div class="event-card" data-id="${ev.id}">
      <div class="event-card-img">
        ${ev.emoji}
        <span class="event-card-badge ${statusClass(status)}">${statusLabel(status)}${daysHtml}</span>
        <button class="event-card-fav ${fav ? "active" : ""}" data-fav="${ev.id}" title="お気に入り">${fav ? "★" : "☆"}</button>
      </div>
      <div class="event-card-body">
        <span class="event-card-cat">${ev.categoryLabel}</span>
        <h3 class="event-card-title">${ev.title}</h3>
        <span class="event-card-location">📍 ${ev.venue}（${ev.area}）</span>
        <span class="event-card-date">📅 ${formatDateRange(ev.startDate, ev.endDate)}</span>
        ${ev.free ? '<span style="color:#16a34a;font-size:.8125rem;font-weight:700">✓ 無料イベント</span>' : ""}
      </div>
      <div class="event-card-footer">
        <div class="event-card-tags">
          ${ev.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderListItem(ev) {
  const status = getStatus(ev);
  const fav = isFav(ev.id);
  return `
    <div class="event-list-item" data-id="${ev.id}">
      <div class="event-list-thumb">${ev.emoji}</div>
      <div class="event-list-body">
        <div class="event-list-top">
          <div>
            <span class="event-card-badge ${statusClass(status)}" style="display:inline-block;margin-bottom:.35rem">${statusLabel(status)}</span>
            <h3 class="event-list-title">${ev.title}</h3>
          </div>
          <button class="event-list-fav ${fav ? "active" : ""}" data-fav="${ev.id}">${fav ? "★" : "☆"}</button>
        </div>
        <div class="event-list-meta">
          <span>📍 ${ev.venue}（${ev.area}）</span>
          <span>📅 ${formatDateRange(ev.startDate, ev.endDate)}</span>
          <span>🏷 ${ev.categoryLabel}</span>
          ${ev.free ? '<span style="color:#16a34a;font-weight:700">無料</span>' : ""}
        </div>
      </div>
    </div>`;
}

/* ===== MODAL ===== */
function openModal(id) {
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;
  const status = getStatus(ev);
  const fav = isFav(ev.id);
  document.getElementById("modal-body").innerHTML = `
    <span class="modal-emoji">${ev.emoji}</span>
    <span class="modal-badge event-card-badge ${statusClass(status)}">${statusLabel(status)}</span>
    <h2 class="modal-title">${ev.title}</h2>
    <div class="modal-info">
      <div class="modal-info-row"><span class="modal-info-label">📍 会場</span><span>${ev.venue}（${ev.area}）</span></div>
      <div class="modal-info-row"><span class="modal-info-label">📅 日程</span><span>${formatDateRange(ev.startDate, ev.endDate)}</span></div>
      <div class="modal-info-row"><span class="modal-info-label">🏷 種別</span><span>${ev.categoryLabel}</span></div>
      <div class="modal-info-row"><span class="modal-info-label">👶 対象</span><span>${ev.age}</span></div>
      <div class="modal-info-row"><span class="modal-info-label">💴 費用</span><span>${ev.free ? "無料" : "有料（詳細は主催者サイトへ）"}</span></div>
    </div>
    <p class="modal-desc">${ev.desc}</p>
    <div class="modal-tags">${ev.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="modal-actions">
      <a href="${ev.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">公式サイトを見る →</a>
      <button class="btn btn-outline" id="modal-fav-btn">${fav ? "★ お気に入り済み" : "☆ お気に入りに追加"}</button>
    </div>`;
  document.getElementById("modal-overlay").classList.add("open");
  document.getElementById("modal-fav-btn").addEventListener("click", () => {
    toggleFav(ev.id);
    const btn = document.getElementById("modal-fav-btn");
    const nowFav = isFav(ev.id);
    if (btn) btn.textContent = nowFav ? "★ お気に入り済み" : "☆ お気に入りに追加";
    refreshFavButtons(ev.id);
  });
}

function refreshFavButtons(id) {
  const fav = isFav(id);
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
    btn.textContent = fav ? "★" : "☆";
    btn.classList.toggle("active", fav);
  });
}

/* ===== PAGE: HOME ===== */
function renderHome() {
  // Stats
  const ongoing = EVENTS.filter(e => getStatus(e) === "ongoing");
  const upcoming = EVENTS.filter(e => getStatus(e) === "upcoming");
  document.getElementById("stat-ongoing").textContent = ongoing.length;
  document.getElementById("stat-upcoming").textContent = upcoming.length;
  document.getElementById("stat-total").textContent = EVENTS.length;

  // Ongoing (max 3)
  document.getElementById("home-ongoing").innerHTML =
    ongoing.slice(0, 3).map(e => renderCard(e)).join("") ||
    '<p style="color:var(--text-muted)">現在開催中のイベントはありません</p>';

  // Upcoming (max 3)
  document.getElementById("home-upcoming").innerHTML =
    upcoming.slice(0, 3).map(e => renderCard(e)).join("") ||
    '<p style="color:var(--text-muted)">近日開催のイベントはありません</p>';

  // Areas
  const areas = getAreas();
  const areaCounts = {};
  areas.forEach(a => { areaCounts[a] = EVENTS.filter(e => e.area === a).length; });
  document.getElementById("home-areas").innerHTML = areas.map(a => `
    <div class="area-card" data-area="${a}">
      <div class="area-card-name">${a}</div>
      <div class="area-card-count">${areaCounts[a]}件</div>
    </div>`).join("");

  document.querySelectorAll(".area-card").forEach(card => {
    card.addEventListener("click", () => {
      navigateTo("events");
      filterArea = card.dataset.area;
      renderEvents();
      updateAreaChips();
    });
  });
}

/* ===== PAGE: EVENTS ===== */
function getFilteredEvents() {
  let evs = [...EVENTS];
  if (filterStatus !== "all") evs = evs.filter(e => getStatus(e) === filterStatus);
  if (filterCategory !== "all") evs = evs.filter(e => e.category === filterCategory);
  if (filterArea !== "all") evs = evs.filter(e => e.area === filterArea);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    evs = evs.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.area.toLowerCase().includes(q) ||
      e.venue.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q)) ||
      e.categoryLabel.toLowerCase().includes(q)
    );
  }
  evs.sort((a, b) => {
    if (sortOrder === "date-asc") return parseDate(a.startDate) - parseDate(b.startDate);
    if (sortOrder === "date-desc") return parseDate(b.startDate) - parseDate(a.startDate);
    return a.title.localeCompare(b.title, "ja");
  });
  return evs;
}

function renderEvents() {
  const evs = getFilteredEvents();
  document.getElementById("results-count").textContent = `${evs.length}件のイベント`;
  document.getElementById("events-list").innerHTML =
    evs.length ? evs.map(renderListItem).join("") :
    '<div class="empty-state"><p class="empty-icon">🔍</p><p class="empty-title">条件に合うイベントが見つかりません</p><p class="empty-desc">フィルターを変更してみてください</p></div>';
}

function buildAreaFilter() {
  const areas = getAreas();
  const container = document.getElementById("filter-area");
  container.innerHTML = `<button class="chip ${filterArea === "all" ? "active" : ""}" data-value="all">すべて</button>` +
    areas.map(a => `<button class="chip ${filterArea === a ? "active" : ""}" data-value="${a}">${a}</button>`).join("");
  container.querySelectorAll(".chip").forEach(c =>
    c.addEventListener("click", () => {
      filterArea = c.dataset.value;
      updateAreaChips();
      renderEvents();
    })
  );
}

function updateAreaChips() {
  document.querySelectorAll("#filter-area .chip").forEach(c =>
    c.classList.toggle("active", c.dataset.value === filterArea));
}

function initEventsFilters() {
  // Status
  document.querySelectorAll("#filter-status .chip").forEach(c =>
    c.addEventListener("click", () => {
      filterStatus = c.dataset.value;
      document.querySelectorAll("#filter-status .chip").forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      renderEvents();
    })
  );
  // Category
  document.querySelectorAll("#filter-category .chip").forEach(c =>
    c.addEventListener("click", () => {
      filterCategory = c.dataset.value;
      document.querySelectorAll("#filter-category .chip").forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      renderEvents();
    })
  );
  // Search
  document.getElementById("search-input").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderEvents();
  });
  // Sort
  document.getElementById("sort-select").addEventListener("change", e => {
    sortOrder = e.target.value;
    renderEvents();
  });
  // Area
  buildAreaFilter();
  renderEvents();
}

/* ===== PAGE: CALENDAR ===== */
function renderCalendar() {
  const title = document.getElementById("cal-title");
  title.textContent = `${calYear}年 ${calMonth + 1}月`;

  const grid = document.getElementById("calendar-grid");
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const headers = days.map((d, i) => `<div class="cal-day-header">${d}</div>`).join("");

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  const monthEvents = EVENTS.filter(ev => {
    const s = parseDate(ev.startDate), e = parseDate(ev.endDate);
    const mStart = new Date(calYear, calMonth, 1);
    const mEnd = new Date(calYear, calMonth + 1, 0);
    return s <= mEnd && e >= mStart;
  });

  let cells = "";
  for (let i = 0; i < firstDay; i++) cells += `<div class="cal-day cal-day--empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calYear, calMonth, d);
    const dow = date.getDay();
    const isToday = date.toDateString() === TODAY.toDateString();
    const dayEvs = monthEvents.filter(ev => {
      const s = parseDate(ev.startDate), e = parseDate(ev.endDate);
      return s <= date && e >= date;
    });
    const dotClass = dow === 0 ? "cal-day--sun" : dow === 6 ? "cal-day--sat" : "";
    cells += `<div class="cal-day ${dotClass} ${isToday ? "cal-day--today" : ""}">
      ${isToday ? `<span class="cal-today-dot">${d}</span>` : `<span class="cal-date">${d}</span>`}
      ${dayEvs.slice(0, 2).map(ev => {
        const st = getStatus(ev);
        return `<span class="cal-event-dot cal-event-dot--${st}" data-id="${ev.id}">${ev.emoji} ${ev.title.slice(0,8)}…</span>`;
      }).join("")}
      ${dayEvs.length > 2 ? `<span style="font-size:.65rem;color:var(--text-muted)">+${dayEvs.length - 2}</span>` : ""}
    </div>`;
  }

  grid.innerHTML = headers + cells;

  // Calendar events list for this month
  const listEl = document.getElementById("cal-events-list");
  const titleEl = document.getElementById("cal-events-title");
  titleEl.textContent = `${calYear}年${calMonth + 1}月のイベント（${monthEvents.length}件）`;
  listEl.innerHTML = monthEvents.length ? monthEvents.map(ev => `
    <div class="cal-event-item" data-id="${ev.id}" style="cursor:pointer">
      <span class="cal-event-emoji">${ev.emoji}</span>
      <div class="cal-event-info">
        <div class="cal-event-name">${ev.title}</div>
        <div class="cal-event-meta">📍 ${ev.area} ／ ${formatDateRange(ev.startDate, ev.endDate)}</div>
      </div>
      <span class="event-card-badge ${statusClass(getStatus(ev))}">${statusLabel(getStatus(ev))}</span>
    </div>`).join("") :
    '<p style="color:var(--text-muted);padding:1rem 0">この月のイベントはありません</p>';
}

/* ===== PAGE: AREA ===== */
function renderArea() {
  const areas = getAreas();
  const container = document.getElementById("area-detail-grid");
  container.innerHTML = areas.map(area => {
    const areaEvents = EVENTS.filter(e => e.area === area);
    return `
      <div class="area-section">
        <div class="area-section-header">
          <h2 class="area-section-title">📍 ${area}</h2>
          <span class="area-section-count">${areaEvents.length}件</span>
        </div>
        <div class="events-grid">
          ${areaEvents.map(e => renderCard(e)).join("")}
        </div>
      </div>`;
  }).join("");
}

/* ===== PAGE: FAVORITES ===== */
function renderFavorites() {
  const favEvents = EVENTS.filter(e => isFav(e.id));
  const emptyEl = document.getElementById("favorites-empty");
  const listEl = document.getElementById("favorites-list");
  if (favEvents.length === 0) {
    emptyEl.style.display = "block";
    listEl.innerHTML = "";
  } else {
    emptyEl.style.display = "none";
    listEl.innerHTML = favEvents.map(renderListItem).join("");
  }
}

/* ===== NAVIGATION ===== */
function navigateTo(page, filter = null) {
  currentPage = page;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${page}`)?.classList.add("active");
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.page === page);
  });
  // Close mobile nav
  document.getElementById("mobileNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (filter) {
    filterStatus = filter;
    document.querySelectorAll("#filter-status .chip").forEach(c =>
      c.classList.toggle("active", c.dataset.value === filter));
  }

  if (page === "home") renderHome();
  if (page === "events") renderEvents();
  if (page === "calendar") renderCalendar();
  if (page === "area") renderArea();
  if (page === "favorites") renderFavorites();
  if (page === "sources") renderSources();
}

/* ===== DELEGATED EVENT LISTENERS ===== */
document.addEventListener("click", e => {
  // Nav links
  const navLink = e.target.closest("[data-page]");
  if (navLink && !navLink.classList.contains("event-card") && !navLink.classList.contains("event-list-item")) {
    const page = navLink.dataset.page;
    const filter = navLink.dataset.filter || null;
    if (page) { navigateTo(page, filter); return; }
  }

  // Fav button
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) {
    e.stopPropagation();
    const id = parseInt(favBtn.dataset.fav);
    toggleFav(id);
    refreshFavButtons(id);
    if (currentPage === "favorites") renderFavorites();
    return;
  }

  // Event card / list item → modal
  const card = e.target.closest(".event-card, .event-list-item, .cal-event-item");
  if (card) {
    const id = parseInt(card.dataset.id);
    if (id) openModal(id);
    return;
  }

  // Modal close
  if (e.target.id === "modal-overlay" || e.target.id === "modal-close" || e.target.closest("#modal-close")) {
    document.getElementById("modal-overlay").classList.remove("open");
  }
});

/* ===== CALENDAR NAV ===== */
document.getElementById("cal-prev").addEventListener("click", () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
document.getElementById("cal-next").addEventListener("click", () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

/* ===== HAMBURGER ===== */
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("open");
});

/* ===== INIT ===== */
initEventsFilters();
renderHome();
navigateTo("home");
