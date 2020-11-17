import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'
import styled from 'styled-components/native';

import SimpleButton from '../SimpleButton';
import TextBold from "../../components/TextBold";
import { LinearGradient as GradientComponent } from 'expo-linear-gradient'
import { rsize } from "../../utils/size";

const LinearGradient = styled(GradientComponent).attrs(props => ({
  colors: props.theme.colors.gradient
}))<ButtonProps>`
  height: ${rsize(57)}px;
  width: ${rsize(325)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(28.5)}px;
  overflow: hidden;
  opacity: ${props => props.disabled ? 0.5 : 1};
`
const ButtonText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xl - 1}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
interface ButtonProps extends TouchableWithoutFeedbackProps {
  disabled?: boolean
}
const ButtonGradient: React.FC<ButtonProps> = ({
  disabled, children, ...rest
}) => {
  return (
    <SimpleButton disabled={disabled} {...rest}>
      <LinearGradient disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </LinearGradient>
    </SimpleButton>
  );
};

export default ButtonGradient