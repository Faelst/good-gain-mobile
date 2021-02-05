import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import { useAuth } from "../contexts/auth";

const { Navigator, Screen } = createStackNavigator();

function App() {
  const { signed, user } = useAuth();

  // console.log("app render", { signed, user });

  if (!signed) return <PublicRoute />;
  else if (signed) return <PrivateRoute />;
  else return null;

  // return (
  //   <Navigator
  //     // initialRouteName={!signed ? "SignIn" : "Principal"}
  //     screenOptions={{ headerShown: false }}
  //   >
  //     {/* <>
  //           <Screen name="Principal" component={BottomTabs} />
  //           <Screen name="BannerDetail" component={BannerDetail} />
  //           <Screen name="Championship" component={Championship} />
  //           <Screen name="ChampionshipInfo" component={ChampionshipInfo} />
  //           <Screen name="SignIn" component={Login} />
  //           <Screen name="SignUp" component={SignUp} />
  //           <Screen name="ForgotPassword" component={ForgotPassword} />
  //           <Screen name="GamesAvailable2" component={GamesAvailable2} />
  //           <Screen name="QuickStart" component={QuickStart} />
  //           <Screen name="QuickStartPlay" component={QuickStartPlay} />
  //           <Screen name="Match" component={Match} />
  //           <Screen name="ProfileSettings" component={ProfileSettings} />
  //           <Screen name="ProfileSupport" component={ProfileSupport} />
  //           <Screen name="Terms" component={Terms} />
  //           <Screen name="Abount" component={Abount} />
  //           <Screen name="HowUse" component={HowUse} />
  //           <Screen name="NotificationCenter" component={NotificationCenter} />
  //           <Screen name="PutCredit" component={PutCredit} />
  //           <Screen name="Transfer" component={Transfer} />
  //           <Screen name="TransferBank" component={TransferBank} />
  //           <Screen name="Switching" component={Switching} />
  //           <Screen name="TransferReceived" component={TransferReceived} />
  //         </> */}
  //   </Navigator>
  // );
}

export default App;
