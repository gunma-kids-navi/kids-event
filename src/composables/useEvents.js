// BUG #2修正: CalendarView の初期値用にエクスポートは維持しつつ、
// ステータス計算では毎回 new Date() を使って最新の日時を取得する
export const TODAY = new Date()

export function parseDate(s) {
  return new Date(s + 'T00:00:00')
}

// BUG #2修正: ステータス比較用に「今日の深夜0時」を常に最新で返す
function getTodayMidnight() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

export function formatDate(s) {
  const d = parseDate(s)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export function formatDateRange(start, end) {
  if (start === end) return formatDate(start)
  const s = parseDate(start), e = parseDate(end)
  // BUG #1修正: endDate < startDate の逆転データはフルフォーマットで表示
  if (s > e) return `${formatDate(start)} 〜 ${formatDate(end)}`
  if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth())
    return `${s.getFullYear()}年${s.getMonth() + 1}月${s.getDate()}日〜${e.getDate()}日`
  return `${formatDate(start)} 〜 ${formatDate(end)}`
}

export function getStatus(ev) {
  // BUG #2修正: 毎回最新日時を取得
  // BUG #3修正: 終了日当日は 'ongoing' になるよう深夜0時同士で比較
  const today = getTodayMidnight()
  const s = parseDate(ev.startDate), e = parseDate(ev.endDate)
  if (today > e) return 'ended'
  if (today >= s) return 'ongoing'
  return 'upcoming'
}

// BUG #4修正: 未知のステータスキーにフォールバックを追加
export function statusLabel(s) {
  return { ongoing: '開催中', upcoming: '近日開催', ended: '終了' }[s] ?? '不明'
}

// BUG #5修正: 未知のステータスキーにフォールバックを追加
export function statusClass(s) {
  return { ongoing: 'badge--ongoing', upcoming: 'badge--upcoming', ended: 'badge--ended' }[s] ?? ''
}

export function daysLeft(ev) {
  // BUG #2修正 & BUG #7修正: 深夜0時基準で比較することで -0 も発生しない
  const today = getTodayMidnight()
  const e = parseDate(ev.endDate)
  return Math.ceil((e - today) / 86400000)
}

export function daysToStart(ev) {
  // BUG #2修正: 毎回最新日時を取得
  const today = getTodayMidnight()
  const s = parseDate(ev.startDate)
  return Math.ceil((s - today) / 86400000)
}
