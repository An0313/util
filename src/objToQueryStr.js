/**
 * obj 转 queryStr
 * @param obj
 * @return {string}
 */
export default (obj = {}) => (new URLSearchParams(obj)).toString()

