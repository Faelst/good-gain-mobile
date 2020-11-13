import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import BannerDetail from "../pages/BannerDetail";
import GGPanel from "../pages/GGPanel";
import GamesAvailable from "../pages/GamesAvailable";
import BottomTabs from "./BottomNavigator";

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
        <Screen name="GGPanel" component={GGPanel} />
        <Screen name="GamesAvailable" component={GamesAvailable} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
