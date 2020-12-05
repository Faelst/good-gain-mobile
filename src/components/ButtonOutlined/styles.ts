import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { rsize } from "../../utils/size";

interface ButtonProps {
  selected?: boolean,
}
export const ButtonView = styled(LinearGradient).attrs(props => ({
  colors: props.selected
  ? props.theme.colors.gradient
  : ["transparent", "transparent"]
}))<ButtonProps>`
  height: ${rsize(42)}px;
  width: ${rsize(111)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(15)}px;
  border-width: ${props => props.selected ? 0 : rsize(1)}px;
  border-color: ${props => props.theme.colors.subtitle};
`
interface ButtonTextProps extends ButtonProps {
  bold?: boolean,
  fontSize?: number,
}
export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${props => props.bold
  ? props.theme.fontFamily.textBold
  : props.theme.fontFamily.textMedium
  };
  font-size: ${props => props.fontSize
  ? props.fontSize
  : props.theme.fontSizes.md
  }px;
  line-height: ${props => props.fontSize
  ? props.fontSize
  : props.theme.fontSizes.md
  }px;
  color: ${props => props.selected
  ? props.theme.colors.textLight
  : props.theme.colors.subtitle
  };
`