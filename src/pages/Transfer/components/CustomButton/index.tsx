import React from 'react';
import { ImageURISource, TouchableOpacity, View, ViewProps } from 'react-native';

import { Container, Image, BorderGradient } from './styles';

interface ICustomButton extends ViewProps {
  selected?: boolean,
  source: ImageURISource
  isFocused?: boolean,
  onPress?: () => void,
}
const CustomButton: React.FC<ICustomButton> = ({
  selected, isFocused, onPress, source, ...props
}) => {
  return (
    <View {...props}>
      <BorderGradient selected={selected}>
        <Container>
          <TouchableOpacity onPress={onPress}>
            <Image
              selected={selected}
              isFocused={isFocused}
              source={source}
            />
          </TouchableOpacity>
        </Container>
      </BorderGradient>
    </View>
  )
}

export default CustomButton;