import React from 'react'
import { ViewProps } from 'react-native'

import { ButtonView, ButtonText } from './styles'
import { Button } from '../index'

interface ButtonOutlineProps extends ViewProps {
  onPress?: () => void,
  bold?: boolean,
  fontSize?: number,
  selected?: boolean,
}
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  onPress, bold, fontSize, selected, children, ...rest
}) => {
  return (
    <ButtonView selected={selected} {...rest}>
      <Button onPress={onPress}>
        <ButtonText
          selected={selected}
          fontSize={fontSize}
          bold={bold}
        >
          {children}
        </ButtonText>
      </Button>
    </ButtonView>
  );
};

export default ButtonOutline