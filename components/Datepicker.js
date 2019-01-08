import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text } from 'react-native';

export default class GeneralDatepicker extends Component {
  constructor(props) {
    super(props);
    let todaysDate = new Date();
    let today = todaysDate.getFullYear() + '-' + ('0' + (todaysDate.getMonth() + 1)).slice(-2) + '-' + ('0' + todaysDate.getDate()).slice(-2);
    let time = '00:00'
    this.state = { date : today, time : time}
  }

  render() {
    return(
      <View>
      <Text>Date:</Text>
      <DatePicker
        date={this.state.date}
        mode='date'
        placeholder='select a date'
        format='YYYY-MM-DD'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        />
      <Text>Time:</Text>
      <DatePicker
        time={this.state.time}
        mode='time'
        placeholder='select a time'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        />
      </View>
    )
  }
}
