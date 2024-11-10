const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key)!)
}
const setItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export { getItem, setItem };
