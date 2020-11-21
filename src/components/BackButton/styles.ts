import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Button = styled(RectButton)`
  height: ${rsize(48)}px;
  width: ${rsize(48)}px;
  
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(20)}px;
`
interface IconProps {
  name: string
}
export const Icon = styled(Feather).attrs(props => ({
  name: props.name,
  size: rsize(24),
}))<IconProps>`
  color: ${(props) => props.theme.colors.textColor};
`;
