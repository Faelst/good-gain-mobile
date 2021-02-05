import styled from 'styled-components/native';
import CustomBackButton from '../../components/BackButton';
import CustomContainer from '../../components/Container'
import CustomTextBase from '../../components/CustomTextBase';
import ImageGradient from '../../components/ImageGradient';
import TextBold from '../../components/TextBold';
import CheckboxBase from '../../components/Checkbox';
import { rsize } from '../../utils/size';
import TextGradient from '../../components/TextGradient';

export const Container = styled(CustomContainer)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const BackButton = styled(CustomBackButton).attrs({
  name: 'x'
})`
  position: absolute;
  top: ${rsize(24)}px;
  right: ${rsize(24)}px;
  z-index: 1;
`;
export const Header = styled(ImageGradient).attrs({
  opacity: 0.7,
})`
  height: ${rsize(234)}px;
  width: ${rsize(375)}px;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`;
export const TextView = styled.View`
  height: ${rsize(60)}px;
  width: ${rsize(108)}px;
  position: absolute;
  left: ${rsize(26)}px;
  bottom: ${rsize(26)}px;
  justify-content: space-around;
`;
export const HeaderTitleMD = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.textLight};
`;
export const HeaderTitleXL = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xxl}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Title = styled(TextBold).attrs({
  variant: "body1"
})`
  align-self: flex-start;
  margin-top: ${rsize(25)}px;
  margin-left: ${rsize(26)}px;
`;
export const Description = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;

  width: ${rsize(325)}px;
  align-self: center;
  flex-direction: column;
  margin-top: ${rsize(15)}px;
  margin-bottom: ${rsize(15)}px;
`;
export const Footer = styled.View`
  height: ${rsize(148)}px;
  width: ${rsize(375)}px;
  align-items: center;
  justify-content: space-between;
  padding-top: ${rsize(17)}px;
  padding-bottom: ${rsize(32)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`;
export const CheckboxView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Checkbox = styled(CheckboxBase)`
  margin-right: ${rsize(3)}px;
`;
export const Span = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
`;
export const SpanUnderline = styled(Span)`
  text-decoration: underline;
`;
export const TitleGradient = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.lg+2,
  textAlign: "center",
}))`
  margin-top: ${rsize(25)}px;
`;
export const Subtitle = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.lg+2}px;
  text-align: center;

  margin-top: ${rsize(4)}px;
`;
export const CardContainer = styled.View`
  width: ${rsize(281)}px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  margin-top: ${rsize(8)}px;
  margin-bottom: ${rsize(19)}px;
`;
export const InfoContainer = styled.View`
  width: ${rsize(327)}px;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: ${rsize(27)}px;
`;
