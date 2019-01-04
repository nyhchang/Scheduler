import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {nameText:'Please enter your name'}

  }
  render() {

    return (

      <View>
      <FormLabel>{'Name'}</FormLabel>
        <FormInput
          onChangeText={(nameText) => this.setState({nameText})}
            value={'Please enter your name'}
        />
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>
      </View>
    );
  }
}


