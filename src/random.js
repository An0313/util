/**
 * 生成指定范围的随机数
 * @param {number} minNum
 * @param {number} maxNum
 * @return {number}
 */
export default (minNum = 0, maxNum = 1) => window.Number.parseInt(window.Math.random() * (maxNum - minNum + 1) + minNum + '', 10);
