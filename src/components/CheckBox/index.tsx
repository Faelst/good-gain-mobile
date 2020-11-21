import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Button, View, Icon } from './styles'

interface CheckboxProps extends BorderlessButtonProperties {
 checked?: boolean
}
const Checkbox: React.FC<CheckboxProps> = ({checked, ...props}) => {
  return (
    <Button {...props}>
      <View checked={checked}>
        <Icon checked={checked}/>
      </View>
    </Button>
  )
};

export default Checkbox;
