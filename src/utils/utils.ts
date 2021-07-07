/**
 * navigateTo 超过8次之后 强行进行redirectTo 否则会造成页面卡死
 * 
 */
 const nav = Taro.navigateTo
 Taro.navigateTo = (data) => {
   if (Taro.getCurrentPages().length > 8) {
     return Taro.redirectTo(data)
   }
   return nav(data)
 }

 export {
   nav
 }
 