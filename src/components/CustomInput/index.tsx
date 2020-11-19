import React from "react";
import { TextInputProps } from "react-native";

import { Container, View, Input, Label } from "./styles";

interface ICustomInput extends TextInputProps {
  label: string;
  rightComponent?: React.ReactNode;
}

const CustomInput: React.FC<ICustomInput> = ({
  label,
  rightComponent,
  ...props
}) => {
  return (
    <View>
      <Label>{label}</Label>

      <Container>
        <Input
        {...props} />
        {rightComponent}
      </Container>
    </View>
  );
};

export default CustomInput;
