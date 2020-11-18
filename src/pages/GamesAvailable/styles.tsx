import styled, { css } from 'styled-components/native';
import { StatusBar } from "react-native";
import TextBold from "../../components/TextBold";
import CustomTextBase from "../../components/CustomTextBase";
import { CardMedia as CardCustom } from "../../components/CustomCard";
import GradientButton from "../../components/GradientButton"
import { RectButton } from 'react-native-gesture-handler'
import ModalCustom from 'react-native-modal'
import { LinearGradient } from 'expo-linear-gradient'
import { rsize } from "../../utils/size";

interface ListItemProps {
  selected?: boolean
  availabled?: boolean
}
export const Container = styled.View`
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
`;
export const ImageBackground = styled.ImageBackground`
  height: ${rsize(133)}px;
  width: ${rsize(375)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`
export const HeaderTitle = styled(TextBold)`
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
  font-size: ${props => props.theme.fontSizes.lg + 2}px;
  text-align: center;
`
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
  justify-content: space-between;
  margin: ${rsize(15)}px 0 0 ${rsize(13)}px;
`
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg + 2}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;
`
export const Subtitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`
export const ButtonView = styled.View<ListItemProps>`
  height: ${rsize(42)}px;
  width: ${rsize(111)}px;
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
export const Modal = styled(ModalCustom).attrs(props => ({
  swipeDirection: "down",
  backdropTransitionOutTiming: 0,
  backdropColor: props.theme.colors.textColor,
  backdropOpacity: 0.40,
}))`
  margin: 0;
  justify-content: flex-end;
`