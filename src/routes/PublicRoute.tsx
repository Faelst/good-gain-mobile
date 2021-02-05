import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import BannerDetail from "../pages/BannerDetail";
import BottomTabs from "./BottomNavigator";
import GamesAvailable2 from "../pages/GamesAvailable2";
import QuickStart from "../pages/QuickStart";
import QuickStartPlay from "../pages/QuickStartPlay";
import Match from "../pages/Match";
import ProfileSettings from "../pages/ProfileSettings";
import Championship from "../pages/Championship";
import ChampionshipInfo from "../pages/ChampionshipInfo";
import ProfileSupport from "../pages/ProfileSupport";
import Terms from "../pages/Terms";
import Abount from "../pages/Abount";
import HowUse from "../pages/HowUse";
import NotificationCenter from "../pages/NotificationCenter";
import PutCredit from "../pages/PutCredit";
import Transfer from "../pages/Transfer";
import TransferBank from "../pages/TransferBank";
import TransferReceived from "../pages/TransferReceived";
import Switching from "../pages/Switching";
import { useAuth } from "../contexts/auth";

const { Navigator, Screen } = createStackNavigator();

function PublicRoute() {
  const { signed, user } = useAuth();

  console.log("PublicRoute render", { signed, user });

  return (
    <Navigator
      // initialRouteName={!signed ? "SignIn" : "Principal"}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SignIn" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}

export default PublicRoute;
