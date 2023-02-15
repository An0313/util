import isIOS from "./isIOS";
import isAndroid from "./isAndroid";
import isWx from "./isWx";

/**
 * 获取浏览器平台
 * @return {{iPhone: boolean, webApp: boolean, qq: boolean, trident: boolean, gecko: boolean, weixin: boolean, android: boolean, mobile: boolean, iPad: boolean, ios: boolean, presto: boolean, webKit: boolean}}
 */
export default () => {
  const ua = window.navigator.userAgent

  return {
    trident: ua.indexOf("Trident") > -1, // IE内核
    presto: ua.indexOf("Presto") > -1, // opera内核
    webKit: ua.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
    gecko: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1, // 火狐内核
    mobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: isIOS(), // ios终端
    android: isAndroid(), // android终端
    iPhone: ua.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
    iPad: ua.indexOf("iPad") > -1, // 是否iPad
    webApp: ua.indexOf("Safari") === -1, // 是否web应该程序，没有头部与底部
    weixin: isWx(), // 是否微信 （2015-01-22新增）
    qq: ua.match(/\sQQ/i) === " qq", // 是否QQ
  }
}
