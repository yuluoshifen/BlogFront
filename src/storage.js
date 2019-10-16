const STORAGE = 'item-list'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE) || '[]')
  },
  save: function (item) {
    window.localStorage.setItem(STORAGE, JSON.stringify(item))
  }
}
