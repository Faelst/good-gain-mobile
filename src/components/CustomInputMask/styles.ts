import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";

interface ContainerProps {
  height?: number;
}
export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.theme.colors.backgroundLighter};
  padding: 0 ${rsize(20)}px;
  border-radius: ${rsize(27.5)}px;
  align-items: ${(props) => (props.height ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.height ? "column" : "row")};

  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  elevation: 5;
`;

export const Input = styled(TextInputMask).attrs((props) => ({
  placeholderTextColor: props.theme.colors.textSecondary,
  selectionColor: props.theme.colors.primary,
}))`
  flex: 1;
  height: ${(props) => (props.height ? props.height : rsize(55))}px;
  font-family: ${(props) => props.theme.fontFamily.textRegular};
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSizes.sm}px;
`;

export const View = styled.View`
  padding: 0 ${rsize(25)}px;
  margin-top: ${rsize(14)}px;
`;
export const Label = styled(CustomTextBase)`
  height: ${rsize(27)}px;
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${rsize(27)}px;
  margin-bottom: ${rsize(5)}px;
`;

export const ErrorMsg = styled(CustomTextBase)`
  color: ${(props) => props.theme.colors.error};
  font-family: ${(props) => props.theme.fontFamily.textRegular};
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${rsize(16)}px;
  margin-top: ${rsize(5)}px;
`;
