import React from "react";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Button as ButtonComponent } from "../../components";
import CustomTextBase from "../../components/CustomTextBase";
import TextBold from "../../components/TextBold";

import background from "../../images/background.jpg";
import logo from "../../images/logo_horizontal.png";
import logoSmall from "../../images/logo_small.png";
import { rsize } from "../../utils/size";

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "contain",
})`
  flex: 1;
  align-self: stretch;
  width: ${wp("100%") - rsize(40, "w")}px;
  margin: 0 ${rsize(20, "w")}px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const LogoSmall = styled.Image.attrs({
  source: logoSmall,
  resizeMode: "contain",
})`
  height: ${rsize(46)}px;
  width: ${rsize(46)}px;
  margin-right: ${rsize(18)}px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${rsize(66)}px;
`;

export const Form = styled.View`
  justify-content: flex-end;
  background-color: #fff;
  border-top-left-radius: ${rsize(25)}px;
  border-top-right-radius: ${rsize(25)}px;
  padding-top: ${rsize(30)}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
  margin-bottom: ${rsize(30)}px;
`;

interface ITitleProps {
  bold?: boolean | number;
}
export const Title = styled(TextBold)<ITitleProps>`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xl}px;
  text-align: center;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

const ButtonText = styled(TextBold)<any>`
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.lg}px;
`;

const CustomButton: React.FC<any> = ({ children, ...props }) => {
  return (
    <ButtonComponent {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonComponent>
  );
};

export const Button = styled(CustomButton)`
  margin-top: ${rsize(21)}px;
  margin-bottom: ${rsize(21)}px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ButtonSignUpText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  text-align: center;
`;

export const ButtonSignUp = styled(ButtonComponent)`
  margin-bottom: ${rsize(33)}px;
  height: auto;
  font-weight: 400;
  background-color: transparent;
`;

export const ButtonForgotPass = styled(ButtonComponent)`
  height: auto;
  font-weight: 400;
  background-color: red;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.md}px;
  align-self: flex-end;
  padding: 5px 5px 2px;
`;

export const ButtonForgotPassText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  width: 100%;
  text-align: right;
  text-decoration: underline;
`;

export const TitleStrong = styled(TextBold)`
  color: #303030;
`;

export const Strong = styled(TextBold)``;

export const EyeIcon = styled(Feather).attrs((props: any) => ({
  size: rsize(24),
  name: props.open ? "eye" : "eye-off",
}))`
  color: #8d97b5;
`;
