'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 基类
 * --------
 * 待优化点：
 * 1、避免无效的循环遍历-（例：在进行清理时，如果对应方向上都是空的square时，停止遍历）
 */

var _actions = {
  /**
   * 生成随机数
   * @param {Number} num - 最大的范围
   * @return {Number} 返回随机值
   */
  getRandom: function getRandom(num) {
    return parseInt(Math.random(1) * num);
  },


  /**
   * 从指定数组中选择随机的n个值
   * @param {Array} arr - 数组
   * @param {Number} count - 抽取的值
   * @return {Array} 随机抽取的值的角标组成的数组
   */
  getRandomFromArray: function getRandomFromArray(arr, count) {
    var keys = Object.keys(arr);
    if (count >= arr.length) {
      // 全部返回
      return keys;
    }
    var list = [];
    var key = null;
    while (count != 0) {
      key = _actions.getRandom(keys.length);
      list.push(key);
      keys.splice(key, 1);
      count--;
    }
    return list;
  }
};

var Base = (_temp = _class = function () {
  function Base() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Base);
  }

  /**
   * 初始化配置
   * @param {Array} squares 
   */

  /**
   * 初始化配置参数
   */


  _createClass(Base, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var squares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var map = {};
      squares.forEach(function (square) {
        map[square.index] = square;
        square.base = _this;
      });
      this.squaresMap = map;
      this.squares = squares;
      this.initRowColumn();
      this.initSquareValue();
    }

    /**
     * 初始化square内的值
     */

  }, {
    key: 'initSquareValue',
    value: function initSquareValue() {
      var _this2 = this;

      var initConfig = this.constructor.initConfig;
      var randoms = _actions.getRandomFromArray(this.squares, initConfig.initValueCount);
      randoms.forEach(function (index) {
        _this2.squares[index].setVal(_this2.getRandomValue());
      });
    }

    /**
     * 分为4行4列分组
     */

  }, {
    key: 'initRowColumn',
    value: function initRowColumn(n) {
      var rows = [];
      var columns = [];
      this.squares.forEach(function (square) {
        var rowY = rows[square.y];
        var columnX = columns[square.x];
        if (rowY) {
          rowY.push(square);
        } else {
          rows[square.y] = [square];
        }
        if (columnX) {
          columnX.push(square);
        } else {
          columns[square.x] = [square];
        }
      });
      this.rows = rows;
      this.columns = columns;
    }

    /**
     * 获取随机出现的值
     * @return {Number} 随机生成的值
     */

  }, {
    key: 'getRandomValue',
    value: function getRandomValue() {
      var valus = this.constructor.initConfig.initValue;
      var length = valus.length;
      var index = parseInt(Math.random(1) * length);
      return valus[index];
    }

    /**
     * 获取指定位置的square
     * @param {Number} x - 水平值
     * @param {Number} y - 垂直值
     */

  }, {
    key: 'getSquare',
    value: function getSquare(x, y) {
      return this.squares[y * 4 + x];
    }

    /**
     * 移动
     * @param {String} direction - 方向
     */

  }, {
    key: 'move',
    value: function move(direction) {
      // 移动方向上的操作
      var actions = {
        'top': this.moveTop.bind(this),
        'bottom': this.moveBottom.bind(this),
        'left': this.moveLeft.bind(this),
        'right': this.moveRight.bind(this)
      };
      actions[direction]();
      // 移动计算低分
      // 判断是否结束了，不能继续移动
      // 每次移动会增加新的值
      this.createRandomValue();
    }

    /**
     * 向上移动
     */

  }, {
    key: 'moveTop',
    value: function moveTop() {
      var _this3 = this;

      // 从每列的最上方square开始判断合并
      this.columns.forEach(function (column) {
        // 上移-把当前的列的空格的下方的square上移动
        _this3.moveAction(column, 'bottom');
      });
    }

    /**
     * 向下移动
     */

  }, {
    key: 'moveBottom',
    value: function moveBottom() {
      var _this4 = this;

      // 从每列的最下方square开始判断合并
      this.columns.forEach(function (column) {
        // 下移-把当前的列的空格的上方的square下移动
        var columnReverse = column.slice(0).reverse();
        _this4.moveAction(columnReverse, 'top');
      });
    }

    /**
     * 向左移动
     */

  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      var _this5 = this;

      // 每行从最左侧的square开始判断合并
      this.rows.forEach(function (row) {
        // 左侧移动-把当前行的空格右侧的square左移
        _this5.moveAction(row, 'right');
      });
    }

    /**
     * 向右移动
     */

  }, {
    key: 'moveRight',
    value: function moveRight() {
      var _this6 = this;

      // 每行从最右侧的square开始判断合并
      this.rows.forEach(function (row) {
        // 右侧移动-把当前行的空格左侧的square右移
        var rowReverse = row.slice(0).reverse();
        _this6.moveAction(rowReverse, 'left');
      });
    }

    /**
     * 移动操作(某行或者mou列)
     * @param {Array} list - square数组
     * @param {String} direction - 方向--合并方向，不是移动方向（相反）
     */

  }, {
    key: 'moveAction',
    value: function moveAction(list, direction) {
      this.clearSpace(list, direction);
      list.forEach(function (square) {
        if (square.value === 0) {
          // 合并和被合并的块会变成空的，需要清理
          square.clearSpace(direction);
        } else {
          square.combine(direction);
        }
      });
    }

    /**
     * 清理空格-针对行列的初始化清理
     * @param {Array} arr - 对应的square数组
     * @param {String} direction - 清理时填补的方向
     */

  }, {
    key: 'clearSpace',
    value: function clearSpace(arr, direction) {
      arr.forEach(function (square) {
        if (square.value === 0) {
          square.clearSpace(direction);
        }
      });
    }

    /**
     * 随机在空的square上生成新的值
     */

  }, {
    key: 'createRandomValue',
    value: function createRandomValue() {
      var _this7 = this;

      var count = 0;
      var emptys = [];
      var createSquareOnMove = this.constructor.initConfig.createSquareOnMove;
      this.squares.forEach(function (square, index) {
        if (square.value === 0) {
          emptys.push(index);
        }
      });
      var randoms = _actions.getRandomFromArray(emptys, createSquareOnMove);
      randoms.forEach(function (index) {
        _this7.squares[emptys[index]].setVal(_this7.getRandomValue());
      });
    }
  }]);

  return Base;
}(), _class.initConfig = {
  // 初始化时有值的square数量
  initValueCount: 2,
  // 移动时随机生成的square数量
  createSquareOnMove: 1,
  // 随机生成的值
  initValue: [2, 4]
}, _temp);
exports.default = Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiX2FjdGlvbnMiLCJnZXRSYW5kb20iLCJudW0iLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJnZXRSYW5kb21Gcm9tQXJyYXkiLCJhcnIiLCJjb3VudCIsImtleXMiLCJPYmplY3QiLCJsZW5ndGgiLCJsaXN0Iiwia2V5IiwicHVzaCIsInNwbGljZSIsIkJhc2UiLCJvcHRpb25zIiwic3F1YXJlcyIsIm1hcCIsImZvckVhY2giLCJzcXVhcmUiLCJpbmRleCIsImJhc2UiLCJzcXVhcmVzTWFwIiwiaW5pdFJvd0NvbHVtbiIsImluaXRTcXVhcmVWYWx1ZSIsImluaXRDb25maWciLCJjb25zdHJ1Y3RvciIsInJhbmRvbXMiLCJpbml0VmFsdWVDb3VudCIsInNldFZhbCIsImdldFJhbmRvbVZhbHVlIiwibiIsInJvd3MiLCJjb2x1bW5zIiwicm93WSIsInkiLCJjb2x1bW5YIiwieCIsInZhbHVzIiwiaW5pdFZhbHVlIiwiZGlyZWN0aW9uIiwiYWN0aW9ucyIsIm1vdmVUb3AiLCJiaW5kIiwibW92ZUJvdHRvbSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiY3JlYXRlUmFuZG9tVmFsdWUiLCJjb2x1bW4iLCJtb3ZlQWN0aW9uIiwiY29sdW1uUmV2ZXJzZSIsInNsaWNlIiwicmV2ZXJzZSIsInJvdyIsInJvd1JldmVyc2UiLCJjbGVhclNwYWNlIiwidmFsdWUiLCJjb21iaW5lIiwiZW1wdHlzIiwiY3JlYXRlU3F1YXJlT25Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLElBQU1BLFdBQVc7QUFDZjs7Ozs7QUFLQUMsV0FOZSxxQkFNTEMsR0FOSyxFQU1BO0FBQ2IsV0FBT0MsU0FBU0MsS0FBS0MsTUFBTCxDQUFZLENBQVosSUFBaUJILEdBQTFCLENBQVA7QUFDRCxHQVJjOzs7QUFVZjs7Ozs7O0FBTUFJLG9CQWhCZSw4QkFnQklDLEdBaEJKLEVBZ0JTQyxLQWhCVCxFQWdCZ0I7QUFDN0IsUUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixHQUFaLENBQWI7QUFDQSxRQUFJQyxTQUFTRCxJQUFJSSxNQUFqQixFQUF5QjtBQUN2QjtBQUNBLGFBQU9GLElBQVA7QUFDRDtBQUNELFFBQU1HLE9BQU8sRUFBYjtBQUNBLFFBQUlDLE1BQU0sSUFBVjtBQUNBLFdBQU9MLFNBQVMsQ0FBaEIsRUFBbUI7QUFDakJLLFlBQU1iLFNBQVNDLFNBQVQsQ0FBbUJRLEtBQUtFLE1BQXhCLENBQU47QUFDQUMsV0FBS0UsSUFBTCxDQUFVRCxHQUFWO0FBQ0FKLFdBQUtNLE1BQUwsQ0FBWUYsR0FBWixFQUFpQixDQUFqQjtBQUNBTDtBQUNEO0FBQ0QsV0FBT0ksSUFBUDtBQUNEO0FBL0JjLENBQWpCOztJQWtDcUJJLEk7QUFhbkIsa0JBQXlCO0FBQUEsUUFBYkMsT0FBYSx1RUFBSCxFQUFHOztBQUFBO0FBQ3hCOztBQUVEOzs7OztBQWZBOzs7Ozs7OzJCQW1CbUI7QUFBQTs7QUFBQSxVQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2pCLFVBQU1DLE1BQU0sRUFBWjtBQUNBRCxjQUFRRSxPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQkYsWUFBSUUsT0FBT0MsS0FBWCxJQUFvQkQsTUFBcEI7QUFDQUEsZUFBT0UsSUFBUDtBQUNELE9BSEQ7QUFJQSxXQUFLQyxVQUFMLEdBQWtCTCxHQUFsQjtBQUNBLFdBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUtPLGFBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0Q7O0FBRUQ7Ozs7OztzQ0FHa0I7QUFBQTs7QUFDaEIsVUFBTUMsYUFBYSxLQUFLQyxXQUFMLENBQWlCRCxVQUFwQztBQUNBLFVBQU1FLFVBQVU3QixTQUFTTSxrQkFBVCxDQUE0QixLQUFLWSxPQUFqQyxFQUEwQ1MsV0FBV0csY0FBckQsQ0FBaEI7QUFDQUQsY0FBUVQsT0FBUixDQUFnQixVQUFDRSxLQUFELEVBQVc7QUFDekIsZUFBS0osT0FBTCxDQUFhSSxLQUFiLEVBQW9CUyxNQUFwQixDQUEyQixPQUFLQyxjQUFMLEVBQTNCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7Ozs7a0NBR2NDLEMsRUFBRztBQUNmLFVBQU1DLE9BQU8sRUFBYjtBQUNBLFVBQU1DLFVBQVUsRUFBaEI7QUFDQSxXQUFLakIsT0FBTCxDQUFhRSxPQUFiLENBQXFCLFVBQUNDLE1BQUQsRUFBWTtBQUMvQixZQUFJZSxPQUFPRixLQUFLYixPQUFPZ0IsQ0FBWixDQUFYO0FBQ0EsWUFBSUMsVUFBVUgsUUFBUWQsT0FBT2tCLENBQWYsQ0FBZDtBQUNBLFlBQUlILElBQUosRUFBVTtBQUNSQSxlQUFLdEIsSUFBTCxDQUFVTyxNQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xhLGVBQUtiLE9BQU9nQixDQUFaLElBQWlCLENBQUNoQixNQUFELENBQWpCO0FBQ0Q7QUFDRCxZQUFJaUIsT0FBSixFQUFhO0FBQ1hBLGtCQUFReEIsSUFBUixDQUFhTyxNQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xjLGtCQUFRZCxPQUFPa0IsQ0FBZixJQUFvQixDQUFDbEIsTUFBRCxDQUFwQjtBQUNEO0FBQ0YsT0FiRDtBQWNBLFdBQUthLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7O3FDQUlpQjtBQUNmLFVBQU1LLFFBQVEsS0FBS1osV0FBTCxDQUFpQkQsVUFBakIsQ0FBNEJjLFNBQTFDO0FBQ0EsVUFBTTlCLFNBQVM2QixNQUFNN0IsTUFBckI7QUFDQSxVQUFNVyxRQUFRbkIsU0FBU0MsS0FBS0MsTUFBTCxDQUFZLENBQVosSUFBaUJNLE1BQTFCLENBQWQ7QUFDQSxhQUFPNkIsTUFBTWxCLEtBQU4sQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLVWlCLEMsRUFBR0YsQyxFQUFHO0FBQ2QsYUFBTyxLQUFLbkIsT0FBTCxDQUFhbUIsSUFBSSxDQUFKLEdBQVFFLENBQXJCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozt5QkFJS0csUyxFQUFXO0FBQ2Q7QUFDQSxVQUFNQyxVQUFVO0FBQ2QsZUFBTyxLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FETztBQUVkLGtCQUFVLEtBQUtDLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBRkk7QUFHZCxnQkFBUSxLQUFLRSxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FITTtBQUlkLGlCQUFTLEtBQUtHLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQjtBQUpLLE9BQWhCO0FBTUFGLGNBQVFELFNBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFLTyxpQkFBTDtBQUNEOztBQUVEOzs7Ozs7OEJBR1U7QUFBQTs7QUFDUjtBQUNBLFdBQUtkLE9BQUwsQ0FBYWYsT0FBYixDQUFxQixVQUFDOEIsTUFBRCxFQUFZO0FBQy9CO0FBQ0EsZUFBS0MsVUFBTCxDQUFnQkQsTUFBaEIsRUFBd0IsUUFBeEI7QUFDRCxPQUhEO0FBSUQ7O0FBRUQ7Ozs7OztpQ0FHYTtBQUFBOztBQUNYO0FBQ0EsV0FBS2YsT0FBTCxDQUFhZixPQUFiLENBQXFCLFVBQUM4QixNQUFELEVBQVk7QUFDL0I7QUFDQSxZQUFNRSxnQkFBZ0JGLE9BQU9HLEtBQVAsQ0FBYSxDQUFiLEVBQWdCQyxPQUFoQixFQUF0QjtBQUNBLGVBQUtILFVBQUwsQ0FBZ0JDLGFBQWhCLEVBQStCLEtBQS9CO0FBQ0QsT0FKRDtBQUtEOztBQUVEOzs7Ozs7K0JBR1c7QUFBQTs7QUFDVDtBQUNBLFdBQUtsQixJQUFMLENBQVVkLE9BQVYsQ0FBa0IsVUFBQ21DLEdBQUQsRUFBUztBQUN6QjtBQUNBLGVBQUtKLFVBQUwsQ0FBZ0JJLEdBQWhCLEVBQXFCLE9BQXJCO0FBQ0QsT0FIRDtBQUlEOztBQUVEOzs7Ozs7Z0NBR1k7QUFBQTs7QUFDVjtBQUNBLFdBQUtyQixJQUFMLENBQVVkLE9BQVYsQ0FBa0IsVUFBQ21DLEdBQUQsRUFBUztBQUN6QjtBQUNBLFlBQU1DLGFBQWFELElBQUlGLEtBQUosQ0FBVSxDQUFWLEVBQWFDLE9BQWIsRUFBbkI7QUFDQSxlQUFLSCxVQUFMLENBQWdCSyxVQUFoQixFQUE0QixNQUE1QjtBQUNELE9BSkQ7QUFLRDs7QUFFRDs7Ozs7Ozs7K0JBS1c1QyxJLEVBQU04QixTLEVBQVc7QUFDMUIsV0FBS2UsVUFBTCxDQUFnQjdDLElBQWhCLEVBQXNCOEIsU0FBdEI7QUFDQTlCLFdBQUtRLE9BQUwsQ0FBYSxVQUFDQyxNQUFELEVBQVk7QUFDdkIsWUFBSUEsT0FBT3FDLEtBQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDQXJDLGlCQUFPb0MsVUFBUCxDQUFrQmYsU0FBbEI7QUFDRCxTQUhELE1BR087QUFDTHJCLGlCQUFPc0MsT0FBUCxDQUFlakIsU0FBZjtBQUNEO0FBQ0YsT0FQRDtBQVFEOztBQUVEOzs7Ozs7OzsrQkFLV25DLEcsRUFBS21DLFMsRUFBVztBQUN6Qm5DLFVBQUlhLE9BQUosQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDdEIsWUFBSUEsT0FBT3FDLEtBQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJyQyxpQkFBT29DLFVBQVAsQ0FBa0JmLFNBQWxCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7O0FBRUQ7Ozs7Ozt3Q0FHb0I7QUFBQTs7QUFDbEIsVUFBSWxDLFFBQVEsQ0FBWjtBQUNBLFVBQUlvRCxTQUFTLEVBQWI7QUFDQSxVQUFNQyxxQkFBcUIsS0FBS2pDLFdBQUwsQ0FBaUJELFVBQWpCLENBQTRCa0Msa0JBQXZEO0FBQ0EsV0FBSzNDLE9BQUwsQ0FBYUUsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdEMsWUFBSUQsT0FBT3FDLEtBQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJFLGlCQUFPOUMsSUFBUCxDQUFZUSxLQUFaO0FBQ0Q7QUFDRixPQUpEO0FBS0EsVUFBTU8sVUFBVTdCLFNBQVNNLGtCQUFULENBQTRCc0QsTUFBNUIsRUFBb0NDLGtCQUFwQyxDQUFoQjtBQUNBaEMsY0FBUVQsT0FBUixDQUFnQixVQUFDRSxLQUFELEVBQVc7QUFDekIsZUFBS0osT0FBTCxDQUFhMEMsT0FBT3RDLEtBQVAsQ0FBYixFQUE0QlMsTUFBNUIsQ0FBbUMsT0FBS0MsY0FBTCxFQUFuQztBQUNELE9BRkQ7QUFHRDs7OztZQWxNTUwsVSxHQUFhO0FBQ2xCO0FBQ0FHLGtCQUFnQixDQUZFO0FBR2xCO0FBQ0ErQixzQkFBb0IsQ0FKRjtBQUtsQjtBQUNBcEIsYUFBVyxDQUFDLENBQUQsRUFBSSxDQUFKO0FBTk8sQztrQkFKRHpCLEkiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5Z+657G7XG4gKiAtLS0tLS0tLVxuICog5b6F5LyY5YyW54K577yaXG4gKiAx44CB6YG/5YWN5peg5pWI55qE5b6q546v6YGN5Y6GLe+8iOS+i++8muWcqOi/m+ihjOa4heeQhuaXtu+8jOWmguaenOWvueW6lOaWueWQkeS4iumDveaYr+epuueahHNxdWFyZeaXtu+8jOWBnOatoumBjeWOhu+8iVxuICovXG5cbmNvbnN0IF9hY3Rpb25zID0ge1xuICAvKipcbiAgICog55Sf5oiQ6ZqP5py65pWwXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gLSDmnIDlpKfnmoTojIPlm7RcbiAgICogQHJldHVybiB7TnVtYmVyfSDov5Tlm57pmo/mnLrlgLxcbiAgICovXG4gIGdldFJhbmRvbShudW0pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoTWF0aC5yYW5kb20oMSkgKiBudW0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOS7juaMh+WumuaVsOe7hOS4remAieaLqemaj+acuueahG7kuKrlgLxcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyIC0g5pWw57uEXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCAtIOaKveWPlueahOWAvFxuICAgKiBAcmV0dXJuIHtBcnJheX0g6ZqP5py65oq95Y+W55qE5YC855qE6KeS5qCH57uE5oiQ55qE5pWw57uEXG4gICAqL1xuICBnZXRSYW5kb21Gcm9tQXJyYXkoYXJyLCBjb3VudCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpXG4gICAgaWYgKGNvdW50ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIC8vIOWFqOmDqOi/lOWbnlxuICAgICAgcmV0dXJuIGtleXNcbiAgICB9XG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgbGV0IGtleSA9IG51bGxcbiAgICB3aGlsZSAoY291bnQgIT0gMCkge1xuICAgICAga2V5ID0gX2FjdGlvbnMuZ2V0UmFuZG9tKGtleXMubGVuZ3RoKVxuICAgICAgbGlzdC5wdXNoKGtleSlcbiAgICAgIGtleXMuc3BsaWNlKGtleSwgMSlcbiAgICAgIGNvdW50LS1cbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcbiAgLyoqXG4gICAqIOWIneWni+WMlumFjee9ruWPguaVsFxuICAgKi9cbiAgc3RhdGljIGluaXRDb25maWcgPSB7XG4gICAgLy8g5Yid5aeL5YyW5pe25pyJ5YC855qEc3F1YXJl5pWw6YePXG4gICAgaW5pdFZhbHVlQ291bnQ6IDIsXG4gICAgLy8g56e75Yqo5pe26ZqP5py655Sf5oiQ55qEc3F1YXJl5pWw6YePXG4gICAgY3JlYXRlU3F1YXJlT25Nb3ZlOiAxLFxuICAgIC8vIOmaj+acuueUn+aIkOeahOWAvFxuICAgIGluaXRWYWx1ZTogWzIsIDRdLFxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KXtcbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJbphY3nva5cbiAgICogQHBhcmFtIHtBcnJheX0gc3F1YXJlcyBcbiAgICovXG4gIGluaXQoc3F1YXJlcyA9IFtdKSB7XG4gICAgY29uc3QgbWFwID0ge31cbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgbWFwW3NxdWFyZS5pbmRleF0gPSBzcXVhcmVcbiAgICAgIHNxdWFyZS5iYXNlID0gdGhpc1xuICAgIH0pXG4gICAgdGhpcy5zcXVhcmVzTWFwID0gbWFwXG4gICAgdGhpcy5zcXVhcmVzID0gc3F1YXJlc1xuICAgIHRoaXMuaW5pdFJvd0NvbHVtbigpXG4gICAgdGhpcy5pbml0U3F1YXJlVmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMlnNxdWFyZeWGheeahOWAvFxuICAgKi9cbiAgaW5pdFNxdWFyZVZhbHVlKCkge1xuICAgIGNvbnN0IGluaXRDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLmluaXRDb25maWdcbiAgICBjb25zdCByYW5kb21zID0gX2FjdGlvbnMuZ2V0UmFuZG9tRnJvbUFycmF5KHRoaXMuc3F1YXJlcywgaW5pdENvbmZpZy5pbml0VmFsdWVDb3VudClcbiAgICByYW5kb21zLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNxdWFyZXNbaW5kZXhdLnNldFZhbCh0aGlzLmdldFJhbmRvbVZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDliIbkuLo06KGMNOWIl+WIhue7hFxuICAgKi9cbiAgaW5pdFJvd0NvbHVtbihuKSB7XG4gICAgY29uc3Qgcm93cyA9IFtdXG4gICAgY29uc3QgY29sdW1ucyA9IFtdXG4gICAgdGhpcy5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgbGV0IHJvd1kgPSByb3dzW3NxdWFyZS55XVxuICAgICAgbGV0IGNvbHVtblggPSBjb2x1bW5zW3NxdWFyZS54XVxuICAgICAgaWYgKHJvd1kpIHtcbiAgICAgICAgcm93WS5wdXNoKHNxdWFyZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvd3Nbc3F1YXJlLnldID0gW3NxdWFyZV1cbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5YKSB7XG4gICAgICAgIGNvbHVtblgucHVzaChzcXVhcmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW5zW3NxdWFyZS54XSA9IFtzcXVhcmVdXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1uc1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlumaj+acuuWHuueOsOeahOWAvFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOmaj+acuueUn+aIkOeahOWAvFxuICAgKi9cbiAgZ2V0UmFuZG9tVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdXMgPSB0aGlzLmNvbnN0cnVjdG9yLmluaXRDb25maWcuaW5pdFZhbHVlXG4gICAgY29uc3QgbGVuZ3RoID0gdmFsdXMubGVuZ3RoXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChNYXRoLnJhbmRvbSgxKSAqIGxlbmd0aClcbiAgICByZXR1cm4gdmFsdXNbaW5kZXhdXG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5oyH5a6a5L2N572u55qEc3F1YXJlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC0g5rC05bmz5YC8XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IC0g5Z6C55u05YC8XG4gICAqL1xuICBnZXRTcXVhcmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLnNxdWFyZXNbeSAqIDQgKyB4XVxuICB9XG5cbiAgLyoqXG4gICAqIOenu+WKqFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRXG4gICAqL1xuICBtb3ZlKGRpcmVjdGlvbikge1xuICAgIC8vIOenu+WKqOaWueWQkeS4iueahOaTjeS9nFxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAndG9wJzogdGhpcy5tb3ZlVG9wLmJpbmQodGhpcyksXG4gICAgICAnYm90dG9tJzogdGhpcy5tb3ZlQm90dG9tLmJpbmQodGhpcyksXG4gICAgICAnbGVmdCc6IHRoaXMubW92ZUxlZnQuYmluZCh0aGlzKSxcbiAgICAgICdyaWdodCc6IHRoaXMubW92ZVJpZ2h0LmJpbmQodGhpcylcbiAgICB9XG4gICAgYWN0aW9uc1tkaXJlY3Rpb25dKClcbiAgICAvLyDnp7vliqjorqHnrpfkvY7liIZcbiAgICAvLyDliKTmlq3mmK/lkKbnu5PmnZ/kuobvvIzkuI3og73nu6fnu63np7vliqhcbiAgICAvLyDmr4/mrKHnp7vliqjkvJrlop7liqDmlrDnmoTlgLxcbiAgICB0aGlzLmNyZWF0ZVJhbmRvbVZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiDlkJHkuIrnp7vliqhcbiAgICovXG4gIG1vdmVUb3AoKSB7XG4gICAgLy8g5LuO5q+P5YiX55qE5pyA5LiK5pa5c3F1YXJl5byA5aeL5Yik5pat5ZCI5bm2XG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgLy8g5LiK56e7LeaKiuW9k+WJjeeahOWIl+eahOepuuagvOeahOS4i+aWueeahHNxdWFyZeS4iuenu+WKqFxuICAgICAgdGhpcy5tb3ZlQWN0aW9uKGNvbHVtbiwgJ2JvdHRvbScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDlkJHkuIvnp7vliqhcbiAgICovXG4gIG1vdmVCb3R0b20oKSB7XG4gICAgLy8g5LuO5q+P5YiX55qE5pyA5LiL5pa5c3F1YXJl5byA5aeL5Yik5pat5ZCI5bm2XG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgLy8g5LiL56e7LeaKiuW9k+WJjeeahOWIl+eahOepuuagvOeahOS4iuaWueeahHNxdWFyZeS4i+enu+WKqFxuICAgICAgY29uc3QgY29sdW1uUmV2ZXJzZSA9IGNvbHVtbi5zbGljZSgwKS5yZXZlcnNlKClcbiAgICAgIHRoaXMubW92ZUFjdGlvbihjb2x1bW5SZXZlcnNlLCAndG9wJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeW3puenu+WKqFxuICAgKi9cbiAgbW92ZUxlZnQoKSB7XG4gICAgLy8g5q+P6KGM5LuO5pyA5bem5L6n55qEc3F1YXJl5byA5aeL5Yik5pat5ZCI5bm2XG4gICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgLy8g5bem5L6n56e75YqoLeaKiuW9k+WJjeihjOeahOepuuagvOWPs+S+p+eahHNxdWFyZeW3puenu1xuICAgICAgdGhpcy5tb3ZlQWN0aW9uKHJvdywgJ3JpZ2h0JylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWQkeWPs+enu+WKqFxuICAgKi9cbiAgbW92ZVJpZ2h0KCkge1xuICAgIC8vIOavj+ihjOS7juacgOWPs+S+p+eahHNxdWFyZeW8gOWni+WIpOaWreWQiOW5tlxuICAgIHRoaXMucm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIC8vIOWPs+S+p+enu+WKqC3miorlvZPliY3ooYznmoTnqbrmoLzlt6bkvqfnmoRzcXVhcmXlj7Pnp7tcbiAgICAgIGNvbnN0IHJvd1JldmVyc2UgPSByb3cuc2xpY2UoMCkucmV2ZXJzZSgpXG4gICAgICB0aGlzLm1vdmVBY3Rpb24ocm93UmV2ZXJzZSwgJ2xlZnQnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog56e75Yqo5pON5L2cKOafkOihjOaIluiAhW1vdeWIlylcbiAgICogQHBhcmFtIHtBcnJheX0gbGlzdCAtIHNxdWFyZeaVsOe7hFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRLS3lkIjlubbmlrnlkJHvvIzkuI3mmK/np7vliqjmlrnlkJHvvIjnm7jlj43vvIlcbiAgICovXG4gIG1vdmVBY3Rpb24obGlzdCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5jbGVhclNwYWNlKGxpc3QsIGRpcmVjdGlvbilcbiAgICBsaXN0LmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgaWYgKHNxdWFyZS52YWx1ZSA9PT0gMCkge1xuICAgICAgICAvLyDlkIjlubblkozooqvlkIjlubbnmoTlnZfkvJrlj5jmiJDnqbrnmoTvvIzpnIDopoHmuIXnkIZcbiAgICAgICAgc3F1YXJlLmNsZWFyU3BhY2UoZGlyZWN0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmNvbWJpbmUoZGlyZWN0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog5riF55CG56m65qC8LemSiOWvueihjOWIl+eahOWIneWni+WMlua4heeQhlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnIgLSDlr7nlupTnmoRzcXVhcmXmlbDnu4RcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIOa4heeQhuaXtuWhq+ihpeeahOaWueWQkVxuICAgKi9cbiAgY2xlYXJTcGFjZShhcnIsIGRpcmVjdGlvbikge1xuICAgIGFyci5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGlmIChzcXVhcmUudmFsdWUgPT09IDApIHtcbiAgICAgICAgc3F1YXJlLmNsZWFyU3BhY2UoZGlyZWN0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog6ZqP5py65Zyo56m655qEc3F1YXJl5LiK55Sf5oiQ5paw55qE5YC8XG4gICAqL1xuICBjcmVhdGVSYW5kb21WYWx1ZSgpIHtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgbGV0IGVtcHR5cyA9IFtdXG4gICAgY29uc3QgY3JlYXRlU3F1YXJlT25Nb3ZlID0gdGhpcy5jb25zdHJ1Y3Rvci5pbml0Q29uZmlnLmNyZWF0ZVNxdWFyZU9uTW92ZVxuICAgIHRoaXMuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc3F1YXJlLnZhbHVlID09PSAwKSB7XG4gICAgICAgIGVtcHR5cy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgcmFuZG9tcyA9IF9hY3Rpb25zLmdldFJhbmRvbUZyb21BcnJheShlbXB0eXMsIGNyZWF0ZVNxdWFyZU9uTW92ZSlcbiAgICByYW5kb21zLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNxdWFyZXNbZW1wdHlzW2luZGV4XV0uc2V0VmFsKHRoaXMuZ2V0UmFuZG9tVmFsdWUoKSlcbiAgICB9KVxuICB9XG59Il19