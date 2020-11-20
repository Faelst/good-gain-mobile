import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.backgroundLighter};
  padding: 0 ${rsize(20, "w")}px;
  border-radius: ${rsize(27.5, "w")}px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.textSecondary,
  selectionColor: props.theme.colors.primary,
}))`
  height: ${rsize(55, "w")}px;
  flex: 1;

  font-family: ${props => props.theme.fontFamily.textRegular};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.md}px;
`;

export const View = styled.View`
  padding: 0 ${rsize(25, "w")}px;
  margin-top: ${rsize(14, "h")}px;
`;

export const Label = styled(CustomTextBase)`
  height: ${rsize(27, "h")}px;
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${rsize(27, "h")}px;
  margin-bottom: ${rsize(5, "h")}px;
`;
