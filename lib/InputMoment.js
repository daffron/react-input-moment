'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('react-icons/lib/fa/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _clockO = require('react-icons/lib/fa/clock-o');

var _clockO2 = _interopRequireDefault(_clockO);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('./TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      tab: 0
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var tab = this.state.tab;
      var mom = this.props.moment;

      return _react2.default.createElement(
        'div',
        { className: 'im-input-moment' },
        _react2.default.createElement(
          'div',
          { className: 'options' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: (0, _classnames2.default)('im-btn', { 'is-active': tab === 0 }), onClick: this.handleClickTab.bind(this, 0) },
            _react2.default.createElement(_calendar2.default, {
              style: {
                fontSize: '18px',
                marginRight: '5px',
                verticalAlign: 'middle'
              }
            }),
            _react2.default.createElement(
              'span',
              { style: { verticalAlign: 'middle' } },
              'Date'
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: (0, _classnames2.default)('im-btn', { 'is-active': tab === 1 }), onClick: this.handleClickTab.bind(this, 1) },
            _react2.default.createElement(_clockO2.default, {
              style: {
                fontSize: '18px',
                marginRight: '5px',
                verticalAlign: 'middle'
              }
            }),
            _react2.default.createElement(
              'span',
              { style: { verticalAlign: 'middle' } },
              'Time'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('tab-component', { 'is-active': tab === 0 }) },
          _react2.default.createElement(_DatePicker2.default, {
            moment: mom,
            locale: this.props.locale,
            onChange: this.props.onChange,
            taken: this.props.taken || []
          })
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('tab-component', { 'is-active': tab === 1 }) },
          _react2.default.createElement(_TimePicker2.default, {
            moment: mom,
            showSeconds: this.props.showSeconds,
            locale: this.props.locale,
            onChange: this.props.onChange
          })
        )
      );
    }
  }, {
    key: 'handleClickTab',
    value: function handleClickTab(tab, e) {
      e.preventDefault();
      this.setState({ tab: tab });
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;