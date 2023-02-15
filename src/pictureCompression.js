/**
 * 压缩图片
 * @param {File} file 要压缩的图片文件
 * @param {Number} size 期望压缩后的图片大小，单位kb 默认5000kb,
 * @param {Number} maxWidth 图片最大分辨率 默认1500,
 * @param {Number} maxHeight 图片最大分辨率 默认1500,
 * @returns {Promise<Object>} {
 *   base64data 图片压缩后的base64编码,
 *   width: 压缩后的图片宽度,
 *   height: 压缩后的图片高度,
 * }
 */
export default (file, {size = 5000, maxWidth = 1500, maxHeight = 1500} = {}) => {
  return new Promise((resolve, reject) => {
    if (!file) reject('缺少必要参数 file')
    const img = new Image()
    img.onerror = () => {
      reject('图片加载失败，请检查文件')
    }
    img.onload = () => {
      const canvas = document.getElementById(canvasId)
      const ctx = canvas.getContext('2d');
      let {width, height} = img
      const scale = width / height

      if (width > maxWidth) {
        width = maxWidth
        height = Math.ceil(maxWidth / scale)
      }

      if (height > maxHeight) {
        height = maxHeight
        width = Math.ceil(height * scale)
      }

      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      // 压缩质量
      let quality = 0.8
      let base64Data = canvas.toDataURL("image/jpeg", quality);
      // 超出部分
      let dValue = base64Data.length / 1024 - size

      // 循环压缩图片质量 直到符合大小 或 压缩质量为 quality = 0 结束
      while (dValue > 0 || quality <= 0) {
        quality -= dValue > 3000 ? 0.2 : dValue > 1000 ? 0.15 : dValue > 500 ? 0.05 : 0.2
        if (quality > 0) {
          base64Data = canvas.toDataURL("image/jpeg", quality);
          dValue = base64Data.length / 1024 - size
        }
      }

      if (dValue > 0 && quality <= 0) reject('图片过大，请更换图片')
      console.log(`压缩后图片:  ${base64Data.length}字节, 图片质量： ${quality}`);
      resolve({base64data: base64Data, width, height})
    }
    img.src = window.URL.createObjectURL(file)

  })
}
