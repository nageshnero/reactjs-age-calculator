import React, { Component } from 'react';
import './App.css';
import DateForm from './DateForm';
import Congrats from './Congrats';

class App extends Component {
  state = {
    error: '',
    year_age: null,
    month_age: null,
    day_age: null,
    congrats: false
  }

  addDate = (date) => {
      var mdate = date.toString();
      var yearThen = parseInt(mdate.substring(0, 4), 10);
      var monthThen = parseInt(mdate.substring(5, 7), 10);
      var dayThen = parseInt(mdate.substring(8, 10), 10);

      var today = new Date();
      var birthday = new Date(yearThen, monthThen - 1, dayThen);

      var differenceInMilisecond = today.valueOf() - birthday.valueOf();

      var year_age = Math.floor(differenceInMilisecond / 31536000000);
      var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
      var month_age = Math.floor(day_age / 30);
      day_age = day_age % 30;

      this.setState({
        date: date,
        year_age: year_age,
        month_age: month_age,
        day_age: day_age,
        congrats: true
      });
  }

  render() {
    return (
      <div className="container">
        <DateForm addDate={this.addDate} />
        {
          this.state.congrats ?
            <div className="fade age-state">
              <Congrats date={this.state} />
            </div>
            :
            <div></div>
        }
      </div>
    );
  }
}

export default App;
