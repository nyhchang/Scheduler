import React from 'react';
import { Text, View } from 'react-native';
import {Button, Input} from "react-native-elements";

export default class HomeScreen extends React.Component {
  render() {

    return (
        <View>
          <View>
            <Text>{'Username'}</Text>
            <Input
                placeholder={'Please enter your username'}
            />
            <Text>{'Password'}</Text>
            <Input
                placeholder={'Please enter your password'}
            />
          </View>
          <View
              style={{padding: 10}}>
            <Button
                title={'Log in'}
                buttonStyle={{
                  width: 180,
                  height: 40,
                  padding: 20
                }}
                onPress={() => this.props.navigation.navigate('Welcome')}
            />
          </View>
        </View>

    )
  }
}
