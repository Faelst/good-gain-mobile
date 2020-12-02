import React from "react";
import { Container, View, Label, Icon } from "./styles";
import Picker, { PickerSelectProps } from 'react-native-picker-select'

import { rsize } from '../../utils/size'
import { useTheme } from 'styled-components'

interface CustomPickerProps extends PickerSelectProps {
  label: string;
}
const CustomPicker: React.FC<CustomPickerProps> = ({label, ...props}) => {
  const theme = useTheme()

  const placeholder = {
    label: 'Selecione',
    value: null,
    color: theme.colors.textSecondary,
  };

  const pickerSelectStyles = {
    fontSize: rsize(14),
    fontFamily: "Gilroy-Regular",
    color: theme.colors.textColor,
    width: rsize(257),
  }

  return (
    <View>
      <Label>{label}</Label>
      <Container>
        <Picker
          {...props}
          style={{
            inputIOS: {...pickerSelectStyles},
            inputAndroid: {...pickerSelectStyles}
          }}
          placeholder={placeholder}
          pickerProps={{mode: "dropdown"}}
          fixAndroidTouchableBug
          useNativeAndroidPickerStyle={false}
          Icon={() => <Icon/>}
        />
      </Container>
    </View>
  );
};

export default CustomPicker;
