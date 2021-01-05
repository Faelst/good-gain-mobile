import React from "react";
import { TextInputProps } from "react-native";
import CustomInput from "../CustomInput";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";

import { Container, View, Input, Label, ErrorMsg } from "./styles";

interface ICustomInput extends TextInputProps {
  label: string;
  height?: number;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  errorMessage?: string;
  type?: "date";
  maskType?: TextInputMaskTypeProp;
  mask?: string;
  format?: string;
}

const CustomInputMask: React.FC<ICustomInput> = ({
  maskType,
  format,
  mask,
  ...props
}) => {
  const options = mask || format ? { mask, format } : {};

  return (
    <CustomInput {...props}>
      <Input
      
        type={maskType || "custom"}
        options={options}
        {...props}
        // dont forget to set the "value" and "onChangeText" props
        // value={this.state.text}
        // onChangeText={(text) => {
        //   this.setState({
        //     text: text,
        //   });
        // }}
      />
    </CustomInput>
  );
};

export default CustomInputMask;
