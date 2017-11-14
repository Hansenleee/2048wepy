/**
 * 4*4布局
 * 左上为0，0-右下为3，3
 */
import Base from './base'

export default class Square extends Base {
  constructor(options = {}) {
    super(options)
    this.x = options.x
    this.y = options.y
    this.setValBack = options.setVal
    this.init()
  }

  /**
   * 初始化
   */
  init() {
    // 0:空的
    this.value = 0
    this.index = this.y * 4 + this.x
  }

  /**
   * 设定值
   * @param {Number} value - 数值
   */
  setVal(value) {
    // 校验value是不是2的n次方
    const n = Math.log(value) / Math.log(2)
    if (n == parseInt(n) || value === 0) {
      this.value = value
      this.setValBack(this.index, value)
    }
  }

  /**
   * 获取对应方向上的元素square
   * @param {String} direction - 方向
   * @param {Number} num - 此方向上的第n个值
   * @return {Boolean|Object} 返回元素
   */
  getDirectionTarget(direction, num = 1) {
    let x = this.x
    let y = this.y
    switch (direction) {
      case 'top':
        y = this.y - num
        break
      case 'right':
        x = this.x + num
        break
      case 'bottom':
        y = this.y + num
        break
      case 'left':
        x = this.x - num
      default:
        break
    }
    // 超出范围返回false
    if (x < 0 || x > 3 || y < 0 || y > 3) {
      return false
    }
    return this.getSquare.call(this.base, x, y)
  }

  /**
   * 获取当前square的direction方向上的有效值的块
   * @param {String} direction - 方向
   * @return {Square|Boolean} 对应的square
   */
  getDirecAvailSquare(direction) {
    let target = this
    while (target.value === 0 || target === this) {
      target = target.getDirectionTarget(direction)
      if (!target) return false
    }
    return target
  }

  /**
   * 当前为空时，清理--将对应方向上的square移入
   * @param {String} direction - 方向
   */
  clearSpace(direction) {
    if (this.value > 0) return
    // 获取对应反向的有效块
    const target = this.getDirecAvailSquare(direction)
    if (target) {
      // 移入当前块
      this.setVal(target.value)
      target.setVal(0)
    }
  }
  
  /**
   * 判断指定方向上是否可以合并,合并只对当前方向上的第一个元素进行比较
   * 若可以合并，合并后返回被合并的对象
   * @param {String} direction - 方向
   */
  combine(direction) {
    const target = this.getDirectionTarget(direction)
    if (target && target.value === this.value && this.value !== 0) {
      // 进行合并
      this.setVal(this.value * 2)
      target.setVal(0)
    }
  }
}