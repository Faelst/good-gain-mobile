import styled, { css } from 'styled-components/native';
import CustomTextBase from '../CustomTextBase'
import TextBold from '../TextBold'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const CardContainer = styled.View`
  width: 100%;
  height: ${rsize(93, "w")}px;

  flex-direction: row;
  align-items: center;
  padding-left: ${rsize(10, "w")}px;
`
export const ProfileImage = styled.Image`
  height: ${rsize(72, "w")}px;
  width: ${rsize(72, "w")}px;

  margin-right: ${rsize(10, "w")}px;
  border-radius: ${rsize(36, "w")}px;
`
export const ProfileContent =styled.View`
  height: ${rsize(93, "w")}px;

  flex: 1;
  justify-content: flex-end;
  padding: ${rsize(21, "w")}px 0 ${rsize(17, "w")}px 0;
`
export const TextName = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.lg + 1}px;
  color: #303030;
`
export const AcademicText = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.xs}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  color: #8D97B5;
`
export const LocationText = styled(CustomTextBase)`
  height: ${rsize(16, "w")}px;
  width: ${rsize(101, "w")}px;

  flex-direction: row;
  border-radius: ${rsize(3, "w")}px;
  padding-left: ${rsize(4, "w")}px;
  margin-top: ${rsize(3, "w")}px;
  background-color: #FFA800;

  font-size: ${props => props.theme.fontSizes.xxs}px;
  line-height: ${props => props.theme.fontSizes.xs}px;
  text-align-vertical: center;
  color: #FFF;
`
interface DetailIconContentProps {
  detailsIcon?: boolean
}
export const DetailIconContent = styled.View<DetailIconContentProps>`
  align-items: flex-end;
  margin-right: ${rsize(15, "w")}px;
  ${props =>
    !props.detailsIcon &&
    css`
      display: none;
    `} 
`
export const IconMapPin = styled(Feather).attrs({
  name: "map-pin",
  size: rsize(10, "w"),
})`
  color: white;
`

export const IconChevronRight = styled(Feather).attrs({
  name: "chevron-right",
  size: rsize(24, "w"),
})`
  color: #8D97B5;
`
