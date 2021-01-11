import styled from "styled-components/native";
import CustomBackButton from "../../components/BackButton";
import CustomContainer from "../../components/Container";
import CustomTextBase from "../../components/CustomTextBase";
import ImageGradient from "../../components/ImageGradient";
import TextBold from "../../components/TextBold";
import { rsize } from "../../utils/size";
import ic_calendar from "../../images/icons/ic_calendar.png";

export const Container = styled(CustomContainer)`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const BackButton = styled(CustomBackButton).attrs({
  name: "arrow-left",
})`
  position: absolute;
  top: ${rsize(24)}px;
  left: ${rsize(24)}px;
`;
export const Header = styled(ImageGradient).attrs({
  opacity: 0.7,
})`
  height: ${rsize(234)}px;
  width: ${rsize(375)}px;
  border-bottom-left-radius: ${rsize(20)}px;
  border-bottom-right-radius: ${rsize(20)}px;
`;
export const TextView = styled.View`
  height: ${rsize(60)}px;
  width: ${rsize(108)}px;
  position: absolute;
  left: ${rsize(26)}px;
  bottom: ${rsize(26)}px;
  justify-content: space-around;
`;
export const HeaderTitleMD = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  color: ${(props) => props.theme.colors.textLight};
`;
export const HeaderTitleXL = styled(TextBold)`
  font-size: ${(props) => props.theme.fontSizes.xxl}px;
  color: ${(props) => props.theme.colors.textLight};
`;
export const Title = styled(TextBold)`
  max-width: ${rsize(325)}px;
  align-self: flex-start;
  margin-top: ${rsize(25)}px;
  margin-left: ${rsize(26)}px;
  font-size: ${(props) => props.theme.fontSizes.xxl - 2}px;
  color: ${(props) => props.theme.colors.primary};
`;
export const Description = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${(props) => props.theme.fontSizes.md + 1}px;

  width: ${rsize(325)}px;
  align-self: center;
  flex-direction: column;
  padding-right: ${rsize(40)}px;
  /* margin-top: ${rsize(15)}px; */
  /* margin-bottom: ${rsize(18)}px; */
`;

export const Percentual = styled(TextBold)`
  font-size: ${rsize(36)}px;
  color: ${(props) => props.theme.colors.primary};
  width: ${rsize(325)}px;
  align-self: center;
  flex-direction: column;
  padding-right: ${rsize(40)}px;
`;

export const DescriptionContainer = styled.View`
  margin-top: ${rsize(10)}px;
  margin-bottom: ${rsize(10)}px;
`;

export const CalendarIcon = styled.Image.attrs({
  source: ic_calendar,
  resizeMode: "contain",
})`
  height: ${rsize(20)}px;
  width: ${rsize(20)}px;
`;

export const ChampionshipListContainer = styled.View`
  padding: 0 ${rsize(24)}px;
`;
