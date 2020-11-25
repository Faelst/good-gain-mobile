import styled, { css } from 'styled-components/native';
import TextBold from "../../components/TextBold";
import CustomTextBase from "../../components/CustomTextBase";
import { CardMedia as CardCustom } from "../../components/CustomCard";
import { RectButton } from 'react-native-gesture-handler'
import IMGGradient from '../../components/ImageGradient'
import { rsize } from "../../utils/size";
import TextGradientBase from '../../components/TextGradient';

interface ListItemProps {
  selected?: boolean
  availabled?: boolean
}
export const Container = styled.View`
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
`;
export const ImageGradient = styled(IMGGradient)`
  height: ${rsize(133)}px;
  width: ${rsize(375)}px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`
export const HeaderTitle = styled(TextBold)`
  position: absolute;
  
  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  line-height: ${props => props.theme.fontSizes.xxl - 2}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
export const Tab = styled.View`
  z-index: 1;
  margin-top: ${rsize(-40)}px;
`
export const TabView = styled.View<ListItemProps>`
  height: ${rsize(80)}px;
  width: ${rsize(80)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  ${props => props.selected &&
    css`
    border: ${rsize(3)}px solid ${props => props.theme.colors.primary};
    `
  };
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius:${rsize(20)}px;
`
export const Button = styled(RectButton)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const TabTitle = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.lg + 1}px;
  text-align: center;
`
export const TabStrong = styled(TextGradientBase).attrs(props => ({
  fontSize: props.theme.fontSizes.lg + 2,
  textAlign: "center",
}))``

export const Main = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${rsize(-40)}px;
`
export const Card = styled(CardCustom)`
  height: ${rsize(141)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-items: flex-end;
  padding: ${rsize(14)}px;
  border-radius:${rsize(10)}px;
`
export const Image = styled.Image`
  height: ${rsize(113)}px;
  width: ${rsize(89)}px;
  border-radius:${rsize(10)}px;
`
export const DescriptionContainer = styled.View`
  height: ${rsize(98)}px;
  width: 66%;
  margin: ${rsize(15)}px 0 0 ${rsize(13)}px;
`
export const Title = styled(TextGradientBase).attrs(props => ({
  fontSize: props.theme.fontSizes.lg + 2,
}))``
export const Subtitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.lg}px;

  margin-top: ${rsize(3)}px;
`
export const ButtonView = styled.View<ListItemProps>`
  height: ${rsize(42)}px;
  width: ${rsize(111)}px;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  ${props => props.availabled ?
    css`border: ${rsize(1)}px solid ${props => props.theme.colors.secondary};`:
    css`border: ${rsize(1)}px solid ${props => props.theme.colors.textSecondary};`
  };
  border-radius: ${rsize(15)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`
export const ButtonText = styled(TextBold)<ListItemProps>`
  font-size: ${props => props.theme.fontSizes.md}px;
  
  ${props => props.availabled ?
    css`color: ${props => props.theme.colors.secondary};`:
    css`color: ${props => props.theme.colors.textSecondary};`
  };
`