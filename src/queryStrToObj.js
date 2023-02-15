/**
 * queryStr 转 对象
 * @return {Object}
 */
export default (query = window.location.search) => {
  if (!query) return {}
  const obj = {}
  query.split('&').forEach(q => {
    const item = q.split('=')
    obj[item[0]] = item[1]
  })
  return obj
}
