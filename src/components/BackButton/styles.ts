import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { rsize } from '../../utils/size';

export const Button = styled(RectButton)`
  height: ${rsize(28, 'w')}px;
  width: ${rsize(28, 'w')}px;
  justify-content: center;
  align-items: center;
  margin: 0 ${rsize(12)}px;
  /* background-color: red; */
`;
export const BackIcon = styled(Feather).attrs({ name: 'chevron-left' })<{
  light: boolean;
}>`
  font-size: ${(props) => props.theme.fontSizes.xxl}px;
  color: ${(props) => (props.light ? '#fff' : '#333')};
`;
