'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 修复小程序的请求
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#000',
        navigationBarTitleText: '2048',
        navigationBarTextStyle: 'white',
        backgroundColor: '#f3f3f3'
      }
    };
    _this.use('requestfix');
    // 小程序的API都promise化
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      // 初始化全局变量
      this.initGlobalData();
      // 获取系统信息
      this.getSystemInfo();
      // 登录授权
      // this.userLogin()
    }
  }, {
    key: 'initGlobalData',
    value: function initGlobalData() {
      this.globalData = {
        system: {}
      };
    }
  }, {
    key: 'getSystemInfo',
    value: function getSystemInfo() {
      var _this2 = this;

      _wepy2.default.getSystemInfo().then(function (res) {
        _this2.globalData.system = res;
      });
    }
  }, {
    key: 'userLogin',
    value: function userLogin() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.login().then(function (res) {
          if (res.code) {
            // 接口
            resolve(res);
          } else {
            _wepy2.default.showModal({
              title: '登录失败',
              content: res.errMsg
            });
            reject(res);
          }
        }).catch(function (res) {
          _wepy2.default.showModal({
            title: '登录失败',
            content: res.errMsg
          });
          reject(res);
        });
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.getUserInfo().then(function (res) {
          // 接口
          resolve(res);
        }).catch(function (res) {
          reject(res);
        });
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1c2UiLCJpbml0R2xvYmFsRGF0YSIsImdldFN5c3RlbUluZm8iLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwidGhlbiIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJjb2RlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiZXJyTXNnIiwiY2F0Y2giLCJnZXRVc2VySW5mbyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWdCRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFiZkEsTUFhZSxHQWJOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLENBREE7QUFJUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE1BSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQyx5QkFBaUI7QUFMWDtBQUpELEtBYU07QUFHYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFMYTtBQU1kOzs7OytCQUVVO0FBQ1Q7QUFDQSxXQUFLQyxjQUFMO0FBQ0E7QUFDQSxXQUFLQyxhQUFMO0FBQ0E7QUFDQTtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0MsVUFBTCxHQUFrQjtBQUNoQkMsZ0JBQVE7QUFEUSxPQUFsQjtBQUdEOzs7b0NBRWU7QUFBQTs7QUFDZCxxQkFBS0YsYUFBTCxHQUFxQkcsSUFBckIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDLGVBQUtILFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCRSxHQUF6QjtBQUNELE9BRkQ7QUFHRDs7O2dDQUVXO0FBQ1YsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxLQUFMLEdBQWFMLElBQWIsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCLGNBQUlBLElBQUlLLElBQVIsRUFBYztBQUNaO0FBQ0FILG9CQUFRRixHQUFSO0FBQ0QsV0FIRCxNQUdPO0FBQ0wsMkJBQUtNLFNBQUwsQ0FBZTtBQUNiQyxxQkFBTyxNQURNO0FBRWJDLHVCQUFTUixJQUFJUztBQUZBLGFBQWY7QUFJQU4sbUJBQU9ILEdBQVA7QUFDRDtBQUNGLFNBWEQsRUFXR1UsS0FYSCxDQVdTLFVBQUNWLEdBQUQsRUFBUztBQUNoQix5QkFBS00sU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLE1BRE07QUFFYkMscUJBQVNSLElBQUlTO0FBRkEsV0FBZjtBQUlBTixpQkFBT0gsR0FBUDtBQUNELFNBakJEO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7OztrQ0FFYTtBQUNaLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS1EsV0FBTCxHQUFtQlosSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CO0FBQ0FFLGtCQUFRRixHQUFSO0FBQ0QsU0FIRCxFQUdHVSxLQUhILENBR1MsVUFBQ1YsR0FBRCxFQUFTO0FBQ2hCRyxpQkFBT0gsR0FBUDtBQUNELFNBTEQ7QUFNRCxPQVBNLENBQVA7QUFRRDs7OztFQTNFMEIsZUFBS1ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcyMDQ4JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YzZjNmMydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIC8vIOS/ruWkjeWwj+eoi+W6j+eahOivt+axglxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgLy8g5bCP56iL5bqP55qEQVBJ6YO9cHJvbWlzZeWMllxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIC8vIOWIneWni+WMluWFqOWxgOWPmOmHj1xyXG4gICAgdGhpcy5pbml0R2xvYmFsRGF0YSgpXHJcbiAgICAvLyDojrflj5bns7vnu5/kv6Hmga9cclxuICAgIHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcbiAgICAvLyDnmbvlvZXmjojmnYNcclxuICAgIC8vIHRoaXMudXNlckxvZ2luKClcclxuICB9XHJcblxyXG4gIGluaXRHbG9iYWxEYXRhKCkge1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhID0ge1xyXG4gICAgICBzeXN0ZW06IHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTeXN0ZW1JbmZvKCkge1xyXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS5zeXN0ZW0gPSByZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VyTG9naW4oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LmxvZ2luKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAvLyDmjqXlj6NcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgY29udGVudDogcmVzLmVyck1zZ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgICAgY29udGVudDogcmVzLmVyck1zZ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyDmjqXlj6NcclxuICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgfSkuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=