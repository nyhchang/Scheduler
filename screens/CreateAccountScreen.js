import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";
import { StackActions, NavigationActions } from 'react-navigation';

export default class CreateAccountScreen extends React.Component {
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
          <Button
              title={'Submit'}
              buttonStyle={{
                width: 180,
                height: 40,
                padding: 20
              }}
              onPress={ () => Alert.alert(
                  'Submitted',
                  'You are registered',
                  [
                    {
                      text:'OK', onPress: () => {this.onButtonPress()}
                    }
                  ]
              )}
          />
        </View>
    )
  }
}