import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { rsize } from '../utils/size';

export const Button = styled(RectButton)`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border-radius: ${(props) => rsize(6 + props.theme.fontSizes.lg, 'w')}px;
  justify-content: center;
  align-items: center;
`;
