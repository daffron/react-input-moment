require('../src/less/base.less');
require('./app.less');

import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import {InputMoment, BigInputMoment, DatePicker, TimePicker} from '../src/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';

    this.state = {
      inputMoment: moment(),
      bigInputMoment: moment(),
      datePickerMoment: moment(),
      timePickerMoment: moment(),
      showSeconds: true,
      locale: 'en',
      size: 'medium',
      taken: ['07/19/2017', '07/29/2017', '07/06/2017']
    };
  }

  render() {
    let {inputMoment, bigInputMoment, datePickerMoment, timePickerMoment, showSeconds, locale, size} = this.state;
    let wrapperClass = 'wrapper ' + size;

    return (
      <div className="app">
        <div className="header">
          React Input Moment
        </div>

        <input
          type="button"
          className="header-button"
          value="GitHub"
          onClick={() => window.location = 'https://github.com/wayofthefuture/react-input-moment'}
        />
        <input
          type="button"
          className="header-button"
          value="NPM"
          onClick={() => window.location = 'https://www.npmjs.com/package/react-input-moment'}
        />
        <br/>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={showSeconds}
              onChange={this.handleShowSeconds.bind(this)}
              />
            Show Seconds
          </label>
          <br/>
          <label>
            Locale:&nbsp;
            <select value={locale} onChange={this.handleLocale.bind(this)}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
            </select>
          </label>
          <br/>

          <input
            type="button"
            className="header-button"
            value="Small"
            onClick={() => this.setState({size: 'small'})}
          />
          <input
            type="button"
            className="header-button"
            value="Medium"
            onClick={() => this.setState({size: 'medium'})}
          />
          <input
            type="button"
            className="header-button"
            value="Large"
            onClick={() => this.setState({size: 'large'})}
          />
        </div>

        <div className="header">InputMoment</div>
        <input
          className="output"
          type="text"
          value={inputMoment.format('llll')}
          readOnly
        />
        <div className={wrapperClass}>
          <InputMoment
            moment={inputMoment}
            locale={locale}
            showSeconds={showSeconds}
            onChange={mom => this.setState({inputMoment: mom})}
            taken={this.state.taken}
          />
        </div>
        <br/>

        <div className="header">BigInputMoment</div>
        <input
          className="output"
          type="text"
          value={bigInputMoment.format('llll')}
          readOnly
        />
    
        <br/>

        <div className="header">DatePicker</div>
        <input
          className="output"
          type="text"
          value={datePickerMoment.format('llll')}
          readOnly
        />
        <div className={wrapperClass}>
          
        </div>
        <br/>

        <div className="header">TimePicker</div>
        <input
          className="output"
          type="text"
          value={timePickerMoment.format('llll')}
          readOnly
        />
        <div className={wrapperClass}>
          <TimePicker
            moment={timePickerMoment}
            locale={locale}
            showSeconds={showSeconds}
            onChange={mom => this.setState({timePickerMoment: mom})}
          />
        </div>
      </div>
    );
  }

  handleShowSeconds(e) {
    this.setState({showSeconds: e.target.checked});
  }

  handleLocale(e) {
    this.setState({locale: e.target.value});
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

//testing
window.moment = moment;
