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

function App() {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={signed ? "SignIn" : "Principal"}
        screenOptions={{ headerShown: false }}
      >
        {!signed && (
          <>
            <Screen name="SignIn" component={Login} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}

        {signed && (
          <>
            <Screen name="Principal" component={BottomTabs} />
            <Screen name="BannerDetail" component={BannerDetail} />
            <Screen name="GamesAvailable2" component={GamesAvailable2} />
            <Screen name="QuickStart" component={QuickStart} />
            <Screen name="QuickStartPlay" component={QuickStartPlay} />
            <Screen name="Championship" component={Championship} />
            <Screen name="ChampionshipInfo" component={ChampionshipInfo} />
            <Screen name="Match" component={Match} />
            <Screen name="ProfileSettings" component={ProfileSettings} />
            <Screen name="SignIn" component={Login} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
            <Screen name="GamesAvailable2" component={GamesAvailable2} />
            <Screen name="QuickStart" component={QuickStart} />
            <Screen name="QuickStartPlay" component={QuickStartPlay} />
            <Screen name="Match" component={Match} />
            <Screen name="ProfileSettings" component={ProfileSettings} />
            <Screen name="ProfileSupport" component={ProfileSupport} />
            <Screen name="Terms" component={Terms} />
            <Screen name="Abount" component={Abount} />
            <Screen name="HowUse" component={HowUse} />
            <Screen name="NotificationCenter" component={NotificationCenter} />
            <Screen name="PutCredit" component={PutCredit} />
            <Screen name="Transfer" component={Transfer} />
            <Screen name="TransferBank" component={TransferBank} />
            <Screen name="Switching" component={Switching} />
            <Screen name="TransferReceived" component={TransferReceived} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
