export const getLocalStorage = item => (
  localStorage.getItem(item)
  ? JSON.parse(localStorage.getItem(item))
  : null
)

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
