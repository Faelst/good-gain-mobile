import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";

interface ContainerProps {
  height?: number,
}
export const Container = styled.View<ContainerProps>`
  height: ${props => props.height ? props.height : rsize(55)}px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
  padding: 0 ${rsize(20)}px;
  border-radius: ${rsize(27.5)}px;
  align-items: ${props => props.height ? "flex-start" : "center"};
  flex-direction: ${props => props.height ? "column" : "row"};
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.textSecondary,
  selectionColor: props.theme.colors.primary,
}))`
  flex: 1;
  font-family: ${props => props.theme.fontFamily.textRegular};
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
