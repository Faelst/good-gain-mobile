import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';
import { FontDisplay, useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { light } from './styles/themes/light';

const App: React.FC = () => {
  const [loaded, error] = useFonts({
    Montserrat: {
      uri: require('../assets/fonts/Montserrat/Montserrat-Light.ttf'),
      display: FontDisplay.AUTO
    },
    'Montserrat-Regular': {
      uri: require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
      display: FontDisplay.AUTO
    },
    'Montserrat-Bold': {
      display: FontDisplay.AUTO,
      uri: require('../assets/fonts/Montserrat/Montserrat-Bold.ttf')
    }
  });

  console.log('fonts', { loaded, error });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={light}>
      <>
        {/* <Login /> */}
        <Routes />
        <StatusBar style="light" />
      </>
    </ThemeProvider>
  );
};

export default App;
