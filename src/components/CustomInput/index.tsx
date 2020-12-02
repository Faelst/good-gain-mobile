import React from "react";
import { TextInputProps } from "react-native";

import { Container, View, Input, Label } from "./styles";

interface ICustomInput extends TextInputProps {
  label: string;
  height?: number,
  rightComponent?: React.ReactNode;
}

const CustomInput: React.FC<ICustomInput> = ({
  label,
  height,
  rightComponent,
  children,
  ...props
}) => {
  return (
    <View>
      <Label>{label}</Label>
      <Container height={height}>
        {children
        ? children
        : <Input {...props} />
        }
        {rightComponent}
      </Container>
    </View>
  );
};

export default CustomInput;
