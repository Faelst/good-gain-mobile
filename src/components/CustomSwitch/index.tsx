import React from 'react';
import { Switch, SwitchProps } from 'react-native';

import { Container } from './styles';

const CustomSwitch: React.FC<SwitchProps> = ({...props}) => {
  return (
    <Container>
      <Container/>
      <Switch
        {...props}
        style={{position: "absolute"}}
        ios_backgroundColor="#E2E2E2"
        trackColor={{ false: 'transparent', true: 'transparent' }}
      />
    </Container>
  )
}

export default CustomSwitch;
