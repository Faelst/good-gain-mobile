import React from "react";
import { TextInputProps } from "react-native";

import { Container, View, Input, Label, ErrorMsg } from "./styles";

interface ICustomInput extends TextInputProps {
  label: string;
  height?: number;
  rightComponent?: React.ReactNode;
  errorMessage?: string;
  type?: "date";
}

const CustomInput: React.FC<ICustomInput> = ({
  label,
  height,
  errorMessage,
  rightComponent,
  children,
  ...props
}) => {
  return (
    <View>
      <Label>{label}</Label>
      <Container height={height}>
        {children ? children : <Input {...props} />}
        {rightComponent}
      </Container>
      {!!errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </View>
  );
};

export default CustomInput;
