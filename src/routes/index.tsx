import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import BannerDetail from "../pages/BannerDetail";
import GGPanel from "../pages/GGPanel";

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>

        <Screen name="SignIn" component={Login} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Home" component={Home} />
        <Screen name="BannerDetail" component={BannerDetail} />
        <Screen name="GGPanel" component={GGPanel} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
