import styled, { css } from "styled-components/native";
import { CardMedia } from "../CustomCard";
import CustomTextBase from "../CustomTextBase";
import ButtonGradient from "../ButtonGradient";
import TextBold from "../TextBold";
import { rsize } from "../../utils/size";
import ic_calendar from "../../images/icons/ic_calendar.png";

export const Container = styled(CardMedia)`
  /* height: ${rsize(172)}px; */
  /* width: ${rsize(327)}px; */
  padding: ${rsize(14)}px ${rsize(10)}px ${rsize(18)}px ${rsize(10)}px;
  margin-bottom: ${rsize(15)}px;
  background-color: #fff;
  align-self: center;
  border-radius: ${rsize(20)}px;
`;
export const DescriptionContent = styled.View`
  flex-direction: row;
`;
export const Image = styled.Image`
  height: ${rsize(86)}px;
  width: ${rsize(89)}px;
  border-radius: ${rsize(10)}px;
`;

export const DateEvent = styled(CustomTextBase)`
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.sm}px;
`;

export const IcCalendar = styled.Image.attrs({
  source: ic_calendar,
  resizeMode: "contain",
})`
  height: ${rsize(16)}px;
  width: ${rsize(16)}px;
  tint-color: #383838;
  margin-right: ${rsize(5)}px;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: ${rsize(13)}px;
  justify-content: space-between;
`;
export const Title = styled(TextBold)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${(props) => props.theme.fontSizes.md}px;
`;
export const Strong = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${(props) => props.theme.fontSizes.md}px;
`;
export const StrongBig = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.xxl}px;
  line-height: ${(props) => props.theme.fontSizes.xxl}px;
  color: ${(props) => props.theme.colors.secondary};
`;
export const StrongM = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.md}px;
`;
export const Span = styled(CustomTextBase)`
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.sm}px;
`;
export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rsize(15)}px;
`;
export const Button = styled(ButtonGradient)`
  height: ${rsize(42)}px;
  width: ${rsize(179)}px;
  border-radius: ${rsize(15)}px;
`;
export const ButtonText = styled(TextBold)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${(props) => props.theme.fontSizes.lg}px;
  color: ${(props) => props.theme.colors.textLight};
`;

export const Info = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.xs}px;
  line-height: ${(props) => props.theme.fontSizes.sm}px;
  margin-top: ${rsize(10)}px;
  color: #383838;
`;
