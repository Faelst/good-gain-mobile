import styled from 'styled-components/native';
import { LinearGradient as LinearGradientBase } from 'expo-linear-gradient';
import { rsize } from '../../utils/size';

export const ImageBackground = styled.ImageBackground`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-top: ${rsize(20)}px;
  border-radius: ${rsize(40)}px;
`
export const LinearGradient = styled(LinearGradientBase).attrs(props => ({
  colors: props.theme.colors.gradient,
}))`
  flex: 1;
  width: 100%;
  opacity: 0.2;
`
