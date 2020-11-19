import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'

import { LinearGradient, ButtonText } from './styles'
import SimpleButton from '../SimpleButton';

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