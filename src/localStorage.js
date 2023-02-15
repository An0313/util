export default {
  // 获取 localStorage
  get(key = ''){
    const json = window.localStorage.getItem(key)
    let data = null

    try {
      data = window.JSON.parse(json)
    } catch (err) {
      console.log(err)
    }

    return data
  },
  // 设置 localStorage
  set(key = '', val = {}) {
    window.localStorage.setItem(key, window.JSON.stringify(val))
  }
}
