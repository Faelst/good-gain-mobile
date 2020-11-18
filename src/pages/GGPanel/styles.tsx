import styled from 'styled-components/native';
import { StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { CardMedia } from '../../components/CustomCard'
import TextBold from '../../components/TextBold'
import CustomTextBase from '../../components/CustomTextBase'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Container = styled.View`
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const GradientHeader = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(90)}px;
  width: ${rsize(375)}px;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`
export const MainContent = styled.View`
  align-items: center;
  margin-top: ${rsize(-47)}px;
  padding-bottom: ${rsize(18)}px;
`
export const ProfileImage = styled.Image`
  height: ${rsize(86)}px;
  width: ${rsize(86)}px;
  border-radius: ${rsize(43)}px;
`
export const ProfileName = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  color: ${props => props.theme.colors.textColor};

  margin-top: ${rsize(15)}px;
`
export const ProfileDetailsContainer = styled.View`
  height: ${rsize(71)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rsize(20)}px;
`
export const DetailCard = styled(CardMedia)`
  height: ${rsize(71)}px;
  width: ${rsize(156)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${rsize(20)}px;
`
export const DetailContent = styled.View`
  max-height: ${rsize(71)}px;
  flex: 2;
  justify-content: center;
  margin-right: ${rsize(8)}px;
`
export const DetailImage = styled.Image.attrs({
  resizeMode: "contain",
  fadeDuration: 0
})`
  height: ${rsize(25)}px;
  width: ${rsize(25)}px;
  flex: 1;
  align-items: center;
`
export const DetailBigTitle = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.xxl + 2}px;
  line-height: ${rsize(27)}px;
  color: ${props => props.theme.colors.primary};
`
export const DetailSubtitle = styled(DetailBigTitle)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${rsize(17)}px;
`
export const SectionHeader = styled.View`
  height: ${rsize(59)}px;
  width: ${rsize(327)}px;
  justify-content: center;
`
export const SectionTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textColor};
`
export const SectionButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
interface ExpansionPanelProps {
  open?: boolean
}
export const ExpansionPanel = styled.View<ExpansionPanelProps>`
  display: ${props => props.open ? "flex" : "none"};
`
export const SectionIcon = styled(Feather).attrs<ExpansionPanelProps>(
  props => ({
  name: props.open ? "chevron-up" : "chevron-down",
  size: rsize(24)
}))`
  color: ${props => props.theme.colors.textColor};
`
export const MediaCard = styled(CardMedia)`
  height: ${rsize(223)}px;
  width: ${rsize(327)}px;
  padding: ${rsize(14)}px;
  border-radius: ${rsize(20)}px;
  justify-content: space-between;
`
export const MediaHeader = styled.View`
  flex-direction: row;
`
export const MediaImage = styled.Image`
  height: ${rsize(68)}px;
  width: ${rsize(68)}px;
  border-radius: ${rsize(10)}px;
`
export const MediaDescription = styled.View`
  height: ${rsize(69)}px;
  margin-left: ${rsize(13)}px;
  justify-content: space-between;
`
export const MediaTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textColor};

  margin-bottom: ${rsize(7)}px;
`
export const MediaTextContent = styled.View`
  width: ${rsize(220)}px;
  flex-direction: row;
  justify-content: space-between;
`
export const MediaValue = styled(TextBold)`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
`
export const MediaSubtitle = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
`
export const MediaStrong = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg - 1}px;
  color: ${props => props.theme.colors.backgroundSecondary};

  margin: ${rsize(18)}px 0 0 ${rsize(10)}px;
`
export const MediaActionContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const BackgroundImage = styled.ImageBackground`
  height: ${rsize(156)}px;
  width: ${rsize(327)}px;
  border-radius: ${rsize(20)}px;
  margin-top: ${rsize(24)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${rsize(12)}px;
`
export const BackgroundTitleContainer = styled.View`
  width: ${rsize(302)}px;
  height: ${rsize(38)}px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(10)}px;
`
export const BackgroundTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textColor};
  text-align: center;
`
export const ActionButton = styled(RectButton)`
`
export const ButtonGradient = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(36)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${rsize(8)}px;
  justify-content: space-between;
  border-radius: ${rsize(10)}px;
`
export const ActionButtonText = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  color: ${props => props.theme.colors.textLight};

  margin-left: ${rsize(10)}px;
`
export const ActionIcon = styled(Feather).attrs({
  name: "chevron-right",
  size: rsize(24)
})`
  margin-right: ${rsize(6)}px;
  color: ${props => props.theme.colors.textLight};
`
export const MediaDate = styled(MediaSubtitle)`
  font-size: ${props => props.theme.fontSizes.xs}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  color: rgba(56, 56, 56, 0.8);

  margin-top: ${rsize(-10)}px;
`
export const MediaActionButton = styled(RectButton)`
  height: ${rsize(71)}px;
  width: ${rsize(299)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(20)}px;
  background-color: ${props => props.theme.colors.secondary};
`
export const MediaActionButtonText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl - 2}px;
  color: ${props => props.theme.colors.textLight};
  text-align: left;
`
export const MediaFooterText = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.xxs}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  text-align: left;
`
