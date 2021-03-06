'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputSlider = require('react-input-slider');

var _reactInputSlider2 = _interopRequireDefault(_reactInputSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var mom = this.props.moment;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('im-time-picker', this.props.className) },
        _react2.default.createElement(
          'div',
          { className: 'time-picker-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'showtime' },
            _react2.default.createElement(
              'span',
              { className: 'time' },
              mom.format('HH')
            ),
            _react2.default.createElement(
              'span',
              { className: 'separator' },
              ':'
            ),
            _react2.default.createElement(
              'span',
              { className: 'time' },
              mom.format('mm')
            ),
            this.props.showSeconds && _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'span',
                { className: 'separator' },
                ':'
              ),
              _react2.default.createElement(
                'span',
                { className: 'time' },
                mom.format('ss')
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sliders' },
            _react2.default.createElement(
              'div',
              { className: 'time-text' },
              'Hours:'
            ),
            _react2.default.createElement(_reactInputSlider2.default, {
              className: 'im-slider',
              xmin: 0,
              xmax: 23,
              x: mom.hour(),
              onChange: this.changeHours.bind(this)
            }),
            _react2.default.createElement(
              'div',
              { className: 'time-text' },
              'Minutes:'
            ),
            _react2.default.createElement(_reactInputSlider2.default, {
              className: 'im-slider',
              xmin: 0,
              xmax: 30,
              x: mom.minute(),
              onChange: this.changeMinutes.bind(this)
            }),
            this.props.showSeconds && _react2.default.createElement(
              'div',
              { className: 'time-text' },
              'Seconds:'
            ),
            this.props.showSeconds && _react2.default.createElement(_reactInputSlider2.default, {
              className: 'im-slider',
              xmin: 0,
              xmax: 59,
              x: mom.second(),
              onChange: this.changeSeconds.bind(this)
            })
          )
        )
      );
    }
  }, {
    key: 'changeHours',
    value: function changeHours(pos) {
      var mom = this.props.moment.clone();
      mom.hours(parseInt(pos.x, 10));
      this.props.onChange(mom);
    }
  }, {
    key: 'changeMinutes',
    value: function changeMinutes(pos) {
      var mom = this.props.moment.clone();
      var minutes = parseInt(pos.x, 10);
      if (minutes <= 15) {
        minutes = 0;
      } else if (minutes > 15 && minutes < 44) {
        minutes = 30;
      } else {
        minutes = 0;
      }
      mom.minutes(minutes);
      this.props.onChange(mom);
    }
  }, {
    key: 'changeSeconds',
    value: function changeSeconds(pos) {
      var mom = this.props.moment.clone();
      mom.seconds(parseInt(pos.x, 10));
      this.props.onChange(mom);
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;