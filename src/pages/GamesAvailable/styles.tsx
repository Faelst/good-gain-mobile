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
  margin-top: ${StatusBar.currentHeight}px;
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
export const Button = styled(RectButton)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Filter = styled.View`
  z-index: 1;
  margin-top: ${rsize(-40)}px;
`
export const HeaderTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  line-height: ${props => props.theme.fontSizes.xxl - 2}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
export const FilterButtonView = styled.View<ListItemProps>`
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
export const FilterButtonText = styled(CustomTextBase)`
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
export const ImageItem = styled.Image`
  height: ${rsize(113)}px;
  width: ${rsize(89)}px;
  border-radius:${rsize(10)}px;
`
export const DescriptionContainer = styled.View`
  height: ${rsize(98)}px;
  justify-content: space-between;
  margin: ${rsize(15)}px 0 0 ${rsize(13)}px;
`
export const ItemTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg + 2}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;
`
export const ItemSubtitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`
export const ItemButtonView = styled.View<ListItemProps>`
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
export const ItemButtonText = styled(TextBold)<ListItemProps>`
  font-size: ${props => props.theme.fontSizes.md}px;
  
  ${props => props.availabled ?
    css`color: ${props => props.theme.colors.secondary};`:
    css`color: ${props => props.theme.colors.textSecondary};`
  };
`
export const ModalContent = styled.View`
  width: ${rsize(375)}px;
  align-items: center;
  border-top-left-radius: ${rsize(25)}px;
  border-top-right-radius: ${rsize(25)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
  padding-bottom: ${rsize(64 - 43)}px;
`
export const ModalIndicator = styled.View`
  height: ${rsize(5)}px;
  width: ${rsize(114)}px;
  margin-top: ${rsize(15)}px;
  border-radius: ${rsize(3)}px;
  background-color: rgba(169,169,169,0.2);
`
export const ModalTitle = styled(TextBold)`
  height: ${rsize(55)}px;
  width: ${rsize(240)}px;
  margin-top: ${rsize(45)}px;

  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
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
export const MediaContainer = styled.View`
  height: ${rsize(150)}px;
  width: ${rsize(325)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${rsize(49)}px 0 ${rsize(37)}px;
`
export const ModalButton = styled(GradientButton)`
  height: ${rsize(57)}px;
  width: ${rsize(325)}px;
`
export const MediaBorder = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(156)}px;
  width: ${rsize(156)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(13)}px;
`
