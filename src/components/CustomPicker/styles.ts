import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";
import {Picker as PickerBase} from '@react-native-picker/picker'
import { Feather } from '@expo/vector-icons'

export const View = styled.View`
  padding: 0 ${rsize(25)}px;
`;
export const Container = styled.View`
  height: ${rsize(55)}px;
  justify-content: center;
  padding: 0 ${rsize(16)}px 0 ${rsize(20)}px;
  border-radius: ${rsize(27.5)}px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
`;
export const Label = styled(CustomTextBase)`
  height: ${rsize(27)}px;
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${rsize(27)}px;
  margin-bottom: ${rsize(5)}px;
`;
export const Icon = styled(Feather).attrs({
  name: "chevron-down",
  size: rsize(24)
})`
  position: absolute;
  right: 0;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: ${rsize(2)}px;
  margin-left: ${rsize(16)}px;
`;
