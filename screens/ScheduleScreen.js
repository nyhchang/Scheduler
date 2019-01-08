import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";
import { StackActions, NavigationActions } from 'react-navigation';
import GeneralDatepicker from '../components/Datepicker';

export default class ScheduleScreen extends React.Component {
  onButtonPress() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Welcome'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Text>Choose a date</Text>
        <GeneralDatepicker />
      </View>
    )
  }
}