/**
 * 时间戳转日期
 * @param {number} timeStamp 时间戳
 * @param {string} separator 分割符
 * @return {string}
 */
export default (timeStamp = 0, separator ='') => (new Date(timeStamp + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.'))
