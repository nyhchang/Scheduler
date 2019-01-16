import React from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Text} from "react-native-elements";
import { StackActions, NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#25347A',
    padding: 20
  },
  Inputs: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  Buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  CreateAccountButton: {
    backgroundColor: '#B38325',
    width: 130,
    height: 30,
    padding: 20
  }

});

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
      <View style={{flex: 1}}>
        <Header
            centerComponent={<Image
                source={require('../assets/ISE_Logo_Only.png')}
                resizeMode={'center'}
                style={{
                  height: 50,
                }}
            />}
            backgroundColor={'#324084'}
        />
        <View style={styles.background}>
          <View style={styles.background}>
            <Text style={{color: 'white', fontSize: 18}}> Please insert account info and click submit to edit account information </Text>
            <View style={styles.Inputs}>
              <Input
                  placeholder={'First Name'}
                  leftIcon={{ type: 'font-awesome', name: 'user'}}
              />
              <Input
                  placeholder={'Last Name'}
                  leftIcon={{ type: 'font-awesome', name: 'user'}}
              />
              <Input
                  placeholder={'Username'}
                  leftIcon={{ type: 'font-awesome', name: 'user'}}
              />
              <Input
                  placeholder={'Email'}
                  leftIcon={{ type: 'font-awesome', name: 'at'}}
              />
              <Input
                  placeholder={'Password'}
                  leftIcon={{ type: 'font-awesome', name: 'key'}}
              />
              <Input
                  placeholder={'Confirm Password'}
                  leftIcon={{ type: 'font-awesome', name: 'key'}}
              />
            </View>
            <Button
                title={'Submit'}
                buttonStyle={styles.CreateAccountButton}
                onPress={ () => Alert.alert(
                    'Submitted',
                    'Your account information has been changed',
                    [
                      {
                        text:'OK', onPress: () => {this.onButtonPress()}
                      }
                    ]
                )}
            />
          </View>
        </View>
      </View>
    )
  }
}