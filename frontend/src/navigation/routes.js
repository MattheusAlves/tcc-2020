import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

// https://heartbeat.fritz.ai/getting-started-with-react-native-and-expo-using-hooks-in-2020-fb466c25b04c

const Routes = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Main",
      },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title:"Login"
        // header: () => null,
      },
    },
  },

  // { headerTitleAlign: "center" },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#7D40E7",
      },
    },
  }
);

export default createAppContainer(Routes);
