import styled from 'styled-components/native';
import { LinearGradient as LinearGradientCustom } from 'expo-linear-gradient'

export const LinearGradient = styled(LinearGradientCustom).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  overflow: hidden;
`;
interface ImageBackgroundProps {
  /**
  * When no default value is provided, it is 0.2
  */
  opacity?: number
}
export const ImageBackground = styled.ImageBackground<ImageBackgroundProps>`
  height: 100%;
  width: 100%;
  opacity: ${props => props.opacity ? props.opacity : 0.2};
`;
