import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Welcome</Text>
          <Text>Here are some buttons to take you places</Text>
          <Button
              title={'Schedule an Appointment'}
              onPress={() => {this.props.navigation.navigate('Appointment')}}
          />
          <Button
              title={'My appointments'}
              onPress={() => {this.props.navigation.navigate('Appointment')}}
          />
          <Button
              title={'My account'}
              onPress={() => {this.props.navigation.navigate('Account')}}
          />
          <Button
              title={'Logout'}
              onPress={() => {this.props.navigation.navigate('Login')}}
          />
        </View>
    );
  }
}
