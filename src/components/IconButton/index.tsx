import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Button, Icon } from './styles'

interface IconButtonProps extends BorderlessButtonProperties {
  /**
  * Icon name to be used in @expo/vector-icons (Feather).
  * "size 24"
  **/
  name: string,
  /**
  * Icon color.
  **/
  color?: string
}
const IconButton: React.FC<IconButtonProps> = ({name, color, ...props}) => {
  return (
    <Button {...props}>
      <Icon name={name} color={color}/>
    </Button>
  )
};

export default IconButton;
