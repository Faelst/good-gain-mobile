import styled from 'styled-components/native';

import { LinearGradient as GradientComponent } from 'expo-linear-gradient'
import TextBold from "../TextBold";
import { rsize } from "../../utils/size";

interface ButtonProps {
  disabled?: boolean
}
export const LinearGradient = styled(GradientComponent).attrs(props => ({
  colors: props.theme.colors.gradient
}))<ButtonProps>`
  height: ${rsize(57, "w")}px;
  width: ${rsize(325, "w")}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(28.5, "w")}px;
  overflow: hidden;
  opacity: ${props => props.disabled ? 0.5 : 1};
`
export const ButtonText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xl - 1}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`