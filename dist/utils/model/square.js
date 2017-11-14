'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 4*4布局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 左上为0，0-右下为3，3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Square = function (_Base) {
  _inherits(Square, _Base);

  function Square() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Square);

    var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, options));

    _this.x = options.x;
    _this.y = options.y;
    _this.setValBack = options.setVal;
    _this.init();
    return _this;
  }

  /**
   * 初始化
   */


  _createClass(Square, [{
    key: 'init',
    value: function init() {
      // 0:空的
      this.value = 0;
      this.index = this.y * 4 + this.x;
    }

    /**
     * 设定值
     * @param {Number} value - 数值
     */

  }, {
    key: 'setVal',
    value: function setVal(value) {
      // 校验value是不是2的n次方
      var n = Math.log(value) / Math.log(2);
      if (n == parseInt(n) || value === 0) {
        this.value = value;
        this.setValBack(this.index, value);
      }
    }

    /**
     * 获取对应方向上的元素square
     * @param {String} direction - 方向
     * @param {Number} num - 此方向上的第n个值
     * @return {Boolean|Object} 返回元素
     */

  }, {
    key: 'getDirectionTarget',
    value: function getDirectionTarget(direction) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var x = this.x;
      var y = this.y;
      switch (direction) {
        case 'top':
          y = this.y - num;
          break;
        case 'right':
          x = this.x + num;
          break;
        case 'bottom':
          y = this.y + num;
          break;
        case 'left':
          x = this.x - num;
        default:
          break;
      }
      // 超出范围返回false
      if (x < 0 || x > 3 || y < 0 || y > 3) {
        return false;
      }
      return this.getSquare.call(this.base, x, y);
    }

    /**
     * 获取当前square的direction方向上的有效值的块
     * @param {String} direction - 方向
     * @return {Square|Boolean} 对应的square
     */

  }, {
    key: 'getDirecAvailSquare',
    value: function getDirecAvailSquare(direction) {
      var target = this;
      while (target.value === 0 || target === this) {
        target = target.getDirectionTarget(direction);
        if (!target) return false;
      }
      return target;
    }

    /**
     * 当前为空时，清理--将对应方向上的square移入
     * @param {String} direction - 方向
     */

  }, {
    key: 'clearSpace',
    value: function clearSpace(direction) {
      if (this.value > 0) return;
      // 获取对应反向的有效块
      var target = this.getDirecAvailSquare(direction);
      if (target) {
        // 移入当前块
        this.setVal(target.value);
        target.setVal(0);
      }
    }

    /**
     * 判断指定方向上是否可以合并,合并只对当前方向上的第一个元素进行比较
     * 若可以合并，合并后返回被合并的对象
     * @param {String} direction - 方向
     */

  }, {
    key: 'combine',
    value: function combine(direction) {
      var target = this.getDirectionTarget(direction);
      if (target && target.value === this.value && this.value !== 0) {
        // 进行合并
        this.setVal(this.value * 2);
        target.setVal(0);
      }
    }
  }]);

  return Square;
}(_base2.default);

