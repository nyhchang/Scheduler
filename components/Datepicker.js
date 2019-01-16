import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import {View, Text, Picker} from 'react-native';

export default class GeneralDatepicker extends Component {
  constructor(props) {
    super(props);
    let todaysDate = new Date();
    let today = todaysDate.getFullYear() + '-' + ('0' + (todaysDate.getMonth() + 1)).slice(-2) + '-' + ('0' + todaysDate.getDate()).slice(-2);
    let time = '00:00'
    this.state = { date : today, time : time, duration: ''}
  }

  render() {
    return(
      <View styles={{flex: 1}}>
        <View styles={{flex: 1, flexDirection: 'row'}}>
          <Text style={{
            fontSize: 15,
            color: 'white'
          }}>Date:</Text>
          <DatePicker
            customStyles={{dateText:{
              color: 'white'
              }
            }}
            date={this.state.date}
            mode='date'
            placeholder='select a date'
            format='YYYY-MM-DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={(newDate) => this.setState({date: newDate})}
            />
        </View>
        <View styles={{flex: 1, flexDirection: 'row'}}>
          <Text style={{
            fontSize: 15,
            color: 'white'
          }}>
            Time:
          </Text>
          <DatePicker
            customStyles={{dateText:{
                color: 'white'
              }
            }}
            date={this.state.time}
            mode='time'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={(newTime) => this.setState({time: newTime})}
            />
        </View>
        <View styles={{flex: 1, flexDirection: 'row'}}>
          <Text style={{
            fontSize: 15,
            color: 'white'
          }}>
            Duration:
          </Text>
          <Picker
              style={{width: 200, color: 'white'}}
              selectedValue={this.state.duration}
              onValueChange={(itemValue,itemIndex) => this.setState({duration: itemValue})}>
            <Picker.Item label='1 Hour' value={'1 Hour'} />
            <Picker.Item label='2 Hours' value={'2 Hours'} />
            <Picker.Item label='3 Hours' value={'3 Hours'} />
            <Picker.Item label='4 Hours' value={'4 Hours'} />
          </Picker>
        </View>
      </View>
    )
  }
}
