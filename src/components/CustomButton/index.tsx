import React from "react";
import { TextStyle, TouchableOpacityProps, View } from "react-native";

import { ComponentContainer, Container, Text } from "./styles";

interface ICustomButton extends TouchableOpacityProps {
  textAlign: "center" | "left";
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const CustomButton: React.FC<ICustomButton> = ({
  leftComponent,
  rightComponent,
  children,
  textAlign = "center",
  ...props
}) => {
  return (
    <Container {...props}>
      {leftComponent && (
        <ComponentContainer left>{leftComponent}</ComponentContainer>
      )}
      {children && <Text style={{ textAlign }}>{children}</Text>}
      {rightComponent && (
        <ComponentContainer right>{rightComponent}</ComponentContainer>
      )}
    </Container>
  );
};

export default CustomButton;
