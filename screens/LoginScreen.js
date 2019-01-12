import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'

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
  LoginButton: {
    backgroundColor: '#B38325',
    width: 130,
    height: 30,
    padding: 20
  },
  CreateAccountButton: {
    backgroundColor: '#B38325',
    width: 130,
    height: 30,
    padding: 20
  }

})

export default class HomeScreen extends React.Component {
  render() {

    return (
        <View style={styles.background}>
          <View style={styles.Inputs}>
            <Input
                placeholder={'Username'}
                leftIcon={{ type: 'font-awesome', name: 'user'}}
            />
            <Input
                placeholder={'Password'}
                leftIcon={{ type: 'font-awesome', name: 'key'}}
            />
          </View>
          <View style={styles.Buttons}>
            <Button
                title={'Log in'}
                onPress={() => this.props.navigation.navigate('Welcome')}
                buttonStyle={styles.LoginButton}
            />
            <Button
                title={'Create Account'}
                onPress={() => this.props.navigation.navigate('CreateAccount')}
                buttonStyle={styles.CreateAccountButton}
            />
          </View>
        </View>

    )
  }
}
