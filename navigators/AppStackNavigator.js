import {createAppContainer, createStackNavigator} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Welcome: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppStackNavigator);