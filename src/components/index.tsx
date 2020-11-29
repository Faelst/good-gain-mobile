import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { rsize } from "../utils/size";

export const ButtonComponent = styled(TouchableOpacity)`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border-radius: ${(props) => rsize(6 + props.theme.fontSizes.lg, "w")}px;
  justify-content: center;
  align-items: center;
`;

export const Button: React.FC<TouchableOpacityProps> = ({
  children,
  onPress,
  ...props
}) => {
  return (
    <ButtonComponent
      {...props}
      onPress={(e) => {
        requestAnimationFrame(() => onPress?.(e));
      }}
    >
      {children}
    </ButtonComponent>
  );
};
