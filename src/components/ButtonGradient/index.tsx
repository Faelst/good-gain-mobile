import React from 'react'
import { ViewProps } from 'react-native'

import { Container, LinearGradient, ButtonText } from './styles'
import { Button } from '../index'

export interface ButtonProps extends ViewProps {
  disabled?: boolean,
  onPress?: () => void,
  component?: React.ReactElement,
  gradient?: boolean,
}
const ButtonGradient: React.FC<ButtonProps> = ({
  disabled, onPress, component, gradient, children, ...rest
}) => {
  const gradientDefault = gradient === undefined ? true : gradient;

  return (
    <Container {...rest}>
      <LinearGradient gradient={gradientDefault} disabled={disabled}>
        <Button onPress={onPress} disabled={disabled}>
          {children && <ButtonText>{children}</ButtonText>}
          {component}
        </Button>
      </LinearGradient>
    </Container>
  );
};

export default ButtonGradient