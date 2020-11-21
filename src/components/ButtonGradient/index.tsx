import React from 'react'
import { ViewProps } from 'react-native'

import { Container, LinearGradient, ButtonText } from './styles'
import { Button } from '../index'

interface ButtonProps extends ViewProps {
  disabled?: boolean,
  onPress?: () => void
}
const ButtonGradient: React.FC<ButtonProps> = ({
  disabled, onPress, children, ...rest
}) => {
  return (
    <Container {...rest}>
      <LinearGradient disabled={disabled}>
        <Button onPress={onPress} enabled={!disabled}>
          <ButtonText>{children}</ButtonText>
        </Button>
      </LinearGradient>
    </Container>
  );
};

export default ButtonGradient