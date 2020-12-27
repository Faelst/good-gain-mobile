import styled from "styled-components/native";
import { rsize } from "../../utils/size";
import CustomTextBase from "../CustomTextBase";

export const Container = styled.TouchableOpacity`
  height: ${(props) => rsize(55)}px;
  border-radius: ${(props) => rsize(55 / 2)}px;
  background-color: #fff;
  padding: 0 ${rsize(20)}px;
  flex-direction: row;
  align-items: center;
`;

interface IComponentContainer {
  left?: boolean;
  right?: boolean;
}
export const ComponentContainer = styled.View<IComponentContainer>`
  margin-left: ${(props) => (props.right ? "14px" : "0")};
  margin-right: ${(props) => (props.left ? "14px" : "0")};
`;

export const Text = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  color: ${(props) => props.theme.colors.primary};
`;
