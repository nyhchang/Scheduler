import React from 'react';
import {Alert, Image, StyleSheet, View, KeyboardAvoidingView} from 'react-native';
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
    justifyContent: 'space-evenly',
    flexDirection: 'column'
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
    padding: 20,
    marginBottom: 20
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
          <View>
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
          </View>
            <KeyboardAvoidingView style={styles.background} behavior='padding'>
              <View style={styles.Inputs}>
                <Text style={{color: 'white', alignItems: 'flex-start', fontSize: 18}}> Please insert account info and click submit to proceed </Text>
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
              </View>

              <Button
                title={'Submit'}
                buttonStyle={styles.CreateAccountButton}
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
          </KeyboardAvoidingView>
        </View>
    )
  }
}