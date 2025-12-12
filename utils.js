// Utility functions for the Off-Season Travelers application (ESM)

export const PAGE_ROUTES = {
  Home: '/',
  ByMonth: '/by-month',
  ByLocation: '/by-location',
  MapExplore: '/map-explore',
  NationalParks: '/national-parks'
}

export function createPageUrl(pageName) {
  return PAGE_ROUTES[pageName] || '/'
}

export function getCurrentMonth() {
  return new Date().toLocaleString('default', { month: 'long' }).toLowerCase()
}

export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatMonth(month) {
  if (typeof month === 'number') {
    const monthNames = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ]
    return monthNames[month - 1] || 'Unknown'
  }
  return capitalize(month)
}

export function getUpcomingMonths(count = 6) {
  const months = []
  const currentDate = new Date()
  for (let i = 0; i < count; i++) {
    const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1)
    months.push(futureDate.toLocaleString('default', { month: 'long' }))
  }
  return months
}

export function filterDestinationsByMonth(destinations, month) {
  if (!destinations || !month) return destinations || []
  return destinations.filter(d => d.bestMonths && d.bestMonths.some(m => m.toLowerCase() === month.toLowerCase()))
}

export function searchDestinations(destinations, query) {
  if (!destinations || !query) return destinations || []
  const term = query.toLowerCase()
  return destinations.filter(d => (d.name || '').toLowerCase().includes(term) || (d.description || '').toLowerCase().includes(term) || (d.location || '').toLowerCase().includes(term))
}

export default {
  PAGE_ROUTES,
  createPageUrl,
  getCurrentMonth,
  capitalize,
  formatMonth,
  getUpcomingMonths,
  filterDestinationsByMonth,
  searchDestinations
}
export function formatMonthList(months) {
  if (!months || months.length === 0) return ''
  if (months.length === 1) return capitalize(months[0])
  if (months.length === 2) return `${capitalize(months[0])} and ${capitalize(months[1])}`
  const formatted = months.slice(0, -1).map(capitalize).join(', ')
  return `${formatted}, and ${capitalize(months[months.length - 1])}`
}

export function matchesSearchCriteria(destination, searchQuery = '', selectedMonth = '') {
  const matchesSearch = !searchQuery ||
    (destination.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (destination.country || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (destination.city || '').toLowerCase().includes(searchQuery.toLowerCase())

  const matchesMonth = !selectedMonth ||
    (destination.off_season_months || []).includes(selectedMonth.toLowerCase()) ||
    (destination.best_off_season_month || '').toLowerCase() === selectedMonth.toLowerCase()

  return matchesSearch && matchesMonth
}