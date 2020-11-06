import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { rsize } from '../utils/size';

export const Button = styled(RectButton)`
  background-color: #33c899;
  /* height: ${rsize(55)}px; */
  padding: ${rsize(14, 'w')}px 0;
  margin: 0 ${rsize(24, 'w')}px;
  border-radius: ${(props) => rsize(6 + props.theme.fontSizes.lg, 'w')}px;
  justify-content: center;
  align-items: center;
`;
