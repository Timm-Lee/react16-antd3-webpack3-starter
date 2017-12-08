import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

import {DatePicker, Input} from 'antd';


const {MonthPicker, RangePicker, WeekPicker} = DatePicker;


class App extends Component {
  onDateChange = (date, dateString) => {
    console.log(date.format('YYYY'));
    console.log(dateString);
  };

  render() {
    return (
      <div>
        <h1>Hello World Again</h1>
        <DatePicker onChange={this.onDateChange}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