exports.default = Square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNxdWFyZS5qcyJdLCJuYW1lcyI6WyJTcXVhcmUiLCJvcHRpb25zIiwieCIsInkiLCJzZXRWYWxCYWNrIiwic2V0VmFsIiwiaW5pdCIsInZhbHVlIiwiaW5kZXgiLCJuIiwiTWF0aCIsImxvZyIsInBhcnNlSW50IiwiZGlyZWN0aW9uIiwibnVtIiwiZ2V0U3F1YXJlIiwiY2FsbCIsImJhc2UiLCJ0YXJnZXQiLCJnZXREaXJlY3Rpb25UYXJnZXQiLCJnZXREaXJlY0F2YWlsU3F1YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7OzsrZUFKQTs7Ozs7O0lBTXFCQSxNOzs7QUFDbkIsb0JBQTBCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUFBLGdIQUNsQkEsT0FEa0I7O0FBRXhCLFVBQUtDLENBQUwsR0FBU0QsUUFBUUMsQ0FBakI7QUFDQSxVQUFLQyxDQUFMLEdBQVNGLFFBQVFFLENBQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkgsUUFBUUksTUFBMUI7QUFDQSxVQUFLQyxJQUFMO0FBTHdCO0FBTXpCOztBQUVEOzs7Ozs7OzJCQUdPO0FBQ0w7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxLQUFLTCxDQUFMLEdBQVMsQ0FBVCxHQUFhLEtBQUtELENBQS9CO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MkJBSU9LLEssRUFBTztBQUNaO0FBQ0EsVUFBTUUsSUFBSUMsS0FBS0MsR0FBTCxDQUFTSixLQUFULElBQWtCRyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUE1QjtBQUNBLFVBQUlGLEtBQUtHLFNBQVNILENBQVQsQ0FBTCxJQUFvQkYsVUFBVSxDQUFsQyxFQUFxQztBQUNuQyxhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLSCxVQUFMLENBQWdCLEtBQUtJLEtBQXJCLEVBQTRCRCxLQUE1QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozt1Q0FNbUJNLFMsRUFBb0I7QUFBQSxVQUFUQyxHQUFTLHVFQUFILENBQUc7O0FBQ3JDLFVBQUlaLElBQUksS0FBS0EsQ0FBYjtBQUNBLFVBQUlDLElBQUksS0FBS0EsQ0FBYjtBQUNBLGNBQVFVLFNBQVI7QUFDRSxhQUFLLEtBQUw7QUFDRVYsY0FBSSxLQUFLQSxDQUFMLEdBQVNXLEdBQWI7QUFDQTtBQUNGLGFBQUssT0FBTDtBQUNFWixjQUFJLEtBQUtBLENBQUwsR0FBU1ksR0FBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VYLGNBQUksS0FBS0EsQ0FBTCxHQUFTVyxHQUFiO0FBQ0E7QUFDRixhQUFLLE1BQUw7QUFDRVosY0FBSSxLQUFLQSxDQUFMLEdBQVNZLEdBQWI7QUFDRjtBQUNFO0FBYko7QUFlQTtBQUNBLFVBQUlaLElBQUksQ0FBSixJQUFTQSxJQUFJLENBQWIsSUFBa0JDLElBQUksQ0FBdEIsSUFBMkJBLElBQUksQ0FBbkMsRUFBc0M7QUFDcEMsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQUtZLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixLQUFLQyxJQUF6QixFQUErQmYsQ0FBL0IsRUFBa0NDLENBQWxDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7d0NBS29CVSxTLEVBQVc7QUFDN0IsVUFBSUssU0FBUyxJQUFiO0FBQ0EsYUFBT0EsT0FBT1gsS0FBUCxLQUFpQixDQUFqQixJQUFzQlcsV0FBVyxJQUF4QyxFQUE4QztBQUM1Q0EsaUJBQVNBLE9BQU9DLGtCQUFQLENBQTBCTixTQUExQixDQUFUO0FBQ0EsWUFBSSxDQUFDSyxNQUFMLEVBQWEsT0FBTyxLQUFQO0FBQ2Q7QUFDRCxhQUFPQSxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVdMLFMsRUFBVztBQUNwQixVQUFJLEtBQUtOLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNwQjtBQUNBLFVBQU1XLFNBQVMsS0FBS0UsbUJBQUwsQ0FBeUJQLFNBQXpCLENBQWY7QUFDQSxVQUFJSyxNQUFKLEVBQVk7QUFDVjtBQUNBLGFBQUtiLE1BQUwsQ0FBWWEsT0FBT1gsS0FBbkI7QUFDQVcsZUFBT2IsTUFBUCxDQUFjLENBQWQ7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs0QkFLUVEsUyxFQUFXO0FBQ2pCLFVBQU1LLFNBQVMsS0FBS0Msa0JBQUwsQ0FBd0JOLFNBQXhCLENBQWY7QUFDQSxVQUFJSyxVQUFVQSxPQUFPWCxLQUFQLEtBQWlCLEtBQUtBLEtBQWhDLElBQXlDLEtBQUtBLEtBQUwsS0FBZSxDQUE1RCxFQUErRDtBQUM3RDtBQUNBLGFBQUtGLE1BQUwsQ0FBWSxLQUFLRSxLQUFMLEdBQWEsQ0FBekI7QUFDQVcsZUFBT2IsTUFBUCxDQUFjLENBQWQ7QUFDRDtBQUNGOzs7Ozs7a0JBdkdrQkwsTSIsImZpbGUiOiJzcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIDQqNOW4g+WxgFxuICog5bem5LiK5Li6MO+8jDAt5Y+z5LiL5Li6M++8jDNcbiAqL1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcXVhcmUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnggPSBvcHRpb25zLnhcbiAgICB0aGlzLnkgPSBvcHRpb25zLnlcbiAgICB0aGlzLnNldFZhbEJhY2sgPSBvcHRpb25zLnNldFZhbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyWXG4gICAqL1xuICBpbml0KCkge1xuICAgIC8vIDA656m655qEXG4gICAgdGhpcy52YWx1ZSA9IDBcbiAgICB0aGlzLmluZGV4ID0gdGhpcy55ICogNCArIHRoaXMueFxuICB9XG5cbiAgLyoqXG4gICAqIOiuvuWumuWAvFxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSDmlbDlgLxcbiAgICovXG4gIHNldFZhbCh2YWx1ZSkge1xuICAgIC8vIOagoemqjHZhbHVl5piv5LiN5pivMueahG7mrKHmlrlcbiAgICBjb25zdCBuID0gTWF0aC5sb2codmFsdWUpIC8gTWF0aC5sb2coMilcbiAgICBpZiAobiA9PSBwYXJzZUludChuKSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLnNldFZhbEJhY2sodGhpcy5pbmRleCwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluWvueW6lOaWueWQkeS4iueahOWFg+e0oHNxdWFyZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gLSDmraTmlrnlkJHkuIrnmoTnrKxu5Liq5YC8XG4gICAqIEByZXR1cm4ge0Jvb2xlYW58T2JqZWN0fSDov5Tlm57lhYPntKBcbiAgICovXG4gIGdldERpcmVjdGlvblRhcmdldChkaXJlY3Rpb24sIG51bSA9IDEpIHtcbiAgICBsZXQgeCA9IHRoaXMueFxuICAgIGxldCB5ID0gdGhpcy55XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHkgPSB0aGlzLnkgLSBudW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgeCA9IHRoaXMueCArIG51bVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgeSA9IHRoaXMueSArIG51bVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHggPSB0aGlzLnggLSBudW1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIC8vIOi2heWHuuiMg+WbtOi/lOWbnmZhbHNlXG4gICAgaWYgKHggPCAwIHx8IHggPiAzIHx8IHkgPCAwIHx8IHkgPiAzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3F1YXJlLmNhbGwodGhpcy5iYXNlLCB4LCB5KVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluW9k+WJjXNxdWFyZeeahGRpcmVjdGlvbuaWueWQkeS4iueahOacieaViOWAvOeahOWdl1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRXG4gICAqIEByZXR1cm4ge1NxdWFyZXxCb29sZWFufSDlr7nlupTnmoRzcXVhcmVcbiAgICovXG4gIGdldERpcmVjQXZhaWxTcXVhcmUoZGlyZWN0aW9uKSB7XG4gICAgbGV0IHRhcmdldCA9IHRoaXNcbiAgICB3aGlsZSAodGFyZ2V0LnZhbHVlID09PSAwIHx8IHRhcmdldCA9PT0gdGhpcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmdldERpcmVjdGlvblRhcmdldChkaXJlY3Rpb24pXG4gICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3kuLrnqbrml7bvvIzmuIXnkIYtLeWwhuWvueW6lOaWueWQkeS4iueahHNxdWFyZeenu+WFpVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRXG4gICAqL1xuICBjbGVhclNwYWNlKGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLnZhbHVlID4gMCkgcmV0dXJuXG4gICAgLy8g6I635Y+W5a+55bqU5Y+N5ZCR55qE5pyJ5pWI5Z2XXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5nZXREaXJlY0F2YWlsU3F1YXJlKGRpcmVjdGlvbilcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAvLyDnp7vlhaXlvZPliY3lnZdcbiAgICAgIHRoaXMuc2V0VmFsKHRhcmdldC52YWx1ZSlcbiAgICAgIHRhcmdldC5zZXRWYWwoMClcbiAgICB9XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDliKTmlq3mjIflrprmlrnlkJHkuIrmmK/lkKblj6/ku6XlkIjlubYs5ZCI5bm25Y+q5a+55b2T5YmN5pa55ZCR5LiK55qE56ys5LiA5Liq5YWD57Sg6L+b6KGM5q+U6L6DXG4gICAqIOiLpeWPr+S7peWQiOW5tu+8jOWQiOW5tuWQjui/lOWbnuiiq+WQiOW5tueahOWvueixoVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g5pa55ZCRXG4gICAqL1xuICBjb21iaW5lKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ2V0RGlyZWN0aW9uVGFyZ2V0KGRpcmVjdGlvbilcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC52YWx1ZSA9PT0gdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSAwKSB7XG4gICAgICAvLyDov5vooYzlkIjlubZcbiAgICAgIHRoaXMuc2V0VmFsKHRoaXMudmFsdWUgKiAyKVxuICAgICAgdGFyZ2V0LnNldFZhbCgwKVxuICAgIH1cbiAgfVxufSJdfQ==