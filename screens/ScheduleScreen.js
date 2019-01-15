import React from 'react';
import {Alert, View, Modal, Image, StyleSheet, Picker} from 'react-native';
import {Button, Header, Input, Text} from "react-native-elements";
import GeneralDatepicker from '../components/Datepicker';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#25347A',
    padding: 20
  },
  Titles: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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
  },
  Button: {
    flex: 1,
    backgroundColor: '#B38325',
    width: 300,
    height: 30,
    padding: 20,
    alignSelf: 'center'
  }

});


export default class ScheduleScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {TestPlatform: '', Channels: '', DPS: '', Analog: '',  isModalVisible: false}
  }

  setModalVisible = () => {
    this.setState({isModalVisible: true});
  }

  setModalInvisible = () => {
    this.setState({isModalVisible: false});
    this.props.navigation.navigate('Welcome')
  }

  onConfirmTime() {
    Alert.alert(
        'Confirmed',
        'A confirmation was sent to your email address. Thank you',
        [
          {text: 'OK', onPress: () => this.setModalInvisible()}
        ])
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
            <Text h4>Choose a date and time</Text>
            <GeneralDatepicker/>
            <Text h4>Resource required</Text>
{/*            Test platform: 93K, PinScale, SmartScale, UFlex, iFlex, J750
             *Channels: 384, 512, 640, 768, 924, 1280
             * DPS: DPS32, DPS64, DPS128, UHC4
              * Analog: MCA, MCB, MCE
              * Handler: NS6040, NS8040, XP9510
              * Operator: Operator, Engineer, None*/}
            <View style={styles.Titles}>
              <Text>Test Platform:</Text>
              <Picker
                  title='Test Platform'
                  style={{width: 200}}
                  selectedValue={this.state.TestPlatform}
                  onValueChange={(itemValue,itemIndex) => this.setState({TestPlatform: itemValue})}>
                  <Picker.Item label='93k' value={'93k'} />
                  <Picker.Item label='93k' value={'93k'} />
                  <Picker.Item label='93k' value={'93k'} />
              </Picker>
            </View>
            <Input
                title='Channels'
                placeceholder='Change to pulldown'
            />
            <Input
                title='DPS'
                placeholder='Change to pulldown'
            />
            <Input
                title='Analog'
                placeholder='Change to pulldown'
            />
            <Input
                title='Handler'
                placeholder='Change to pulldown'
            />
            <Input
                title='Operator'
                placeholder='Change to pulldown'
            />
            <Button
                title='Submit'
                onPress={() => this.setModalVisible()}
            />
            <Modal
                animationType='fade'
                transparent={false}
                visible={this.state.isModalVisible}
                onRequestClose={() => Alert.alert(
                    'Going back',
                    'Were going back'
                )}
            >
{/*               PS1 TO PS18, 93K6 and 93K10 add start time and end time to confirmation*/}
              <View style={styles.background}>
                <Text h4 style={{color: 'white'}}>That time is not available. Here are some recommendations. </Text>
                <Button
                    title='4:15 PM'
                    onPress={() => this.onConfirmTime()}
                    style={styles.Button}
                />
                <Button
                    title='4:45 PM'
                    onPress={() => this.onConfirmTime()}
                    style={styles.Button}
                />
                <Button
                    title='5:15 PM'
                    onPress={() => this.onConfirmTime()}
                    style={styles.Button}
                />
                <Button
                    title='5:30 PM'
                    onPress={() => this.onConfirmTime()}
                    style={styles.Button}
                />
                <Button
                    title='5:45 PM'
                    onPress={() => this.onConfirmTime()}
                    style={styles.Button}
                />
              </View>
            </Modal>
          </View>
        </View>
    )
  }
  }