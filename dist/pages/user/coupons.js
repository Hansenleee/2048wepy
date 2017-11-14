'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _lodash = require('./../../npm/lodash/lodash.js');

var _lodash2 = _interopRequireDefault(_lodash);

var _tabs = require('./../../components/tabs.js');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coupons = function (_wepy$page) {
  _inherits(Coupons, _wepy$page);

  function Coupons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Coupons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Coupons.__proto__ || Object.getPrototypeOf(Coupons)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '卡券包',
      backgroundColor: '#f3f3f3'
    }, _this.$props = { "tabs": { "v-bind:list.once": "coupons", "v-bind:active.sync": "activeIndex" } }, _this.$events = {}, _this.components = {
      tabs: _tabs2.default
    }, _this.data = {
      coupons: [{
        index: 0,
        name: '未使用',
        type: 'unuse',
        url: './coupons?type=unuse'
      }, {
        index: 1,
        name: '已使用',
        type: 'used',
        url: './coupons?type=used'
      }, {
        index: 2,
        name: '已作废',
        type: 'obsoleted',
        url: './coupons?type=obsoleted'
      }],
      activeIndex: 0,
      data: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Coupons, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var type = options.type;
      var result = _lodash2.default.find(this.coupons, function (coupon) {
        return coupon.type === type;
      });
      this.activeIndex = result ? result.index : 0;
      this.fetch();
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      // 获取数据
    }
  }]);

  return Coupons;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Coupons , 'pages/user/coupons'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbnMuanMiXSwibmFtZXMiOlsiQ291cG9ucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYnMiLCJkYXRhIiwiY291cG9ucyIsImluZGV4IiwibmFtZSIsInR5cGUiLCJ1cmwiLCJhY3RpdmVJbmRleCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJmaW5kIiwiY291cG9uIiwiZmV0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLHVCQUFpQjtBQUZWLEssUUFLVkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLG9CQUFtQixTQUFwQixFQUE4QixzQkFBcUIsYUFBbkQsRUFBUixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUDtBQUNFQyxlQUFPLENBRFQ7QUFFRUMsY0FBTSxLQUZSO0FBR0VDLGNBQU0sT0FIUjtBQUlFQyxhQUFLO0FBSlAsT0FETyxFQU1KO0FBQ0RILGVBQU8sQ0FETjtBQUVEQyxjQUFNLEtBRkw7QUFHREMsY0FBTSxNQUhMO0FBSURDLGFBQUs7QUFKSixPQU5JLEVBV0o7QUFDREgsZUFBTyxDQUROO0FBRURDLGNBQU0sS0FGTDtBQUdEQyxjQUFNLFdBSEw7QUFJREMsYUFBSztBQUpKLE9BWEksQ0FESjtBQW1CTEMsbUJBQWEsQ0FuQlI7QUFvQkxOLFlBQU07QUFwQkQsSzs7Ozs7MkJBdUJBTyxPLEVBQVM7QUFDZCxVQUFNSCxPQUFPRyxRQUFRSCxJQUFyQjtBQUNBLFVBQU1JLFNBQVMsaUJBQUVDLElBQUYsQ0FBTyxLQUFLUixPQUFaLEVBQXFCLFVBQUNTLE1BQUQsRUFBWTtBQUM5QyxlQUFPQSxPQUFPTixJQUFQLEtBQWdCQSxJQUF2QjtBQUNELE9BRmMsQ0FBZjtBQUdBLFdBQUtFLFdBQUwsR0FBbUJFLFNBQVNBLE9BQU9OLEtBQWhCLEdBQXdCLENBQTNDO0FBQ0EsV0FBS1MsS0FBTDtBQUNEOzs7NEJBRU87QUFDTjtBQUNEOzs7O0VBOUNrQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6ImNvdXBvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuICBpbXBvcnQgVGFicyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cG9ucyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNoeWIuOWMhScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmM2YzJ1xuICAgIH1cblxuICAgJHByb3BzID0ge1widGFic1wiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImNvdXBvbnNcIixcInYtYmluZDphY3RpdmUuc3luY1wiOlwiYWN0aXZlSW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgdGFiczogVGFic1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjb3Vwb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICBuYW1lOiAn5pyq5L2/55SoJyxcbiAgICAgICAgICB0eXBlOiAndW51c2UnLFxuICAgICAgICAgIHVybDogJy4vY291cG9ucz90eXBlPXVudXNlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgbmFtZTogJ+W3suS9v+eUqCcsXG4gICAgICAgICAgdHlwZTogJ3VzZWQnLFxuICAgICAgICAgIHVybDogJy4vY291cG9ucz90eXBlPXVzZWQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpbmRleDogMixcbiAgICAgICAgICBuYW1lOiAn5bey5L2c5bqfJyxcbiAgICAgICAgICB0eXBlOiAnb2Jzb2xldGVkJyxcbiAgICAgICAgICB1cmw6ICcuL2NvdXBvbnM/dHlwZT1vYnNvbGV0ZWQnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIGRhdGE6IFtdXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IF8uZmluZCh0aGlzLmNvdXBvbnMsIChjb3Vwb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvdXBvbi50eXBlID09PSB0eXBlXG4gICAgICB9KVxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHJlc3VsdCA/IHJlc3VsdC5pbmRleCA6IDBcbiAgICAgIHRoaXMuZmV0Y2goKVxuICAgIH1cblxuICAgIGZldGNoKCkge1xuICAgICAgLy8g6I635Y+W5pWw5o2uXG4gICAgfVxuICB9XG4iXX0=