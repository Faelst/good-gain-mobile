import styled from 'styled-components/native';
import { StatusBar } from "react-native";
import { RectButton, TouchableHighlight } from "react-native-gesture-handler";
import TextBold from "../../components/TextBold";
import CustomTextBase from "../../components/CustomTextBase";
import { CardMedia } from "../../components/CustomCard";
import { rsize } from "../../utils/size";

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
export const Header = styled.View`
  z-index: 1;
  margin-top: ${rsize(-40)}px;
`
export const HeaderTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  line-height: ${props => props.theme.fontSizes.xxl - 2}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
export const ListHorizontalButton = styled(TouchableHighlight)`
  height: ${rsize(80)}px;
  width: ${rsize(80)}px;
  align-items: center;
  justify-content: center;
  border: ${rsize(3)}px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius:${rsize(20)}px;
`
export const ListHorizontalButtonText = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.lg + 2}px;
  text-align: center;
`
export const Main = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${rsize(-40)}px;
`
export const ListContent = styled(CardMedia)`
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
export const ListItemDescription = styled.View`
  height: ${rsize(98)}px;
  justify-content: space-between;
  margin: ${rsize(15)}px 0 0 ${rsize(13)}px;
`
export const ListTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg + 2}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;
`
export const ListSubtitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`
export const ListButton = styled.TouchableHighlight.attrs({
  underlayColor: "rgba(224, 224, 224, 0.500)"
})`
  height: ${rsize(42)}px;
  width: ${rsize(111)}px;
  align-items: center;
  justify-content: center;
  border: ${rsize(1)}px solid ${props => props.theme.colors.secondary};
  border-radius: ${rsize(15)}px;
`
export const ListButtonText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.secondary};
`
