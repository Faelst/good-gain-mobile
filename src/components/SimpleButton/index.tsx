import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

// import { Container } from './styles';

const SimpleButton: React.FC<TouchableWithoutFeedbackProps> = ({
  children, ...props
}) => {
  return <TouchableWithoutFeedback {...props}>{children}</TouchableWithoutFeedback>;
};

export default SimpleButton;
