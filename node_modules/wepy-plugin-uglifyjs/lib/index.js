'use strict';

exports.__esModule = true;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _uglifyJs = require('uglify-js');

var _uglifyJs2 = _interopRequireDefault(_uglifyJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        var def = {
            filter: new RegExp('\.(js)$'),
            config: {
                compress: { warnings: false }
            }
        };

        this.setting = Object.assign({}, def, c);
    }

    _class.prototype.apply = function apply(op) {

        var setting = this.setting;

        if (!setting.filter.test(op.file)) {
            op.next();
        } else {
            op.output && op.output({
                action: '压缩',
                file: op.file
            });
            this.setting.config.fromString = true;
            var rst = _uglifyJs2.default.minify(op.code, this.setting.config);
            var k = void 0;
            for (k in rst) {
                op[k] = rst[k];
            }op.next();
        }
    };

    return _class;
}();

exports.default = _class;