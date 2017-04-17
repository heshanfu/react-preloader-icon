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

var _bezierEasing = require('bezier-easing');

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spread = (0, _bezierEasing2.default)(0.165, 0.84, 0.44, 1);
var fade = (0, _bezierEasing2.default)(0.3, 0.61, 0.355, 1);

var Puff = function (_React$Component) {
    _inherits(Puff, _React$Component);

    function Puff(props) {
        _classCallCheck(this, Puff);

        var _this = _possibleConstructorReturn(this, (Puff.__proto__ || Object.getPrototypeOf(Puff)).call(this, props));

        _this.stepper = new _stepperjs2.default({
            duration: props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Puff, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var c1 = this.c1,
                c2 = this.c2;


            this.stepper.on('update', function (n) {
                var n2 = n >= .5 ? n - .5 : n + .5;

                c1.setAttribute('r', spread(n) * 20);
                c2.setAttribute('r', spread(n2) * 20);
                c1.style.strokeOpacity = 1 - fade(n);
                c2.style.strokeOpacity = 1 - fade(n2);
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                this.c1.setAttribute('r', 0);
                this.c2.setAttribute('r', 0);
                this.c1.style.strokeOpacity = 0;
                this.c2.style.strokeOpacity = 0;
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
            var _this2 = this;

            var strokeWidth = this.props.strokeWidth;
            var viewBoxSize = 42 + strokeWidth;

            return _react2.default.createElement(
                'div',
                { className: 'preloader-icon__puff', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize,
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none', strokeWidth: strokeWidth },
                        _react2.default.createElement('circle', { ref: function ref(el) {
                                return _this2.c1 = el;
                            }, cx: '22', cy: '22', r: '0', style: { strokeOpacity: 0 } }),
                        _react2.default.createElement('circle', { ref: function ref(el) {
                                return _this2.c2 = el;
                            }, cx: '22', cy: '22', r: '0', style: { strokeOpacity: 0 } })
                    )
                )
            );
        }
    }]);

    return Puff;
}(_react2.default.Component);

exports.default = Puff;