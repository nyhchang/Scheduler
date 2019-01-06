import {createAppContainer, createStackNavigator} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import AccountManagementScreen from "../screens/AccountManagementScreen";
import AppointmentScreen from "../screens/AppointmentScreen";

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Welcome: {
    screen: HomeScreen,
    headerLeft: null
  },
  CreateAccount: {
    screen: CreateAccountScreen
  },
  Appointment: {
    screen: AppointmentScreen
  },
  Account: {
    screen: AccountManagementScreen
  }
});

export default createAppContainer(AppStackNavigator);