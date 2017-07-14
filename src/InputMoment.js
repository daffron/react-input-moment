import cx from 'classnames';
import React from 'react';
import DatePickerIcon from 'react-icons/lib/fa/calendar';
import ClockIcon from 'react-icons/lib/fa/clock-o';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
      taken:['08/08/2017']
    };
  }

  render() {
    let tab = this.state.tab;
    let mom = this.props.moment;

    return (
      <div className="im-input-moment">
        <div className="options">
          <button type="button" className={cx('im-btn', {'is-active': tab === 0})} onClick={this.handleClickTab.bind(this, 0)}>
            <DatePickerIcon
              style={{
                fontSize: '18px',
                marginRight: '5px',
                verticalAlign: 'middle',
              }}
            />
            <span style={{verticalAlign: 'middle'}}>Date</span>
          </button>
          <button type="button" className={cx('im-btn', {'is-active': tab === 1})} onClick={this.handleClickTab.bind(this, 1)}>
            <ClockIcon
              style={{
                fontSize: '18px',
                marginRight: '5px',
                verticalAlign: 'middle',
              }}
            />
            <span style={{verticalAlign: 'middle'}}>Time</span>
          </button>
        </div>

        <div className={cx('tab-component', {'is-active': tab === 0})}>
          <DatePicker
            moment={mom}
            locale={this.props.locale}
            onChange={this.props.onChange}
            taken={this.props.taken}
          />
        </div>
        <div className={cx('tab-component', {'is-active': tab === 1})}>
          <TimePicker
            moment={mom}
            showSeconds={this.props.showSeconds}
            locale={this.props.locale}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }

  handleClickTab(tab, e) {
    e.preventDefault();
    this.setState({tab});
  }
}
