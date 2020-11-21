import React from 'react'
import { View, ViewProps } from 'react-native'

import { ButtonView, ButtonText } from './styles'
import { Button } from '../index'

interface ButtonOutlineProps extends ViewProps {
  onPress?: () => void
}
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  onPress, children, ...rest
}) => {
  return (
    <ButtonView {...rest}>
      <Button onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </Button>
    </ButtonView>
  );
};

export default ButtonOutline