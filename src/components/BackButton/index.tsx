import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { BackIcon, Button } from './styles';

interface IBackButton extends RectButtonProperties {
  light?: boolean;
}

const BackButton: React.FC<IBackButton> = ({ ...props }) => {
  return (
    <Button {...props}>
      <BackIcon light={props.light} />
    </Button>
  );
};

export default BackButton;
