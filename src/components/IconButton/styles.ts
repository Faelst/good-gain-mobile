import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Button = styled(BorderlessButton)`
  height: ${rsize(24)}px;
  width: ${rsize(24)}px;
  align-items: center;
  justify-content: center;
`
interface IconProps {
  name: string,
  color?: string
}
export const Icon = styled(Feather).attrs(props => ({
  name: props.name,
  size: rsize(24),
}))<IconProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textColor};
`;
