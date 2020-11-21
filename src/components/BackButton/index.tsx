import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Button, Icon } from './styles';

interface IBackButton extends RectButtonProperties {
  name: "x" | "arrow-left"
}

const BackButton: React.FC<IBackButton> = ({ name, ...props }) => {
  return (
    <Button {...props}>
      <Icon name={name} />
    </Button>
  );
};

export default BackButton;
