/**
 * 延迟函数
 * @param {Number} time - 时间毫秒
 * @returns {Promise} 返回promies
 */
export function sleep(time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}