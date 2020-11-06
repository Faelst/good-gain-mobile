import React from 'react';

import { Container, Text, Check, CheckIcon } from './styles';

interface ICheckBoxProps {
  label?: string;
  checked?: boolean;
}

const CheckBox: React.FC<ICheckBoxProps> = ({ label, checked, ...props }) => {
  return (
    <Container {...props}>
      <Check checked={checked}>
        <CheckIcon />
      </Check>
      <Text>{label}</Text>
    </Container>
  );
};

export default CheckBox;
