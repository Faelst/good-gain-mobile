import React from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

const TextBold: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TextBold;
