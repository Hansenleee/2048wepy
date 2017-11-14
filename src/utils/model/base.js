/**
 * 基类
 * --------
 * 待优化点：
 * 1、避免无效的循环遍历-（例：在进行清理时，如果对应方向上都是空的square时，停止遍历）
 */

const _actions = {
  /**
   * 生成随机数
   * @param {Number} num - 最大的范围
   * @return {Number} 返回随机值
   */
  getRandom(num) {
    return parseInt(Math.random(1) * num)
  },

  /**
   * 从指定数组中选择随机的n个值
   * @param {Array} arr - 数组
   * @param {Number} count - 抽取的值
   * @return {Array} 随机抽取的值的角标组成的数组
   */
  getRandomFromArray(arr, count) {
    const keys = Object.keys(arr)
    if (count >= arr.length) {
      // 全部返回
      return keys
    }
    const list = []
    let key = null
    while (count != 0) {
      key = _actions.getRandom(keys.length)
      list.push(key)
      keys.splice(key, 1)
      count--
    }
    return list
  }
}

export default class Base {
  /**
   * 初始化配置参数
   */
  static initConfig = {
    // 初始化时有值的square数量
    initValueCount: 2,
    // 移动时随机生成的square数量
    createSquareOnMove: 1,
    // 随机生成的值
    initValue: [2, 4],
  }

  constructor(options = {}){
  }

  /**
   * 初始化配置
   * @param {Array} squares 
   */
  init(squares = []) {
    const map = {}
    squares.forEach((square) => {
      map[square.index] = square
      square.base = this
    })
    this.squaresMap = map
    this.squares = squares
    this.initRowColumn()
    this.initSquareValue()
  }

  /**
   * 初始化square内的值
   */
  initSquareValue() {
    const initConfig = this.constructor.initConfig
    const randoms = _actions.getRandomFromArray(this.squares, initConfig.initValueCount)
    randoms.forEach((index) => {
      this.squares[index].setVal(this.getRandomValue())
    })
  }

  /**
   * 分为4行4列分组
   */
  initRowColumn(n) {
    const rows = []
    const columns = []
    this.squares.forEach((square) => {
      let rowY = rows[square.y]
      let columnX = columns[square.x]
      if (rowY) {
        rowY.push(square)
      } else {
        rows[square.y] = [square]
      }
      if (columnX) {
        columnX.push(square)
      } else {
        columns[square.x] = [square]
      }
    })
    this.rows = rows
    this.columns = columns
  }

  /**
   * 获取随机出现的值
   * @return {Number} 随机生成的值
   */
  getRandomValue() {
    const valus = this.constructor.initConfig.initValue
    const length = valus.length
    const index = parseInt(Math.random(1) * length)
    return valus[index]
  }

  /**
   * 获取指定位置的square
   * @param {Number} x - 水平值
   * @param {Number} y - 垂直值
   */
  getSquare(x, y) {
    return this.squares[y * 4 + x]
  }

  /**
   * 移动
   * @param {String} direction - 方向
   */
  move(direction) {
    // 移动方向上的操作
    const actions = {
      'top': this.moveTop.bind(this),
      'bottom': this.moveBottom.bind(this),
      'left': this.moveLeft.bind(this),
      'right': this.moveRight.bind(this)
    }
    actions[direction]()
    // 移动计算低分
    // 判断是否结束了，不能继续移动
    // 每次移动会增加新的值
    this.createRandomValue()
  }

  /**
   * 向上移动
   */
  moveTop() {
    // 从每列的最上方square开始判断合并
    this.columns.forEach((column) => {
      // 上移-把当前的列的空格的下方的square上移动
      this.moveAction(column, 'bottom')
    })
  }

  /**
   * 向下移动
   */
  moveBottom() {
    // 从每列的最下方square开始判断合并
    this.columns.forEach((column) => {
      // 下移-把当前的列的空格的上方的square下移动
      const columnReverse = column.slice(0).reverse()
      this.moveAction(columnReverse, 'top')
    })
  }

  /**
   * 向左移动
   */
  moveLeft() {
    // 每行从最左侧的square开始判断合并
    this.rows.forEach((row) => {
      // 左侧移动-把当前行的空格右侧的square左移
      this.moveAction(row, 'right')
    })
  }

  /**
   * 向右移动
   */
  moveRight() {
    // 每行从最右侧的square开始判断合并
    this.rows.forEach((row) => {
      // 右侧移动-把当前行的空格左侧的square右移
      const rowReverse = row.slice(0).reverse()
      this.moveAction(rowReverse, 'left')
    })
  }

  /**
   * 移动操作(某行或者mou列)
   * @param {Array} list - square数组
   * @param {String} direction - 方向--合并方向，不是移动方向（相反）
   */
  moveAction(list, direction) {
    this.clearSpace(list, direction)
    list.forEach((square) => {
      if (square.value === 0) {
        // 合并和被合并的块会变成空的，需要清理
        square.clearSpace(direction)
      } else {
        square.combine(direction)
      }
    })
  }

  /**
   * 清理空格-针对行列的初始化清理
   * @param {Array} arr - 对应的square数组
   * @param {String} direction - 清理时填补的方向
   */
  clearSpace(arr, direction) {
    arr.forEach((square) => {
      if (square.value === 0) {
        square.clearSpace(direction)
      }
    })
  }

  /**
   * 随机在空的square上生成新的值
   */
  createRandomValue() {
    let count = 0
    let emptys = []
    const createSquareOnMove = this.constructor.initConfig.createSquareOnMove
    this.squares.forEach((square, index) => {
      if (square.value === 0) {
        emptys.push(index)
      }
    })
    const randoms = _actions.getRandomFromArray(emptys, createSquareOnMove)
    randoms.forEach((index) => {
      this.squares[emptys[index]].setVal(this.getRandomValue())
    })
  }
}