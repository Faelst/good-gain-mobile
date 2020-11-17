import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/Home";
import GGPanelScreen from "../pages/GGPanel";
import GamesAvailable from "../pages/GamesAvailable";

import ic_home from "../images/icons/ic_home.png";
import ic_ggpanel from "../images/icons/ic_ggpanel.png";
import ic_gamesavailable from "../images/icons/ic_gamesavailable.png";

const icons: any = {
  home: ic_home,
  ggpanel: ic_ggpanel,
  gamesavailable: ic_gamesavailable,
};
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = route.name.toLowerCase();

          // if (route.name === "Home") {
          //   iconName = focused
          //     ? "ios-information-circle"
          //     : "ios-information-circle-outline";
          // } else if (route.name === "Settings") {
          //   iconName = focused ? "ios-list-box" : "ios-list";
          // }

          // You can return any component that you like here!
          return (
            <Image
              resizeMode="contain"
              source={icons[iconName]}
              style={{ height: size, width: size, tintColor: color }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#E6007E",
        inactiveTintColor: "#A9A9A9",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="GGPanel" component={GGPanelScreen} />
      <Tab.Screen name="GamesAvailable" component={GamesAvailable} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
