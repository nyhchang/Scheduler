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
          />
          <Button
              title={'My appointments'}
          />
          <Button
              title={'My account'}
          />
          <Button
              title={'Logout'}
          />
        </View>
    );
  }
}
