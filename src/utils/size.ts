import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { IFontSizes } from '../styles/interfaces/IFontSizes';

const _h = 812; // altura base do layout
const _w = 375; // largura base do layout
const _p = 100 / _h;
const _pw = 100 / _w;

export function rsize(size: number, type: 'w' | 'h' = 'w') {
  if (type === 'h') return hp(`${size * _p}`);
  if (type === 'w') return wp(`${size * _pw}`);
  else return wp(`${size * _pw}`);
}

export function getFontSizes(): IFontSizes {
  const _sizes = {
    xxl: wp(`${26 * _pw}%`),
    xl: wp(`${22 * _pw}%`),
    lg: wp(`${18 * _pw}%`),
    md: wp(`${16 * _pw}%`),
    sm: wp(`${14 * _pw}%`),
    xs: wp(`${12 * _pw}%`),
    xxs: wp(`${10 * _pw}%`)
  };

  console.log({ _sizes, _p });

  return _sizes;
}
