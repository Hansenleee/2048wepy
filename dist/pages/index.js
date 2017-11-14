'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../utils/model/base.js');

var _base2 = _interopRequireDefault(_base);

var _square = require('./../utils/model/square.js');

var _square2 = _interopRequireDefault(_square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var backgroundColor = {
  0: '#cac0b5',
  2: '#eee5de',
  4: '#ede1cb',
  8: '#f3b17d',
  16: '#f79667',
  32: '#f67e5c',
  64: '#f75f38',
  128: '#f4d76f',
  256: '#f2d04b',
  512: '#e5c12b',
  1024: '#e3ba14',
  2048: '#efc32f',
  9999: '#ff3830'
};

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      backgroundColor: '#000000'
    }, _this.data = {
      list: []
    }, _this.computed = {}, _this.methods = {
      /**
       * 触摸开始事件
       * @param {Object} e - 鼠标实例
       */
      handleTouchStart: function handleTouchStart(e) {
        var touches = e.touches[0];
        this._touchStartX = touches.clientX;
        this._touchStartY = touches.clientY;
        this._hasMove = false;
      },

      /**
       * 触摸移动事件
       * @param {Object} e - 鼠标实例
       */
      handleTouchMove: function handleTouchMove(e) {
        if (this._hasMove) return;
        var touches = e.touches[0];
        var x = touches.clientX;
        var y = touches.clientY;
        var differX = Math.abs(x - this._touchStartX);
        var differY = Math.abs(y - this._touchStartY);
        if (differX >= differY && differX > 50) {
          this.move(x > this._touchStartX ? 'right' : 'left');
        } else if (differX < differY && differY > 50) {
          this.move(y > this._touchStartY ? 'bottom' : 'top');
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'move',

    /**
     * 触发移动
     * @param {String} direction - 方向
     */
    value: function move(direction) {
      if (this._base) {
        this._base.move(direction);
        this._hasMove = true;
      }
    }

    /**
     * 获取数组
     */

  }, {
    key: 'getArray',
    value: function getArray(num) {
      var str = '0';
      str = str.repeat(16);
      var list = str.split('');
      list.forEach(function (item, index) {
        list[index] = {
          value: parseInt(item),
          background: backgroundColor[0],
          color: '#766e66'
        };
      });
      return list;
    }

    /**
     * 设置值
     * @param {Number} index - 设置的序号
     * @param {Number} val - 设置的值
     */

  }, {
    key: 'setVal',
    value: function setVal(index, val) {
      var list = this.list;
      if (index < list.length) {
        var item = list[index];
        item.value = val;
        item.background = backgroundColor[val];
        item.color = val > 4 ? '#fff' : '#766e66';
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.list = this.getArray(16);
      this._base = new _base2.default();
      this._squares = [];
      for (var index = 0; index < 16; index++) {
        var x = index % 4;
        var y = (index - x) / 4;
        this._squares.push(new _square2.default({
          x: x,
          y: y,
          setVal: this.setVal.bind(this)
        }));
      }
      this._base.init(this._squares);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvciIsIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoZXMiLCJfdG91Y2hTdGFydFgiLCJjbGllbnRYIiwiX3RvdWNoU3RhcnRZIiwiY2xpZW50WSIsIl9oYXNNb3ZlIiwiaGFuZGxlVG91Y2hNb3ZlIiwieCIsInkiLCJkaWZmZXJYIiwiTWF0aCIsImFicyIsImRpZmZlclkiLCJtb3ZlIiwiZGlyZWN0aW9uIiwiX2Jhc2UiLCJudW0iLCJzdHIiLCJyZXBlYXQiLCJzcGxpdCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJ2YWx1ZSIsInBhcnNlSW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwidmFsIiwibGVuZ3RoIiwiZ2V0QXJyYXkiLCJfc3F1YXJlcyIsInB1c2giLCJzZXRWYWwiLCJiaW5kIiwiaW5pdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCO0FBQ3RCLEtBQUcsU0FEbUI7QUFFdEIsS0FBRyxTQUZtQjtBQUd0QixLQUFHLFNBSG1CO0FBSXRCLEtBQUcsU0FKbUI7QUFLdEIsTUFBSSxTQUxrQjtBQU10QixNQUFJLFNBTmtCO0FBT3RCLE1BQUksU0FQa0I7QUFRdEIsT0FBSyxTQVJpQjtBQVN0QixPQUFLLFNBVGlCO0FBVXRCLE9BQUssU0FWaUI7QUFXdEIsUUFBTSxTQVhnQjtBQVl0QixRQUFNLFNBWmdCO0FBYXRCLFFBQU07QUFiZ0IsQ0FBeEI7O0lBZ0JxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEYsdUJBQWlCO0FBRFYsSyxRQUlURyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFJUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1I7Ozs7QUFJQUMsc0JBTFEs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b0IsU0FBWCxDQUFuQjtBQUtEO0FBQ0QsV0FBS2xCLEtBQUwsQ0FBV21CLElBQVgsQ0FBZ0IsS0FBS0osUUFBckI7QUFDRDs7OztFQWxHZ0MsZUFBS0ssSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlscy9tb2RlbC9iYXNlJ1xuICBpbXBvcnQgU3F1YXJlIGZyb20gJy4uL3V0aWxzL21vZGVsL3NxdWFyZSdcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgMDogJyNjYWMwYjUnLFxuICAgIDI6ICcjZWVlNWRlJyxcbiAgICA0OiAnI2VkZTFjYicsXG4gICAgODogJyNmM2IxN2QnLFxuICAgIDE2OiAnI2Y3OTY2NycsXG4gICAgMzI6ICcjZjY3ZTVjJyxcbiAgICA2NDogJyNmNzVmMzgnLFxuICAgIDEyODogJyNmNGQ3NmYnLFxuICAgIDI1NjogJyNmMmQwNGInLFxuICAgIDUxMjogJyNlNWMxMmInLFxuICAgIDEwMjQ6ICcjZTNiYTE0JyxcbiAgICAyMDQ4OiAnI2VmYzMyZicsXG4gICAgOTk5OTogJyNmZjM4MzAnXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiDop6bmkbjlvIDlp4vkuovku7ZcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIC0g6byg5qCH5a6e5L6LXG4gICAgICAgKi9cbiAgICAgIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuICAgICAgICBjb25zdCB0b3VjaGVzID0gZS50b3VjaGVzWzBdXG4gICAgICAgIHRoaXMuX3RvdWNoU3RhcnRYID0gdG91Y2hlcy5jbGllbnRYXG4gICAgICAgIHRoaXMuX3RvdWNoU3RhcnRZID0gdG91Y2hlcy5jbGllbnRZXG4gICAgICAgIHRoaXMuX2hhc01vdmUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog6Kem5pG456e75Yqo5LqL5Lu2XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSAtIOm8oOagh+WunuS+i1xuICAgICAgICovXG4gICAgICBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAodGhpcy5faGFzTW92ZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHRvdWNoZXMgPSBlLnRvdWNoZXNbMF1cbiAgICAgICAgY29uc3QgeCA9IHRvdWNoZXMuY2xpZW50WFxuICAgICAgICBjb25zdCB5ID0gdG91Y2hlcy5jbGllbnRZXG4gICAgICAgIGNvbnN0IGRpZmZlclggPSBNYXRoLmFicyh4IC0gdGhpcy5fdG91Y2hTdGFydFgpXG4gICAgICAgIGNvbnN0IGRpZmZlclkgPSBNYXRoLmFicyh5IC0gdGhpcy5fdG91Y2hTdGFydFkpXG4gICAgICAgIGlmIChkaWZmZXJYID49IGRpZmZlclkgJiYgZGlmZmVyWCA+IDUwKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKHggPiB0aGlzLl90b3VjaFN0YXJ0WCA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICAgICAgIH0gZWxzZSBpZiAoZGlmZmVyWCA8IGRpZmZlclkgJiYgZGlmZmVyWSA+IDUwKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKHkgPiB0aGlzLl90b3VjaFN0YXJ0WSA/ICdib3R0b20nIDogJ3RvcCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5Y+R56e75YqoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIOaWueWQkVxuICAgICAqL1xuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5fYmFzZSkge1xuICAgICAgICB0aGlzLl9iYXNlLm1vdmUoZGlyZWN0aW9uKVxuICAgICAgICB0aGlzLl9oYXNNb3ZlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaVsOe7hFxuICAgICAqL1xuICAgIGdldEFycmF5KG51bSkge1xuICAgICAgbGV0IHN0ciA9ICcwJ1xuICAgICAgc3RyID0gc3RyLnJlcGVhdCgxNilcbiAgICAgIGNvbnN0IGxpc3QgPSBzdHIuc3BsaXQoJycpXG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGxpc3RbaW5kZXhdID0ge1xuICAgICAgICAgIHZhbHVlOiBwYXJzZUludChpdGVtKSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3JbMF0sXG4gICAgICAgICAgY29sb3I6ICcjNzY2ZTY2J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lgLxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSDorr7nva7nmoTluo/lj7dcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsIC0g6K6+572u55qE5YC8XG4gICAgICovXG4gICAgc2V0VmFsKGluZGV4LCB2YWwpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmxpc3RcbiAgICAgIGlmIChpbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2luZGV4XVxuICAgICAgICBpdGVtLnZhbHVlID0gdmFsXG4gICAgICAgIGl0ZW0uYmFja2dyb3VuZCA9IGJhY2tncm91bmRDb2xvclt2YWxdXG4gICAgICAgIGl0ZW0uY29sb3IgPSB2YWwgPiA0ID8gJyNmZmYnIDogJyM3NjZlNjYnXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0QXJyYXkoMTYpXG4gICAgICB0aGlzLl9iYXNlID0gbmV3IEJhc2UoKVxuICAgICAgdGhpcy5fc3F1YXJlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeCA9IGluZGV4ICUgNFxuICAgICAgICBjb25zdCB5ID0gKGluZGV4IC0geCkgLyA0XG4gICAgICAgIHRoaXMuX3NxdWFyZXMucHVzaChuZXcgU3F1YXJlKHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgc2V0VmFsOiB0aGlzLnNldFZhbC5iaW5kKHRoaXMpXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgdGhpcy5fYmFzZS5pbml0KHRoaXMuX3NxdWFyZXMpXG4gICAgfVxuICB9XG4iXX0=