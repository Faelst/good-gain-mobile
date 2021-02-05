import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FontDisplay, useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

import Routes from "./routes";

import { light } from "./styles/themes/light";
import AppProvider from "./contexts";
import { NavigationContainer } from "@react-navigation/native";

if (__DEV__) {
  import("./services/ReactotronConfig").then(() =>
    console.log("Reactotron configured")
  );
}

const App: React.FC = () => {
  const [loaded, error] = useFonts({
    "Gilroy-Regular": {
      uri: require("../assets/fonts/Gilroy/Gilroy-Regular.ttf"),
      display: FontDisplay.BLOCK,
    },
    "Gilroy-Medium": {
      uri: require("../assets/fonts/Gilroy/Gilroy-Medium.ttf"),
      display: FontDisplay.BLOCK,
    },
    "Gilroy-Bold": {
      uri: require("../assets/fonts/Gilroy/Gilroy-Bold.ttf"),
      display: FontDisplay.BLOCK,
    },
    "Circular-Std-Bold": {
      uri: require("../assets/fonts/Circular/Circular-Std-Bold.ttf"),
      display: FontDisplay.BLOCK,
    },
  });

  // useEffect(() => {
  //   const _socket = socket || io("http://127.0.0.1:3000");
  //   _socket.on("chat message", (msg: any) => {
  //     _socket.emit("chat message", { mensagem: "ok recebi sua mensagem" });
  //     console.log("mensagem recebida da api no app", msg);
  //   });

  //   setSocket(_socket);
  // }, []);

  console.log("fonts", { loaded, error });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <AppProvider>
          <StatusBar style="auto" />
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
