import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  Container,
  Button,
  Text,
  TextUnselected,
  BorderGradient
} from './styles';

interface ITabButton extends ViewProps {
  selected?: boolean,
  onPress?: () => void,
}
const TabButton: React.FC<ITabButton> = ({
  selected, onPress, children, ...props
}) => {
  return (
    <View {...props}>
      <BorderGradient selected={selected}>
        <Container selected={selected}>
          <Button onPress={onPress}>
            {selected
            ? <Text>{children}</Text>
            : <TextUnselected>{children}</TextUnselected>}
          </Button>
        </Container>
      </BorderGradient>
    </View>
  )
}

export default TabButton;