'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _animateData = require('./../utils/animateData.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_wepy$component) {
  _inherits(Circle, _wepy$component);

  function Circle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Circle.__proto__ || Object.getPrototypeOf(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      index: [String, Object],
      openIndex: Number,
      handleOpen: Function
    }, _this.computed = {
      pieClass: function pieClass() {
        var addClass = this.openIndex === +this.index ? ' is-pie-focused' : '';
        return 'pie-container' + addClass;
      },
      style: function style() {
        var position = _animateData.gBlockPosition[this.index - 1];
        return 'left:' + position.left + 'px;bottom:' + position.bottom + 'px;';
      },
      lineStyle: function lineStyle() {
        var line = _animateData.gBlockPosition[this.index - 1].line;
        if (!line) {
          return '';
        }
        return 'width:' + line.width + 'rpx;transform:rotate(' + line.rotate + 'deg)';
      }
    }, _this.methods = {
      handleOpen: function handleOpen() {
        this.$emit('handleOpen', this.index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Circle;
}(_wepy2.default.component);

exports.default = Circle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLmpzIl0sIm5hbWVzIjpbIkNpcmNsZSIsInByb3BzIiwiaW5kZXgiLCJTdHJpbmciLCJPYmplY3QiLCJvcGVuSW5kZXgiLCJOdW1iZXIiLCJoYW5kbGVPcGVuIiwiRnVuY3Rpb24iLCJjb21wdXRlZCIsInBpZUNsYXNzIiwiYWRkQ2xhc3MiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsImxpbmVTdHlsZSIsImxpbmUiLCJ3aWR0aCIsInJvdGF0ZSIsIm1ldGhvZHMiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU8sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREQ7QUFFTkMsaUJBQVdDLE1BRkw7QUFHTkMsa0JBQVlDO0FBSE4sSyxRQU1SQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRTtBQUNULFlBQU1DLFdBQVcsS0FBS04sU0FBTCxLQUFtQixDQUFDLEtBQUtILEtBQXpCLEdBQWlDLGlCQUFqQyxHQUFxRCxFQUF0RTtBQUNBLGVBQU8sa0JBQWtCUyxRQUF6QjtBQUNELE9BSlE7QUFLVEMsV0FMUyxtQkFLRDtBQUNOLFlBQU1DLFdBQVcsNEJBQWUsS0FBS1gsS0FBTCxHQUFhLENBQTVCLENBQWpCO0FBQ0EseUJBQWVXLFNBQVNDLElBQXhCLGtCQUF5Q0QsU0FBU0UsTUFBbEQ7QUFDRCxPQVJRO0FBU1RDLGVBVFMsdUJBU0c7QUFDVixZQUFNQyxPQUFPLDRCQUFlLEtBQUtmLEtBQUwsR0FBYSxDQUE1QixFQUErQmUsSUFBNUM7QUFDQSxZQUFJLENBQUNBLElBQUwsRUFBVztBQUNULGlCQUFPLEVBQVA7QUFDRDtBQUNELDBCQUFnQkEsS0FBS0MsS0FBckIsNkJBQWtERCxLQUFLRSxNQUF2RDtBQUNEO0FBZlEsSyxRQWtCWEMsTyxHQUFVO0FBQ1JiLGdCQURRLHdCQUNLO0FBQ1gsYUFBS2MsS0FBTCxDQUFXLFlBQVgsRUFBeUIsS0FBS25CLEtBQTlCO0FBQ0Q7QUFITyxLOzs7O0VBekJ3QixlQUFLb0IsUzs7a0JBQXBCdEIsTSIsImZpbGUiOiJibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBnQmxvY2tQb3NpdGlvbiB9IGZyb20gJy4uL3V0aWxzL2FuaW1hdGVEYXRhLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGluZGV4OiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgb3BlbkluZGV4OiBOdW1iZXIsXG4gICAgICBoYW5kbGVPcGVuOiBGdW5jdGlvblxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcGllQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGFkZENsYXNzID0gdGhpcy5vcGVuSW5kZXggPT09ICt0aGlzLmluZGV4ID8gJyBpcy1waWUtZm9jdXNlZCcgOiAnJ1xuICAgICAgICByZXR1cm4gJ3BpZS1jb250YWluZXInICsgYWRkQ2xhc3NcbiAgICAgIH0sXG4gICAgICBzdHlsZSgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnQmxvY2tQb3NpdGlvblt0aGlzLmluZGV4IC0gMV1cbiAgICAgICAgcmV0dXJuIGBsZWZ0OiR7cG9zaXRpb24ubGVmdH1weDtib3R0b206JHtwb3NpdGlvbi5ib3R0b219cHg7YFxuICAgICAgfSxcbiAgICAgIGxpbmVTdHlsZSgpIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGdCbG9ja1Bvc2l0aW9uW3RoaXMuaW5kZXggLSAxXS5saW5lXG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgd2lkdGg6JHtsaW5lLndpZHRofXJweDt0cmFuc2Zvcm06cm90YXRlKCR7bGluZS5yb3RhdGV9ZGVnKWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlT3BlbigpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlT3BlbicsIHRoaXMuaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=