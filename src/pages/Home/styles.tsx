import styled from 'styled-components/native';
import { StatusBar } from 'react-native'
import { CardMedia } from '../../components/CustomCard'
import { LinearGradient } from 'expo-linear-gradient'
import CustomTextBase from '../../components/CustomTextBase'
import TextBold from '../../components/TextBold'
import logo from '../../images/logo_horizontal_2.png'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  height: 100%;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`
export const Header = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(181, "w")}px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${rsize(24, "w")}px ${rsize(22, "w")}px 0 ${rsize(30, "w")}px;
`
export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const AppBarContent = styled.View`
  flex-direction: row;
`
export const MainContent = styled.View`
  top: ${rsize(-88, "w")}px;
`
export const BannerCard = styled(CardMedia)`
  height: ${rsize(235, "w")}px;
  width: ${rsize(290, "w")}px;
  justify-content: space-between;
  border-radius: ${rsize(30, "w")}px;
  margin-left: ${rsize(30, "w")}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`
export const BannerContent = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 
  ${rsize(17, "w")}px
  ${rsize(19, "w")}px
  ${rsize(19, "w")}px
  ${rsize(19, "w")}px;
`
export const BalanceCard = styled(CardMedia)`
  height: ${rsize(100, "w")}px;
  width: ${rsize(327, "w")}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rsize(24, "w")}px;
  margin-left: ${rsize(24, "w")}px;
  margin-right: ${rsize(24, "w")}px;
  background-color:${props => props.theme.colors.secondary};
  padding: 0 ${rsize(21, "w")}px 0 ${rsize(21, "w")}px;
`
export const BalanceButton = styled.TouchableOpacity`
  height: ${rsize(45, "w")}px;
  width: ${rsize(45, "w")}px;
  align-items: center;
  justify-content: center;
  border-radius:${rsize(23, "w")}px;
  background: ${props => props.theme.colors.buttonSecondary};
  border: ${rsize(2, "w")}px solid rgba(255, 255, 255, 0.4);
`
export const BalanceTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.textColor};
`
export const BalanceCash = styled(BalanceTitle)`
  font-size: ${props => props.theme.fontSizes.xl - 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 1}px;
`
export const ActionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
export const ActionCard = styled(CardMedia)`
height: ${rsize(71, "w")}px;
width: ${rsize(156, "w")}px;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: ${rsize(20, "w")}px;
background-color: ${props => props.theme.colors.primary};
`
export const ActionTitle = styled(TextBold)`
  height: 100%;
  flex: 2;
  flex-wrap: wrap;
  background-color: green;

  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xxs - 2}px;
  text-align-vertical: center;
`
export const ActionIcon = styled.Image`
  flex: 1;
  height: ${rsize(30, "w")}px;
  width: ${rsize(30, "w")}px;
  background-color: red;
`
export const CardMediaContainer = styled(CardMedia)`
height: ${rsize(156, "w")}px;
width: ${rsize(156, "w")}px;
align-items: center;
justify-content: flex-end;
background-color: ${props => props.theme.colors.textSecondary};
border-radius: ${rsize(20, "w")}px;
padding: 0 ${rsize(12, "w")}px ${rsize(12, "w")}px ${rsize(12, "w")}px;
`
export const BackgroundMedia = styled.Image`
`
export const CardMediaTitle = styled(TextBold)`
height: ${rsize(38, "w")}px;
width: 100%;
border-radius: ${rsize(10, "w")}px;
background-color: ${props => props.theme.colors.backgroundLighter};

font-size: ${props => props.theme.fontSizes.sm}px;
text-align: center;
text-align-vertical: center;
color: ${props => props.theme.colors.textLight};
`
export const Logo = styled.Image.attrs({
  source: logo
})`
  height: ${rsize(46, "w")}px;
  width: ${rsize(189, "w")}px;
`
export const BannerImage = styled.Image`
  height: ${rsize(131, "w")}px;
  width: ${rsize(290, "w")}px;
  border-top-left-radius: ${rsize(30, "w")}px;
  border-top-right-radius: ${rsize(30, "w")}px;
`
export const BannerTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
export const BannerDescription = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
`
export const IconCash = styled(Feather).attrs({
  name: "dollar-sign",
  size: rsize(24, "w"),
})`
  color: ${props => props.theme.colors.textColor};
`
export const IconPlus = styled(Feather).attrs({
  name: "plus",
  size: rsize(24, "w"),
})`
  color: ${props => props.theme.colors.secondary};
`