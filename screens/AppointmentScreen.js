import React from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem } from "react-native-elements";

const appointmentDates = [
  {
    Date: '2/20/2019',
    Time: '2:30 PM'
  },
  {
    Date: '3/1/2019',
    Time: '9:00 AM'
  },
  {
    Date: '3/13/2019',
    Time: '11:00 AM'
  }
]

export default class AppointmentScreen extends React.Component {


  render() {
    return (
      <View>
        <Text>Upcoming Appointments</Text>
        <Card>{
          appointmentDates.map((appointments, i) => {
            return (
            <View key={i}>
              <ListItem
                title={`${appointments.Date} at ${appointments.Time}`}
                />

            </View>
        )})
        }
        </Card>
      </View>
    )
  }
}