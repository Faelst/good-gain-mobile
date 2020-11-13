import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { CardMedia } from "../../components/CustomCard";
import { RectButton, TouchableOpacity, BaseButton, TouchableHighlight } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import SvgUri from "expo-svg-uri";
import CustomTextBase from "../../components/CustomTextBase";
import TextBold from "../../components/TextBold";
import logo from "../../images/logo_horizontal_2.png";
import { Feather } from "@expo/vector-icons";
import { rsize } from "../../utils/size";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
`;
export const Header = styled(LinearGradient).attrs((props) => ({
  colors: props.theme.colors.gradient,
}))`
  height: ${rsize(181, "w")}px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${rsize(24, "w")}px ${rsize(8, "w")}px 0 ${rsize(30, "w")}px;
`;
export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const AppBarContent = styled.View`
  flex-direction: row;
`;
export const AppBarButton = styled(TouchableHighlight)`
  height: ${rsize(45, "w")}px;
  width: ${rsize(45, "w")}px;
  align-items: center;
  justify-content: center;
  margin-right: ${rsize(4, "w")}px;
  border-radius: ${rsize(25, "w")}px;
`;
export const MainContent = styled.View`
  flex: 1;
  margin-top: ${rsize(-88, "w")}px;
  padding-bottom: ${rsize(42, "w")}px;
`;
export const Padding = styled.View`
  padding: ${rsize(24, "w")}px ${rsize(24, "w")}px 0 ${rsize(24, "w")}px;
`;
export const BannerCard = styled(CardMedia)`
  height: ${rsize(235, "w")}px;
  width: ${rsize(290, "w")}px;
  justify-content: space-between;
  border-radius: ${rsize(30, "w")}px;
`;
export const BannerContent = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: ${rsize(17, "w")}px ${rsize(19, "w")}px ${rsize(19, "w")}px
    ${rsize(19, "w")}px;
`;
export const BalanceCard = styled(CardMedia)`
  height: ${rsize(100, "w")}px;
  width: ${rsize(327, "w")}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 ${rsize(21, "w")}px 0 ${rsize(21, "w")}px;
`;
export const Rectangle = styled.View`
  position: absolute;
  width: ${rsize(73.78, "w")}px;
  height: ${rsize(73.78, "w")}px;
  left: ${rsize(23.66, "w")}px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: ${rsize(5, "w")}px;
  transform: rotate(45deg);
`;
export const Rectangle2 = styled(Rectangle)`
  left: ${rsize(-11, "w")}px;
`;
export const BalanceButton = styled(TouchableHighlight)`
  height: ${rsize(45, "w")}px;
  width: ${rsize(45, "w")}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(23, "w")}px;
  background: ${(props) => props.theme.colors.buttonSecondary};
  border: ${rsize(2, "w")}px solid rgba(255, 255, 255, 0.4);
`;
export const BalanceTitle = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.md}px;
  color: ${(props) => props.theme.colors.textLight};
`;
export const BalanceCash = styled(BalanceTitle)`
  max-height: ${rsize(80, "w")}px;
  max-width: ${rsize(180, "w")}px;
  font-size: ${(props) => props.theme.fontSizes.xl - 2}px;
  line-height: ${(props) => props.theme.fontSizes.xl + 1}px;
`;
export const ActionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ActionCard = styled(CardMedia)`
  height: ${rsize(71, "w")}px;
  width: ${rsize(156, "w")}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${rsize(15, "w")}px;
  border-radius: ${rsize(20, "w")}px;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const ActionCard2 = styled(ActionCard)`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;
export const ActionTitle = styled(TextBold)`
  height: 100%;
  width: 100%;
  flex: 2;

  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.sm}px;
  text-align-vertical: center;
`;
export const ActionIcon = styled(SvgUri).attrs({ stroke: "#fff" })`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const CardMediaContainer = styled(CardMedia)`
  height: ${rsize(156, "w")}px;
  width: ${rsize(156, "w")}px;
  margin-top: ${rsize(15, "w")}px;
  background-color: ${(props) => props.theme.colors.textSecondary};
`;
export const BackgroundMedia = styled.ImageBackground`
  height: ${rsize(156, "w")}px;
  width: ${rsize(156, "w")}px;
  align-items: center;
  justify-content: flex-end;
  border-radius: ${rsize(20, "w")}px;
  padding: 0 ${rsize(12, "w")}px ${rsize(12, "w")}px ${rsize(12, "w")}px;
`;
export const MediaButton = styled.TouchableHighlight.attrs({
  underlayColor: "rgba(224, 224, 224, 0.950)"
})`
  height: ${rsize(38, "w")}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10, "w")}px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
`;
export const CardMediaTitle = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  color: ${(props) => props.theme.colors.textColor};
`;
export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: ${rsize(46, "w")}px;
  width: ${rsize(189, "w")}px;
`;
export const BannerImage = styled.Image`
  height: ${rsize(131, "w")}px;
  width: ${rsize(290, "w")}px;
  border-top-left-radius: ${rsize(30, "w")}px;
  border-top-right-radius: ${rsize(30, "w")}px;
`;
export const BannerTitle = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.xl + 2}px;
  line-height: ${(props) => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
`;
export const BannerDescription = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.lg}px;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
`;
export const IconCash = styled(Feather).attrs({
  name: "dollar-sign",
  size: rsize(24, "w"),
})`
  height: ${rsize(45, "w")}px;
  width: ${rsize(45, "w")}px;
  text-align: center;
  text-align-vertical: center;
  color: ${(props) => props.theme.colors.textLight};
`;
export const IconPlus = styled(Feather).attrs({
  name: "plus",
  size: rsize(24, "w"),
})`
  color: ${(props) => props.theme.colors.secondary};
`;
export const IconSeacrh = styled(Feather).attrs({
  name: "search",
  size: rsize(24, "w"),
})`
  color: ${(props) => props.theme.colors.textLight};
`;
export const IconBell = styled(Feather).attrs({
  name: "bell",
  size: rsize(24, "w"),
})`
  color: ${(props) => props.theme.colors.textLight};
`;
