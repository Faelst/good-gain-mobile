import styled, { css } from 'styled-components/native';
import { StatusBar } from 'react-native'
import { CardMedia } from '../../components/Card'
import Customtag from '../../components/CustomTag'
import CustomTextBase from '../../components/CustomTextBase'
import TextBold from '../../components/TextBold'
import { Feather } from '@expo/vector-icons'
import background from "../../images/banner1.png"
import { LinearGradient } from 'expo-linear-gradient';
import { rsize } from '../../utils/size'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: ${StatusBar.currentHeight}px;
`
export const Header = styled.View`
  height: ${rsize(149, "w")}px;
  width: 100%;

  padding: 0 ${rsize(22, "w")}px 0 ${rsize(22, "w")}px;
  background-color: #33C899;
`
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: ${rsize(29, "w")}px;
`
export const MainContent = styled.View`
  width: 100%;

  top: ${rsize(-46, "w")}px;
`
export const Padding = styled.View`
  padding: 0 ${rsize(11, "w")}px 0 ${rsize(11, "w")}px;
`
export const Banner = styled.View`
  margin-top: ${rsize(14, "w")}px;
`
export const SectionHeader = styled.View`
  margin: ${rsize(24, "w")}px 0 ${rsize(25, "w")}px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
interface LessonsCardProps {
  fistChild?: number
}
export const LessonsCard = styled(CardMedia)<LessonsCardProps>`
  height: ${rsize(186, "w")}px;
  width: ${rsize(150, "w")}px;

  align-items: center;
  justify-content: flex-end;
  margin-right: ${rsize(12, "w")}px;
  padding-bottom: ${rsize(12, "w")}px;
  ${props =>
  props.fistChild === 0 &&
  css`
    margin-left: ${rsize(11, "w")}px;
  `}
`
export const TeacherCard = styled.View<LessonsCardProps>`
  align-items: center;
  margin-right: ${rsize(33, "w")}px;
  ${props =>
  props.fistChild === 0 &&
  css`
    margin-left: ${rsize(11, "w")}px;
  `}
`
export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  height: ${rsize(184, "w")}px;
`
export const Gradient = styled(LinearGradient).attrs({
  colors: ["#33C899", "#334399"]
})`
  position: absolute;

  height: ${rsize(184, "w")}px;
  width: 100%;

  opacity: 0.2;
  border-radius: ${rsize(15, "w")}px;
`
export const BannerContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom-left-radius: ${rsize(15, "w")}px;
  border-bottom-right-radius: ${rsize(15, "w")}px;
  padding: 0 ${rsize(12, "w")}px ${rsize(8, "w")}px ${rsize(15, "w")}px;
`
export const ProfileImage = styled.Image`
  height: ${rsize(53, "w")}px;
  width: ${rsize(53, "w")}px;

  border-radius: ${rsize(27, "w")}px;
`
export const LessonsImage = styled.Image`
  max-height: ${rsize(131, "w")}px;
  max-width: ${rsize(131, "w")}px;
`
export const TeacherImage = styled.Image`
  height: ${rsize(120, "w")}px;
  width: ${rsize(120, "w")}px;
  border-radius: ${rsize(60, "w")}px;
`
export const HeaderText = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  text-align: left;
  color: #FFF;
`
export const BannerTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  color: #FFFFFF;
`
export const BannerTag = styled(Customtag)`
  margin-top: ${rsize(5, "w")}px;
  width: ${rsize(60, "w")}px;
`
export const SectionTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  color: #303030;
`
export const TextSeeAll = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.xs}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  text-decoration-line: underline;
  color: #33C899;
`
export const LessonsTitle = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md - 1}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
  color: #303030;
`
export const LessonsDescription = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md - 1}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
  letter-spacing: ${rsize(-0.3, "w")}px;
  color: #8D97B5;

  margin-top: ${rsize(4, "w")}px;
`
export const TeacherName = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.sm - 1}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  text-align: center;
  color: #303030;

  margin-top: ${rsize(5, "w")}px;
`
export const TeacherExercise = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.xs - 1}px;
  line-height: ${props => props.theme.fontSizes.sm - 1}px;
  text-align: center;
  color: #8D97B5;

  margin-top: ${rsize(5, "w")}px;
`
export const ButtonSeeAll = styled.TouchableOpacity`
  padding: ${rsize(2, "w")}px 0 ${rsize(2, "w")}px ${rsize(2, "w")}px;
`
export const IconChevronRight = styled(Feather).attrs({
  name: "chevron-right",
  size: rsize(26, "w"),
})`
  color: white;
  margin-bottom: 3px;
`

