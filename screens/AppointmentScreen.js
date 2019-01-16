import React from 'react';
import {Image, StyleSheet, View, Alert} from 'react-native';
import {Header, ListItem, Text} from "react-native-elements";

const appointmentDates = [
  {
    Date: '2/20/2019',
    Time: '2:30 PM',
    End: '5:30 PM',
    Tester: 'PS3'
  },
  {
    Date: '3/1/2019',
    Time: '9:00 AM',
    End: '11:00 AM',
    Tester: 'PS8'
  },
  {
    Date: '3/13/2019',
    Time: '11:00 AM',
    End: '1:30 PM',
    Tester: '93k10'
  }
]

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

});

export default class AppointmentScreen extends React.Component {

  onCancelApprove() {
    Alert.alert(
        'Appointment cancelled',
        'Your appointment has been cancelled.',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate('Appointment')}
        ]
    )
  }

  onPressDelete() {
    Alert.alert(
        'Cancel',
        'Would you like to cancel this appointment?',
        [
          {text: 'Yes', onPress: () => this.onCancelApprove()},
          {text: 'No', style: 'cancel'}
        ]
    )
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

          <Text h4 style={{color: 'white'}}>Upcoming Appointments</Text>
          <View style={{backgroundColor: '#25347A'}}>{
            appointmentDates.map((appointments, i) => {
              return (
                <ListItem
                  title={`${appointments.Date} from ${appointments.Time} to ${appointments.End} on ${appointments.Tester}`}
                  containerStyle={{ borderBottomColor: 'white', backgroundColor: '#25347A', borderWidth: 1 }}
                  titleStyle={{ color: 'white' }}
                  onLongPress={() => {this.onPressDelete()}}
                  key={i}
                  />
          )})
          }
          </View>
        </View>
      </View>
    )
  }
}