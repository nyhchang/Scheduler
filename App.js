import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {nameText:'Please enter your name'}

  }
  render() {

    return (
  <View>
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'Title', style: { color: '#fff'} }}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
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
        />
      </View>
  </View>

    );
  }
}


