import styled from 'styled-components/native';
import { rsize } from '../../utils/size';

export const Container = styled.View`
  height: ${rsize(60)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding-left: ${rsize(18)}px;
  padding-right: ${rsize(18)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(20)}px;
`;
export const View = styled.View`
  margin-top: ${rsize(10)}px;
`;
export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${rsize(24)}px;
  width: ${rsize(24)}px;
  margin-right: ${rsize(20)}px;
`;
interface IText {
  color?: string,
}
export const Text = styled.Text<IText>`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.color ? props.color : props.theme.colors.primary};
`;
