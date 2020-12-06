import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import Routes from "./routes";
import { FontDisplay, useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { light } from "./styles/themes/light";
import { io, Socket } from "socket.io-client";

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket>();
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

  useEffect(() => {
    const _socket = socket || io("http://127.0.0.1:3000");
    _socket.on("chat message", (msg: any) => {
      _socket.emit("chat message", { mensagem: "ok recebi sua mensagem" });
      console.log("mensagem recebida da api no app", msg);
    });

    setSocket(_socket);
  }, []);

  console.log("fonts", { loaded, error });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={light}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
