import React, { Children } from 'react'
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import ContainerBase from '../../components/Container'
import { rsize } from '../../utils/size';
import TextBold from '../../components/TextBold';
import ButtonGradient, { ButtonProps } from '../../components/ButtonGradient';
import CustomTextBase from '../../components/CustomTextBase';
import { CardMedia } from '../../components/CustomCard';
import TextGradient from '../../components/TextGradient';

export const Container = styled(ContainerBase)``
;
export const Main = styled.View`
  margin-top: ${rsize(-61)}px;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const Tab = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: ${rsize(35)}px;
`;
const CustomButtonGradient = styled(ButtonGradient)`
  height: ${rsize(34)}px;
  min-width: ${rsize(69)}px;
  width: auto;
`;
const TabButtonText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm+1}px;
  color: ${props => props.theme.colors.textLight};
  
  margin: 0 ${rsize(15)}px;
`;
const TabTextUnselected = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.sm+1}px;
  color: ${props => props.theme.colors.textSecondary};
  
  margin: 0 ${rsize(15)}px;
`;
interface ITabButton extends ButtonProps {
  selected?: boolean,
}
export const TabButton: React.FC<ITabButton> = ({
  children, selected, ...props
}) => {
  return (
    <CustomButtonGradient gradient={selected} {...props} component={
      selected
      ? <TabButtonText>{children}</TabButtonText>
      : <TabTextUnselected>{children}</TabTextUnselected>
    }/>
  )
}
export const DescriptionContainer = styled.View`
  width: ${rsize(325)}px;
  height: ${rsize(107)}px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #EDF1F7;
  border-radius: ${rsize(25)}px;
  margin-top: ${rsize(17)}px;
`;
export const View = styled.View`
  flex: 1;
  align-items: center;
`;
export const TitleDescription = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.md}px;
`;
interface IStrong {
  color: string,
}
export const Strong = styled(TextBold)<IStrong>`
  margin-top: ${rsize(10)}px;

  font-size: ${props => props.theme.fontSizes.xxl-1}px;
  line-height: ${props => props.theme.fontSizes.xxl+3}px;
  color: ${props => props.color
  ? props.color === "green"
    ? props.theme.colors.secondary
    : props.theme.colors.backgroundSecondary
  : props.theme.colors.textColor};
`;
export const StrongResult = styled(TextBold)<IStrong>`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  margin-top: ${rsize(5)}px;
  color: ${props => props.color
  ? props.color
  : props.theme.colors.textColor};
`;
export const Divider = styled.View`
  width: ${rsize(1)}px;
  height: ${rsize(42)}px;
  background-color: #C5CEE0;
`;
export const Card = styled(CardMedia)`
  height: ${rsize(98)}px;
  width: ${rsize(327)}px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  padding: ${rsize(15)}px ${rsize(27)}px ${rsize(15)}px ${rsize(14)}px;
  border-radius: ${rsize(20)}px;
`;
export const Image = styled.Image`
  height: ${rsize(68)}px;
  width: ${rsize(68)}px;
  border-radius: ${rsize(10)}px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const CardContent = styled.View`
  height: ${rsize(50)}px;
  width: ${rsize(205)}px;
  margin-left: ${rsize(13)}px;
  justify-content: space-between;
`;
export const StrongGradient = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.sm
}))``;
export const Span = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.xs}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.subtitle};
`;
export const TextResult = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;

  position: absolute;
  right: 0;
  bottom: 0;
`;

