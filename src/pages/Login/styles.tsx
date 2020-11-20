import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import ButtonGradient from '../../components/ButtonGradient'
import { Button as ButtonComponent } from "../../components";
import CustomTextBase from "../../components/CustomTextBase";
import TextBold from "../../components/TextBold";

import background from "../../images/background_login.jpg";
import logo from "../../images/logo_horizontal.png";
import logoSmall from "../../images/logo_small.png";
import { rsize } from "../../utils/size";

export const Background = styled.ImageBackground.attrs({
  source: background,
  resizeMode: "cover",
})`
  width: 100%;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "contain",
})`
  width: ${rsize(335, "w")}px;
  flex: 1;
  align-self: center;
`;

export const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${rsize(51, "h")}px;
`;

export const LogoSmall = styled.Image.attrs({
  source: logoSmall,
  resizeMode: "contain",
})`
  height: ${rsize(46, "w")}px;
  width: ${rsize(46, "w")}px;
`;

export const Container = styled.View`
  margin-top: ${rsize(-51, "h")}px;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
`;

export const Form = styled.View`
  flex: 1;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;

export const TitleContainer = styled.View`
  height: ${rsize(46, "h")}px;
  width:${rsize(233, "w")}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin:
  ${rsize(30)}px
  ${rsize(25)}px
  ${rsize(30 - 14)}px
  ${rsize(25)}px;
`;

interface ITitleProps {
  bold?: boolean | number;
}
export const Title = styled(TextBold)<ITitleProps>`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xl}px;
  line-height: ${rsize(33, "h")}px;
  text-align: center;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-top: ${rsize(22, "h")}px;
  margin-bottom: ${rsize(30, "h")}px;
`;

export const ButtonSignUpText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  text-align: center;
`;

export const ButtonSignUp = styled(ButtonComponent).attrs({
  rippleColor: 'transparent'
})`
  height: auto;
  align-self: center;
  margin-bottom: ${rsize(27, "h")}px;
`;

export const ButtonForgotPass = styled(ButtonComponent).attrs({
  rippleColor: 'transparent'
})`
  height:  ${rsize(25, "h")}px;
  width:  ${rsize(143, "w")}px;
  margin-top: ${rsize(14, "h")}px;
  margin-right: ${rsize(25, "w")}px;
  align-self: flex-end;
`;

export const ButtonForgotPassText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  width: 100%;
  text-align: right;
`;

export const TitleStrong = styled(TextBold)``;

export const Strong = styled(TextBold)``;

export const EyeIcon = styled(Feather).attrs((props: any) => ({
  size: rsize(24),
  name: props.open ? "eye" : "eye-off",
}))`
  color: ${props => props.theme.colors.textSecondary};
`;
