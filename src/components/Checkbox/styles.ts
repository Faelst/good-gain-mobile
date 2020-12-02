import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Button = styled(BorderlessButton)`
  height: ${rsize(27)}px;
  width: ${rsize(27)}px;
  align-items: center;
  justify-content: center;
`
interface ViewProps {
  checked?: boolean,
}
export const View = styled.View<ViewProps>`
  height: ${rsize(21)}px;
  width: ${rsize(21)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(5)}px;
  border: ${rsize(1)}px solid
  ${props => props.checked ?
  props.theme.colors.secondary :
  props.theme.colors.textSecondary
  };
`
interface IconProps {
  checked?: boolean,
}
export const Icon = styled(Feather).attrs({
  name: "check",
  size: rsize(15),
})<IconProps>`
  color: ${props => props.checked ?
  props.theme.colors.secondary :
  "transparent"
  };
`;
