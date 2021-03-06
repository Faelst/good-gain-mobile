import styled from 'styled-components/native';
import TextGradientBase from '../../components/TextGradient'
import TextBold from '../../components/TextBold/'
import CustomTextBase from '../../components/CustomTextBase/'
import { rsize } from '../../utils/size'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
  padding-Bottom: ${rsize(51)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const Title = styled(TextGradientBase).attrs(props => ({
  fontSize: props.theme.fontSizes.xxl - 2,
  textAlign: "center",
}))`
  margin-top: ${rsize(22.38)}px;
`;
export const ImageBackground = styled.ImageBackground`
  height: ${rsize(221)}px;
  width: 100%;
  align-items: flex-end;
  overflow: hidden;
  padding: ${rsize(24)}px ${rsize(24)}px 0 0;
  border-bottom-left-radius: ${rsize(30)}px;
  border-bottom-right-radius: ${rsize(30)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const Description = styled(CustomTextBase)`
  height: ${rsize(67)}px;
  width: ${rsize(321)}px;
  margin-top: ${rsize(14)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
`;
export const DescriptionBold = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  color: ${props => props.theme.colors.textColor};
`;
export const Image = styled.Image`
  height: ${rsize(185)}px;
  width: ${rsize(333)}px;
  border-radius: ${rsize(20)}px;
  margin: ${rsize(24)}px ${rsize(21)}px 0 ${rsize(21)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const TextButton = styled(CustomTextBase)`
  margin-top: ${rsize(17)}px;
  margin-bottom: ${rsize(109)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  text-decoration-line: underline;
`;
export const ButtonTextStart = styled(TextBold)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md}px;
`;
