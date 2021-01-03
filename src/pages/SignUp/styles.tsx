import React from "react";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { Button as ButtonComponent } from "../../components";
import CustomTextBase from "../../components/CustomTextBase";
import TextBold from "../../components/TextBold";

import logo from "../../images/ic_logo.png";
import { rsize } from "../../utils/size";
import ButtonGradient from "../../components/ButtonGradient";

export const Background = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "contain",
})`
  height: ${rsize(93)}px;
  align-self: center;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  padding-top: ${rsize(15)}px;
  margin-top: ${rsize(20)}px;
  background-color: #fff;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
`;

export const TitleContainer = styled.View`
  margin-top: ${rsize(18)}px;
  margin-bottom: ${rsize(10)}px;
  padding: 0 ${rsize(24)}px;
`;

interface ITitleProps {
  bold?: boolean | number;
}
export const Title = styled(TextBold)<ITitleProps>`
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.xl}px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const Text = styled(CustomTextBase)<ITitleProps>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  padding: 0 ${rsize(24)}px;
  margin-bottom: ${rsize(21)}px;
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

export const Button = styled(ButtonGradient)`
  margin-top: ${rsize(68)}px;
`;

export const ButtonSignUpText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  text-align: center;
`;

export const ButtonSignUp = styled(ButtonComponent)`
  margin-bottom: ${rsize(27)}px;
  margin-top: ${rsize(30)}px;
  height: auto;
  font-weight: 400;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.md}px;
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
  font-size: ${(props) => props.theme.fontSizes.md}px;
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

export const CheckBox = styled.View`
  margin-top: ${rsize(17)}px;
  margin-bottom: ${rsize(20)}px;
`;
