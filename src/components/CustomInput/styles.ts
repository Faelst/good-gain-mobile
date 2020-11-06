import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";

export const Container = styled.View`
  background-color: #fff;
  border: ${rsize(1)}px solid #ebf3f9;
  padding: 0 ${rsize(17)}px;
  border-radius: ${rsize(27.5)}px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px ${rsize(5)}px #eee;
  elevation: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#8d97b5",
})`
  height: ${rsize(55)}px;
  flex: 1;
  color: #8d97b5;
  font-family: ${(props) => props.theme.fontFamily.textRegular};
  font-size: ${(props) => props.theme.fontSizes.md}px;
`;

export const View = styled.View`
  padding: 0 ${rsize(24, "w")}px ${rsize(5, "w")}px;
  margin-bottom: ${rsize(14)}px;
`;

export const Label = styled(CustomTextBase)`
  color: #000;
  font-family: ${(props) => props.theme.fontFamily.textRegular};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  margin-bottom: ${rsize(10)}px;
`;
