'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = require('./styles');

var _Oval = require('./loaders/Oval');

var _Oval2 = _interopRequireDefault(_Oval);

var _TailSpin = require('./loaders/TailSpin');

var _TailSpin2 = _interopRequireDefault(_TailSpin);

var _Spinning = require('./loaders/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Puff = require('./loaders/Puff');

var _Puff2 = _interopRequireDefault(_Puff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @type {object}
 * @property {string} OVAL
 * @property {string} TAIL_SPIN
 * @property {string} SPINNING
 * @property {string} PUFF
 */
var ICON_TYPE = {
    OVAL: 'oval',
    TAIL_SPIN: 'tailSpin',
    SPINNING: 'spinning',
    PUFF: 'puff'
};

var PreloaderIcon = function (_React$Component) {
    _inherits(PreloaderIcon, _React$Component);

    function PreloaderIcon() {
        _classCallCheck(this, PreloaderIcon);

        return _possibleConstructorReturn(this, (PreloaderIcon.__proto__ || Object.getPrototypeOf(PreloaderIcon)).apply(this, arguments));
    }

    _createClass(PreloaderIcon, [{
        key: 'render',


        /**
         * @returns {ReactElement|XML}
         */


        /**
         * @property {?string} className
         * @property {?string} type
         * @property {?number} size
         * @property {?string} unit
         * @property {?number} strokeWidth
         * @property {?string} strokeColor
         * @property {?number} duration
         */
        value: function render() {
            var className = 'preloader-icon ' + this.props.className;
            var size = '' + this.props.size + this.props.unit;
            var style = (0, _objectAssign2.default)({ width: size, height: size }, this.props.style);
            var _props = this.props,
                strokeWidth = _props.strokeWidth,
                strokeColor = _props.strokeColor,
                duration = _props.duration;

            var loader = this.createLoader(this.props.type, { strokeWidth: strokeWidth, strokeColor: strokeColor, duration: duration });

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'preloader-icon__inner', style: _styles.inner },
                    _react2.default.createElement(
                        'em',
                        { className: 'preloader-icon__title', style: _styles.title },
                        'Loading...'
                    ),
                    loader
                )
            );
        }

        /**
         * @param {string} type
         * @param {object} options
         * @returns {ReactElement|XML|null}
         */


        /**
         * @property {string} className
         * @property {number} size
         * @property {number} strokeWidth
         * @property {string} strokeColor
         * @property {number} duration
         */

    }, {
        key: 'createLoader',
        value: function createLoader(type, options) {
            switch (type) {
                case ICON_TYPE.OVAL:
                    return _react2.default.createElement(_Oval2.default, options);
                case ICON_TYPE.TAIL_SPIN:
                    return _react2.default.createElement(_TailSpin2.default, options);
                case ICON_TYPE.SPINNING:
                    return _react2.default.createElement(_Spinning2.default, options);
                case ICON_TYPE.PUFF:
                    return _react2.default.createElement(_Puff2.default, options);
                default:
                    return null;
            }
        }
    }]);

    return PreloaderIcon;
}(_react2.default.Component);

PreloaderIcon.propTypes = {
    className: _react.PropTypes.string,
    type: _react.PropTypes.string,
    size: _react.PropTypes.number,
    unit: _react.PropTypes.string,
    strokeWidth: _react.PropTypes.number,
    strokeColor: _react.PropTypes.string,
    duration: _react.PropTypes.number
};
PreloaderIcon.defaultProps = {
    className: '',
    type: ICON_TYPE.OVAL,
    size: 32,
    unit: 'px',
    strokeWidth: 3,
    strokeColor: '#f0ad4e',
    duration: 800
};
exports.default = PreloaderIcon;
exports.ICON_TYPE = ICON_TYPE;