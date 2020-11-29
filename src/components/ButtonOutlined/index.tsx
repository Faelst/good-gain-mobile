import React from 'react'
import { View, ViewProps } from 'react-native'

import { ButtonView, ButtonText } from './styles'
import { Button } from '../index'

interface ButtonOutlineProps extends ViewProps {
  onPress?: () => void,
  bold?: boolean,
  fontSize?: number,
}
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  onPress, bold, fontSize, children, ...rest
}) => {
  return (
    <ButtonView {...rest}>
      <Button onPress={onPress}>
        <ButtonText fontSize={fontSize} bold={bold}>{children}</ButtonText>
      </Button>
    </ButtonView>
  );
};

export default ButtonOutline