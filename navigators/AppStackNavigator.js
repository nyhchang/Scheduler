import {createAppContainer, createStackNavigator} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";

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
  }
});

export default createAppContainer(AppStackNavigator);