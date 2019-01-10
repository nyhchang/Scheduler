import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";
import { StackActions, NavigationActions } from 'react-navigation';

export default class AppointmentScreen extends React.Component {
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
          <Text>Scheduled Screen Under Construction</Text>
        </View>
    )
  }
}