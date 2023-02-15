/**
 * 将以base64数据转换为File
 * @param {string} base64 base64数据
 * @param {string} filename 生成文件的文件名
 * 用url方式表示的base64图片数据
 */
export default (base64 = '', filename = '') => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
