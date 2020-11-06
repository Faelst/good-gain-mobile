import React from 'react';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Button as ButtonComponent } from '../../components';
import CustomTextBase from '../../components/CustomTextBase';
import TextBold from '../../components/TextBold';

import background from '../../images/background.jpg';
import logo from '../../images/logo.png';
import { rsize } from '../../utils/size';

export const Background = styled.ImageBackground.attrs({
  source: background
})`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain'
})`
  height: ${rsize(93)}px;
  align-self: center;
  margin-top: ${rsize(-8)}px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${rsize(46)}px;
`;

export const Header = styled.SafeAreaView``;

export const Form = styled.View`
  justify-content: flex-end;
  background-color: #fff;
  border-top-left-radius: ${rsize(25)}px;
  border-top-right-radius: ${rsize(25)}px;
  padding-top: ${rsize(25)}px;
`;

export const TitleContainer = styled.View`
  margin-bottom: ${rsize(24)}px;
`;

interface ITitleProps {
  bold?: boolean | number;
}

export const Title = styled(CustomTextBase)<ITitleProps>`
  color: #303030;
  font-size: ${(props) => props.theme.fontSizes.xxl}px;
  text-align: center;
  margin-bottom: ${rsize(9)}px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const Text = styled(CustomTextBase)`
  color: #303030;
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  text-align: center;
  margin-top: ${rsize(24)}px;
  margin-bottom: ${rsize(18)}px;
`;

export const SubTitle = styled(CustomTextBase)<ITitleProps>`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  text-align: center;
`;

const ButtonText = styled(TextBold)<any>`
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.lg}px;
`;

const ButtonTextLink = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.sm}px;
`;

const CustomButton: React.FC<any> = ({ children, ...props }) => {
  return (
    <ButtonComponent {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonComponent>
  );
};

const CustomButtonLink: React.FC<any> = ({ children, ...props }) => {
  return (
    <ButtonComponent {...props}>
      <ButtonTextLink>{children}</ButtonTextLink>
    </ButtonComponent>
  );
};

export const Button = styled(CustomButton)`
  margin-top: ${rsize(21)}px;
  margin-bottom: ${rsize(21)}px;
`;

export const ButtonLink = styled(CustomButtonLink)`
  height: auto;
  background-color: transparent;
  margin-bottom: ${rsize(38)}px;
`;

export const ButtonSignUpText = styled(CustomTextBase)<any>`
  font-size: ${(props) => props.theme.fontSizes.md}px;
  text-align: center;
`;

export const ButtonSignUp = styled(ButtonComponent)`
  margin-bottom: ${rsize(33)}px;
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
  name: props.open ? 'eye' : 'eye-off'
}))`
  color: #8d97b5;
`;
