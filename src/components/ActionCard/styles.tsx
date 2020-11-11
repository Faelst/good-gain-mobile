import styled, { css } from 'styled-components/native';
import { CardMedia } from '../../components/CustomCard'
import SvgUri from "expo-svg-uri";
import TextBold from '../../components/TextBold'
import { rsize } from '../../utils/size'

interface ContainerProps {
  width?: number
  backgroundColor?: "primary" | "secondary"
}
export const Container = styled(CardMedia)<ContainerProps>`
  height: ${rsize(71, "w")}px;
  width: ${props => props.width ? rsize(props.width) : rsize(156)}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${rsize(15, "w")}px;
  border-radius: ${rsize(20, "w")}px;
  ${props => props.backgroundColor === "secondary" ?
  css`
    background-color: ${props => props.theme.colors.backgroundSecondary};
  ` :
  css`
    background-color: ${props => props.theme.colors.backgroundPrimary};
  `};
`
export const ActionTitle = styled(TextBold)`
  height: 100%;
  width: 100%;
  flex: 2;

  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  text-align-vertical: center;
`
export const ActionImage = styled(SvgUri)`
  flex: 1;
  max-width: ${rsize(59, "w")}px;
  align-items: center;
  justify-content: center;
`
