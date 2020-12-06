import styled from 'styled-components/native';
import ContainerBase from '../../components/Container'
import ImageGradient from '../../components/ImageGradient';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size';

export const Container = styled(ContainerBase)`
`;
export const Header = styled.View``;
export const ImageBackground = styled(ImageGradient)`
  width: ${rsize(375)}px;
  height: ${rsize(165)}px;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`;
export const Main = styled.View`
  margin-top: ${rsize(-43)}px;
  padding-bottom: ${rsize(43)}px;
`;
export const Image = styled.Image`
  height: ${rsize(86)}px;
  width: ${rsize(86)}px;
  align-self: center;
  margin-bottom: ${rsize(15)}px;
  border-radius: ${rsize(43)}px;
`;
export const Strong = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.xl+2,
  textAlign: "center",
}))`
  margin-bottom: ${rsize(26)}px;
`;
