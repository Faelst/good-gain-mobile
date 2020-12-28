import { DefaultTheme } from 'styled-components/native';
import { getFontSizes } from '../../utils/size';
import Constants from 'expo-constants';

const palette = {
  rosa: '#E6007E',
  laranja: '#E94834',
  preto: '#383838',
  preto_80: 'rgba(56, 56, 56, 0.8)',
  cinza_80: 'rgba(169, 169, 169, 0.8);',
  branco: '#FFFFFF',
  verde: '#41D886',
}

const light: DefaultTheme = {
  colors: {
    error: palette.laranja,
    backdrop: palette.preto,
    dark: palette.preto,
    gradient: [palette.rosa, palette.laranja],
    backgroundPrimary: palette.rosa,
    backgroundSecondary: palette.laranja,
    backgroundLighter: palette.branco,
    backgroundLight: '#FAFAFA',
    primary: palette.rosa,
    secondary: palette.verde,
    buttonPrimary: '',
    buttonSecondary: palette.branco,
    textLight: palette.branco,
    textColor: palette.preto,
    textSecondary: palette.cinza_80,
    subtitle: palette.preto_80
  }, 
  fontSizes: getFontSizes(),
  fontFamily: {
    text: 'Gilroy-Regular',
    textRegular: 'Gilroy-Regular',
    textMedium: 'Gilroy-Medium',
    textBold: 'Gilroy-Bold',
    titleRegular: 'Gilroy-Regular',
    titleBold: 'Circular-Std-Bold'
  },
  StatusBarHeight: Constants.statusBarHeight
};

export { light };
