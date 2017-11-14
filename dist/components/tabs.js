'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_wepy$component) {
  _inherits(Tabs, _wepy$component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        default: []
      },
      active: {
        type: [Number, String],
        default: 0
      }
    }, _this.computed = {
      length: function length() {
        return this.list.length;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tabs;
}(_wepy2.default.component);

exports.default = Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuanMiXSwibmFtZXMiOlsiVGFicyIsInByb3BzIiwibGlzdCIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJhY3RpdmUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb21wdXRlZCIsImxlbmd0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsS0FERjtBQUVKQyxpQkFBUztBQUZMLE9BREE7QUFLTkMsY0FBUTtBQUNOSCxjQUFNLENBQUNJLE1BQUQsRUFBU0MsTUFBVCxDQURBO0FBRU5ILGlCQUFTO0FBRkg7QUFMRixLLFFBV1JJLFEsR0FBVztBQUNUQyxZQURTLG9CQUNBO0FBQ1AsZUFBTyxLQUFLUixJQUFMLENBQVVRLE1BQWpCO0FBQ0Q7QUFIUSxLOzs7O0VBWnFCLGVBQUtDLFM7O2tCQUFsQlgsSSIsImZpbGUiOiJ0YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGhcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==