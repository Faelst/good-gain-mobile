import styled from 'styled-components/native';
import CustomBackButton from '../../components/BackButton';
import CustomContainer from '../../components/Container'
import CustomTextBase from '../../components/CustomTextBase';
import ImageGradient from '../../components/ImageGradient';
import { LinearGradient } from 'expo-linear-gradient'
import TextBold from '../../components/TextBold';
/* import CheckboxBase from '../../components/CheckBox'; */
import { rsize } from '../../utils/size';

export const Container = styled(CustomContainer)`
  align-items: center;
  justify-content: center;
`;
export const BackButton = styled(CustomBackButton).attrs({
  name: 'arrow-left'
})`
  position: absolute;
  top: ${rsize(24)}px;
  left: ${rsize(24)}px;
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
export const Title = styled(TextBold)`
  max-width: ${rsize(325)}px;
  align-self: flex-start;
  margin-top: ${rsize(25)}px;
  margin-left: ${rsize(26)}px;
  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  color: ${props => props.theme.colors.primary};
`;
export const Description = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;

  width: ${rsize(325)}px;
  align-self: center;
  flex-direction: column;
  margin-top: ${rsize(15)}px;
  margin-bottom: ${rsize(34)}px;
`;
export const Details1 = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient,
}))`
  height: ${rsize(36)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-left: ${rsize(10)}px;
  padding-right: ${rsize(10)}px;
  margin-bottom: ${rsize(9)}px;
  border-radius: ${rsize(10)}px;
`;
export const Details2 = styled.View`
  height: ${rsize(36)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-left: ${rsize(10)}px;
  padding-right: ${rsize(10)}px;
  border-radius: ${rsize(10)}px;
  background-color: ${props => props.theme.colors.secondary};
`;
export const Strong = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Footer = styled.View`
  height: ${rsize(148)}px;
  width: ${rsize(375)}px;
  align-items: center;
  justify-content: space-between;
  padding-top: ${rsize(17)}px;
  padding-bottom: ${rsize(32)}px;
  margin-top: ${rsize(145)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`;
export const CheckboxView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Checkbox = styled.View`
  margin-right: ${rsize(3)}px;
`;
export const Span = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
`;
export const SpanUnderline = styled(Span)`
  text-decoration: underline;
`;
