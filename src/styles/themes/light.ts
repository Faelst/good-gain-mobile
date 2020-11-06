import { DefaultTheme } from 'styled-components/native';
import { getFontSizes } from '../../utils/size';

const light: DefaultTheme = {
  colors: {
    backgroundPrimary: '#8257e5',
    backgroundSecondary: '#04d361',
    backgroudnLighter: '#fff',
    backgroundLigth: '#F2F2F2',
    primary: '#E6007E',
    secondary: '#04d361',
    buttonPrimary: '#9871f5',
    buttonSecondary: '#04d361',
    textLight: '#d4c2ff',
    textColor: '#8D97B5'
  }, 
  fontSizes: getFontSizes(),
  fontFamily: {
    text: 'Montserrat',
    textRegular: 'Montserrat-Regular',
    textBold: 'Montserrat-Bold',
    titleRegular: 'Montserrat-Regular',
    titleBold: 'Montserrat-Bold'
  }
};

export { light };
