import { DefaultTheme } from 'styled-components/native';
import { getFontSizes } from '../../utils/size';

const light: DefaultTheme = {
  colors: {
    gradient: ["#E6007E", "#E94834"],
    backgroundPrimary: '#E6007E',
    backgroundSecondary: '#E94834',
    backgroundLighter: '#FFFFFF',
    backgroundLight: '#FAFAFA',
    primary: '#E6007E',
    secondary: '#41D886',
    buttonPrimary: '',
    buttonSecondary: '#FFFFFF',
    textLight: '#FFFFFF',
    textColor: '#383838',
    textSecondary: 'rgba(169, 169, 169, 0.8)',
    subtitle: 'rgba(56, 56, 56, 0.8)'

  }, 
  fontSizes: getFontSizes(),
  fontFamily: {
    text: 'Gilroy-Regular',
    textRegular: 'Gilroy-Regular',
    textMedium: 'Gilroy-Medium',
    textBold: 'Gilroy-Bold',
    titleRegular: 'Gilroy-Regular',
    titleBold: 'Circular-Std-Bold'
  }
};

export { light };
