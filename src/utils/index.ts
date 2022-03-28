/**
 * 
*  @param fn 执行的防抖函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns {
 *    @returns stop 可手动停止
 *    @returns call 执行的防抖函数
 * }
 */
export function debounce(func,wait,immediate) {
  let timer;
  return {
    stop: function () {
      if (timer) clearTimeout(timer);
    },
    call: function () {
      let context = this;
      let args = arguments;
      if (timer) clearTimeout(timer);
      if (immediate) {
        var callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait)
        if (callNow) func.apply(context, args)
      } else {
        timer = setTimeout(function(){
          func.apply(context, args)
        }, wait);
      }
    }
  }
}