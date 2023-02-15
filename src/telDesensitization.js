/**
 * 手机号脱敏
 * @param {string} tel 手机号
 * @return {string}
 */
export default (tel = '') => tel.length === 11 ? tel.replace(/(\d{3})\d*(\d{4})/, '$1****$2') : '';
