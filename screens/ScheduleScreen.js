import React from 'react';
import {Alert, View, Modal, Image, StyleSheet, Picker} from 'react-native';
import {Button, Header, Text} from "react-native-elements";
import GeneralDatepicker from '../components/Datepicker';
import {NavigationActions, StackActions} from 'react-navigation';

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
    alignItems: 'center'
  },
  Resources: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
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
    this.state = { TestPlatform: '', Channels: '', DPS: '', Analog: '', Handler: '', Operator: '', isModalVisible: false
    }
  }

  setModalVisible = () => {
    this.setState({isModalVisible: true});
  }

  setModalInvisible = () => {
    this.setState({isModalVisible: false});
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Welcome'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  onConfirmTime(date, timeStart, timeEnd, tester) {
    Alert.alert(
        'Confirmed',
        'Your appointment will be on ' + date + ' from ' + timeStart + ' to ' + timeEnd + ' on the ' + tester + '.',
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
            <Text h4 style={{color: 'white'}}>Choose a date and time</Text>
            <GeneralDatepicker/>
            <Text h4 style={{color: 'white'}}>Resource required</Text>
            <View style={styles.Resources}>
              <View style={styles.Titles}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white',
                    alignContent: 'flex-end'
                  }}>
                    Test Platform:
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Picker
                      style={{width: 200, color: 'white'}}
                      selectedValue={this.state.TestPlatform}
                      onValueChange={(itemValue,itemIndex) => this.setState({TestPlatform: itemValue})}>
                    <Picker.Item label='93k' value={'93k'} />
                    <Picker.Item label='PinScale' value={'PinScale'} />
                    <Picker.Item label='SmartScale' value={'SmartScale'} />
                    <Picker.Item label='UFlex' value={'UFlex'} />
                    <Picker.Item label='iFlex' value={'iFlex'} />
                    <Picker.Item label='J750' value={'J750'} />
                  </Picker>
                </View>
              </View>
              <View style={styles.Titles}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white',
                    alignContent: 'flex-end'
                  }}>
                    Channels:
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Picker
                      style={{width: 200, color: 'white'}}
                      selectedValue={this.state.Channels}
                      onValueChange={(itemValue,itemIndex) => this.setState({Channels: itemValue})}>
                    <Picker.Item label='384' value={'384'} />
                    <Picker.Item label='512' value={'512'} />
                    <Picker.Item label='640' value={'640'} />
                    <Picker.Item label='768' value={'768'} />
                    <Picker.Item label='1024' value={'1024'} />
                    <Picker.Item label='1280' value={'1280'} />
                  </Picker>
                </View>
              </View>
              <View style={styles.Titles}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white'
                  }}>
                    DPS:
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Picker
                      style={{width: 200, color: 'white'}}
                      selectedValue={this.state.DPS}
                      onValueChange={(itemValue,itemIndex) => this.setState({DPS: itemValue})}>
                    <Picker.Item label='DPS32' value={'DPS32'} />
                    <Picker.Item label='DPS64' value={'DPS64'} />
                    <Picker.Item label='DPS128' value={'DPS128'} />
                    <Picker.Item label='UHC4' value={'UHC4'} />
                  </Picker>
                </View>
              </View>
              <View style={styles.Titles}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white'
                  }}>
                    Analog:
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Picker
                      style={{width: 200, color: 'white'}}
                      selectedValue={this.state.Analog}
                      onValueChange={(itemValue,itemIndex) => this.setState({Analog: itemValue})}>
                    <Picker.Item label='MCA' value={'MCA'} />
                    <Picker.Item label='MCB' value={'MCB'} />
                    <Picker.Item label='MCE' value={'MCE'} />
                  </Picker>
                </View>
              </View>
              <View style={styles.Titles}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white'
                  }}>
                    Handler:
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Picker
                      style={{width: 200, color: 'white'}}
                      selectedValue={this.state.Handler}
                      onValueChange={(itemValue,itemIndex) => this.setState({Handler: itemValue})}>
                    <Picker.Item label='NS6040' value={'NS6040'} />
                    <Picker.Item label='NS8040' value={'NS8040'} />
                    <Picker.Item label='XP9510' value={'XP9510'} />
                  </Picker>
                </View>
              </View>
              <View style={styles.Titles}>
                <Text style={{
                  fontSize: 15,
                  color: 'white'
                }}>
                  Operator:
                </Text>
                <Picker
                    style={{width: 200, color: 'white'}}
                    selectedValue={this.state.Operator}
                    onValueChange={(itemValue,itemIndex) => this.setState({Operator: itemValue})}>
                  <Picker.Item label='Operator' value='Operator' />
                  <Picker.Item label='Engineer' value='Engineer' />
                  <Picker.Item label='None' value='None' />
                </Picker>
              </View>
            </View>
            <Button
                title='Submit'
                buttonStyle={{
                  backgroundColor: '#B38325',
                  width: 300,
                  height: 30,
                  padding: 20,
                  alignSelf: 'center'
                }}
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
              <View style={styles.background}>
                <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                  <Text h4 style={{color: 'white'}}>That time is not available. Here are some recommendations. </Text>
                  <Button
                      title='01/22/2019: 4:15 PM to 6:15 PM on the PS2'
                      onPress={() => this.onConfirmTime('01/22/2019', '4:15 PM', '6:15 PM', 'PS2')}
                      buttonStyle={styles.Button}
                  />
                  <Button
                      title='01/22/2019: 4:45 PM to 6:45 PM on the PS6'
                      onPress={() => this.onConfirmTime('01/22/2019', '4:45 PM', '6:45 PM', 'PS6')}
                      buttonStyle={styles.Button}
                  />
                  <Button
                      title='01/22/2019: 5:15 PM to 7:15 PM on the 93k6'
                      onPress={() => this.onConfirmTime('01/22/2019', '5:15 PM', '7:15 PM', '93k6')}
                      buttonStyle={styles.Button}
                  />
                  <Button
                      title='01/22/2019: 5:15 PM to 7:15 PM on the 93k10'
                      onPress={() => this.onConfirmTime('01/22/2019', '5:15 PM', '7:15 PM', '93k10')}
                      buttonStyle={styles.Button}
                  />
                  <Button
                      title='01/22/2019: 5:15 PM to 7:15 PM on the PS1'
                      onPress={() => this.onConfirmTime('01/22/2019', '5:15 PM', '7:15 PM', 'PS1')}
                      buttonStyle={styles.Button}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </View>
    )
  }
  }