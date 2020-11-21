import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';
import { FontDisplay, useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { light } from './styles/themes/light';

const App: React.FC = () => {
  const [loaded, error] = useFonts({
    'Gilroy-Regular': {
      uri: require('../assets/fonts/Gilroy/Gilroy-Regular.ttf'),
      display: FontDisplay.BLOCK
    },
    'Gilroy-Medium': {
      uri: require('../assets/fonts/Gilroy/Gilroy-Medium.ttf'),
      display: FontDisplay.BLOCK
    },
    'Gilroy-Bold': {
      uri: require('../assets/fonts/Gilroy/Gilroy-Bold.ttf'),
      display: FontDisplay.BLOCK
    },
    'Circular-Std-Bold': {
      uri: require('../assets/fonts/Circular/Circular-Std-Bold.ttf'),
      display: FontDisplay.BLOCK
    }
  });

  console.log('fonts', { loaded, error });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={light}>
      <StatusBar style="dark" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
