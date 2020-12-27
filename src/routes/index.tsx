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
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
