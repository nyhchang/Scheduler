import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Header, Text} from 'react-native-elements';
import {NavigationActions, StackActions} from 'react-navigation';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#25347A',
    padding: 20,
  },
  Intro: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  ButtonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  Buttons: {
    flex: 1,
    backgroundColor: '#B38325',
    width: 300,
    height: 30,
    padding: 20,
    alignSelf: 'center'
  }

})

export default class HomeScreen extends React.Component {
  onButtonPress() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Login'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <View style={styles.Background}>
            <View style={styles.Intro}>
              <Image
                  source={require('../assets/ISE_Transparent.png')}
                  style={{
                    resizeMode: 'center',
                    width: 350,
                    height: 100,
                    alignSelf: 'center'
                  }}
              />
              <Text h4 style={{color: 'white', alignSelf: 'center'}}>Here are some buttons to take you places</Text>
            </View>
            <View style={styles.ButtonView}>
              <Button
                  title={'Schedule an Appointment'}
                  onPress={() => {this.props.navigation.navigate('Schedule')}}
                  buttonStyle={styles.Buttons}
              />
              <Button
                  title={'My appointments'}
                  onPress={() => {this.props.navigation.navigate('Appointment')}}
                  buttonStyle={styles.Buttons}
              />
              <Button
                  title={'My account'}
                  onPress={() => {this.props.navigation.navigate('Account')}}
                  buttonStyle={styles.Buttons}
              />
              <Button
                  title={'Logout'}
                  onPress={() => {this.onButtonPress()}}
                  buttonStyle={styles.Buttons}
              />
            </View>
          </View>
        </View>
    );
  }
}
