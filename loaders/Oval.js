'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stepperjs = require('stepperjs');

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = require('stepperjs/dist/easings/linear');

var _linear2 = _interopRequireDefault(_linear);

var _pfx = require('../utils/pfx');

var _pfx2 = _interopRequireDefault(_pfx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Oval = function (_React$Component) {
    _inherits(Oval, _React$Component);

    function Oval(props) {
        _classCallCheck(this, Oval);

        var _this = _possibleConstructorReturn(this, (Oval.__proto__ || Object.getPrototypeOf(Oval)).call(this, props));

        _this.stepper = new _stepperjs2.default({
            duration: _this.props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Oval, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var transform = (0, _pfx2.default)('transform').property;
            var rotate = (0, _pfx2.default)('perspective').support ? 'rotateZ' : 'rotate';

            this.stepper.on('update', function (progress) {
                _this2.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                this.stepper.option('duration', this.props.duration);
                this.stepper.stop();
                this.stepper.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stepper.stop();
            this.stepper.off();
            this.stepper = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var strokeWidth = this.props.strokeWidth;
            var translateSize = strokeWidth / 2 + 1;
            var viewBoxSize = 38 + strokeWidth;

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.target = el;
                    }, className: 'preloader-icon__oval', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize,
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(' + translateSize + ' ' + translateSize + ')', strokeWidth: strokeWidth },
                            _react2.default.createElement('circle', { stroke: this.props.strokeColor, strokeOpacity: '.5', cx: '18', cy: '18', r: '18' }),
                            _react2.default.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18' })
                        )
                    )
                )
            );
        }
    }]);

    return Oval;
}(_react2.default.Component);

exports.default = Oval;