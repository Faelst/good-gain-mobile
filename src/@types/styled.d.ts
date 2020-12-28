// import original module declarations
import 'styled-components/native';
import { IFontSizes } from '../styles/interfaces/IFontSizes';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backdrop: string;
      error: string,
      dark: string,
      gradient: [string, string];
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundLight: string;
      backgroundLighter: string;
      primary: string;
      secondary: string;
      buttonPrimary: string;
      buttonSecondary: string;
      textLight: string;
      textColor: string;
      textSecondary: string;
      subtitle: string;
    };
    fontSizes: IFontSizes;
    fontFamily: {
      text: string;
      textRegular: string;
      textBold: string;
      textMedium: string;
      titleRegular: string;
      titleBold: string;
    };
    StatusBarHeight: number;
  }
}
