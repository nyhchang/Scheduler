import React from 'react';
import {Alert, Text, View, Modal} from 'react-native';
import {Button, Input} from "react-native-elements";
import GeneralDatepicker from '../components/Datepicker';

export default class ScheduleScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toNumberA: '', toNumberB: '', toNumberC: '', toNumberD: '', isModalVisible: false}
  }

  setModalVisible = () => {
    this.setState({isModalVisible: true});
  }

  setModalInvisible = () => {
    this.setState({isModalVisible: false});
    this.props.navigation.navigate('Scheduled')
  }

  onConfirmTime() {
    Alert.alert(
        'Confirmed',
        'A confirmation was sent to your email address. Thank you',
        [
          {text: 'OK', onPress: () => this.setModalInvisible()}
        ])
  }

  numbersOnlyA(text) {
    this.setState({
          toNumberA: text.replace(/[^0-9]/g, ''),
        }
    )
  }

  numbersOnlyB(text) {
    this.setState({
          toNumberB: text.replace(/[^0-9]/g, ''),
        }
    )
  }

  numbersOnlyC(text) {
    this.setState({
          toNumberC: text.replace(/[^0-9]/g, ''),
        }
    )
  }

  numbersOnlyD(text) {
    this.setState({
          toNumberD: text.replace(/[^0-9]/g, ''),
        }
    )
  }


  render() {
    return (
        <View>
          <Text>Choose a good appointment time</Text>
          <GeneralDatepicker/>
          <Text>Some required parameters for testers</Text>
          <Input
              placeholder='Resource count A'
              keyboardType='numeric'
              onChangeText={(text) => this.numbersOnlyA(text)}
              value={this.state.toNumberA}
          />
          <Input
              placeholder='Resource count B'
              keyboardType='numeric'
              onChangeText={(text) => this.numbersOnlyB(text)}
              value={this.state.toNumberB}
          />
          <Input
              placeholder='Resource count C'
              keyboardType='numeric'
              onChangeText={(text) => this.numbersOnlyC(text)}
              value={this.state.toNumberC}
          />
          <Input
              placeholder='Resource count D'
              keyboardType='numeric'
              onChangeText={(text) => this.numbersOnlyD(text)}
              value={this.state.toNumberD}
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
            <View>
              <Text>That time is not available. Here are some recommendations. </Text>
              <Button
                  title='4:15 PM'
                  onPress={() => this.onConfirmTime()}
              />
              <Button
                  title='4:45 PM'
                  onPress={() => this.onConfirmTime()}
              />
              <Button
                  title='5:15 PM'
                  onPress={() => this.onConfirmTime()}
              />
              <Button
                  title='5:30 PM'
                  onPress={() => this.onConfirmTime()}
              />
              <Button
                  title='5:45 PM'
                  onPress={() => this.onConfirmTime()}
              />
            </View>
          </Modal>
        </View>
    )
  }
  }