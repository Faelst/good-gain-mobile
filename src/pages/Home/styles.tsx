import styled from "styled-components/native";
import { CardMedia } from "../../components/CustomCard";
import { LinearGradient } from "expo-linear-gradient";
import CustomTextBase from "../../components/CustomTextBase";
import TextBold from "../../components/TextBold";
import logo from "../../images/logo_horizontal_2.png";
import { Feather } from "@expo/vector-icons";
import TextGradientBase from '../../components/TextGradient'
import { rsize } from "../../utils/size";
import { Button } from "../../components/index";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${props => props.theme.StatusBarHeight}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const Header = styled(LinearGradient).attrs((props) => ({
  colors: props.theme.colors.gradient,
}))`
  height: ${rsize(181)}px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${rsize(24)}px ${rsize(8)}px 0 ${rsize(30)}px;
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
export const AppBarButton = styled(BorderlessButton)`
  height: ${rsize(45)}px;
  width: ${rsize(45)}px;
  align-items: center;
  justify-content: center;
  margin-right: ${rsize(4)}px;
  border-radius: ${rsize(25)}px;
`;
export const MainContent = styled.View`
  flex: 1;
  margin-top: ${rsize(-88)}px;
  padding-bottom: ${rsize(42)}px;
`;
export const Padding = styled.View`
  padding: ${rsize(24)}px ${rsize(24)}px 0 ${rsize(24)}px;
`;
export const BannerCard = styled(CardMedia)`
  height: ${rsize(235)}px;
  width: ${rsize(290)}px;
  justify-content: space-between;
  border-radius: ${rsize(30)}px;
`;
export const BannerContent = styled.View`
  flex: 1;
  justify-content: space-between;
  margin:
  ${rsize(17)}px
  ${rsize(19)}px
  ${rsize(19)}px
  ${rsize(19)}px;
`;
export const BalanceCard = styled(CardMedia)`
  height: ${rsize(100)}px;
  width: ${rsize(327)}px;

  overflow: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 ${rsize(21)}px 0 ${rsize(21)}px;
`;
export const Rectangle = styled.View`
  position: absolute;
  width: ${rsize(73.78)}px;
  height: ${rsize(73.78)}px;
  left: ${rsize(23.66)}px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: ${rsize(5)}px;
  transform: rotate(45deg);
`;
export const Rectangle2 = styled(Rectangle)`
  left: ${rsize(-11)}px;
`;
export const ViewButton = styled.View`
  height: ${rsize(45)}px;
  width: ${rsize(45)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(23)}px;
  background: ${(props) => props.theme.colors.buttonSecondary};
  border: ${rsize(2)}px solid rgba(255, 255, 255, 0.4);
`;
export const BalanceTitle = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.md}px;
  color: ${(props) => props.theme.colors.textLight};
`;
export const BalanceCash = styled(BalanceTitle)`
  max-height: ${rsize(80)}px;
  max-width: ${rsize(180)}px;
  font-size: ${(props) => props.theme.fontSizes.xl - 2}px;
  line-height: ${(props) => props.theme.fontSizes.xl + 1}px;
`;
export const ActionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const BackgroundMedia = styled.ImageBackground`
  height: ${rsize(156)}px;
  width: ${rsize(156)}px;
  align-items: center;
  justify-content: flex-end;
  border-radius: ${rsize(20)}px;
  margin-top: ${rsize(15)}px;
  padding: 0 ${rsize(12)}px ${rsize(12)}px ${rsize(12)}px;
  background-color: ${(props) => props.theme.colors.textSecondary};
`;
export const MediaTextView = styled.View`
  height: ${rsize(38)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
  background-color: ${(props) => props.theme.colors.backgroundLighter};
`;
export const MediaTitle = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  color: ${(props) => props.theme.colors.textColor};
`;
export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: ${rsize(46)}px;
  width: ${rsize(189)}px;
`;
export const BannerImage = styled.Image`
  height: ${rsize(131)}px;
  width: ${rsize(290)}px;
  border-top-left-radius: ${rsize(30)}px;
  border-top-right-radius: ${rsize(30)}px;
`;
export const BannerTitle = styled(TextGradientBase).attrs(props => ({
  fontSize: props.theme.fontSizes.xl + 2,
  textAlign: "center",
}))``;

export const BannerDescription = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.lg}px;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
`;
export const IconCash = styled(Feather).attrs({
  name: "dollar-sign",
  size: rsize(24),
})`
  width: ${rsize(45)}px;
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
`;
export const IconPlus = styled(Feather).attrs({
  name: "plus",
  size: rsize(24),
})`
  color: ${(props) => props.theme.colors.secondary};
`;
export const IconSeacrh = styled(Feather).attrs({
  name: "search",
  size: rsize(24),
})`
  color: ${(props) => props.theme.colors.textLight};
`;
export const IconBell = styled(Feather).attrs({
  name: "bell",
  size: rsize(24),
})`
  color: ${(props) => props.theme.colors.textLight};
`;
