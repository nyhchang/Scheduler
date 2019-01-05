import React from 'react';
import { Text, View } from 'react-native';
import {Button, Input} from "react-native-elements";

export default class CreateAccountScreen extends React.Component {
  render() {
    return (
        <View>
          <Text>First name </Text>
          <Input
              placeholder={'Please enter your first name'}
          />
          <Text>Last Name</Text>
          <Input
              placeholder={'Please enter your last name'}
          />
          <Text>Username</Text>
          <Input
            placeholder={'Please enter a username'}
          />
          <Text>Email</Text>
          <Input
            placeholder={'Please enter an email'}
          />
          <Text>Password</Text>
          <Input
              placeholder={'Please enter a password'}
          />
          <Text>Confirm Password</Text>
          <Input
              placeholder={'Please confirm your password'}
          />
        </View>
    )
  }
}