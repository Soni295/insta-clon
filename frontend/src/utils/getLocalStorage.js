export const getLocalStorage = item => (
  localStorage.getItem(item)
  ? JSON.parse(localStorage.getItem(item))
  : null
)
