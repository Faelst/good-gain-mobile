import React from 'react'
import { View, ViewProps } from 'react-native'

import { LinearGradient, ButtonText } from './styles'
import { Button } from '../index'

interface ButtonProps extends ViewProps {
  disabled?: boolean,
  onPress?: () => void
}
const ButtonGradient: React.FC<ButtonProps> = ({
  disabled, onPress, children, ...rest
}) => {
  return (
    <View {...rest}>
      <LinearGradient disabled={disabled}>
        <Button onPress={onPress} enabled={!disabled}>
          <ButtonText>{children}</ButtonText>
        </Button>
      </LinearGradient>
    </View>
  );
};

export default ButtonGradient