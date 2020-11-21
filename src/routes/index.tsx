import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import BannerDetail from "../pages/BannerDetail";
import BottomTabs from "./BottomNavigator";
import GamesAvailable2 from '../pages/GamesAvailable2'
import QuickStart from '../pages/QuickStart'
import Play from '../pages/Play'

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="SignIn" component={Login} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Principal" component={BottomTabs} />
        <Screen name="BannerDetail" component={BannerDetail} />
        <Screen name="GamesAvailable2" component={GamesAvailable2} />
        <Screen name="QuickStart" component={QuickStart} />
        <Screen name="Play" component={Play} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
