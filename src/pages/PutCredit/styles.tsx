import React from 'react'
import styled from 'styled-components/native';
import ButtonGradientBase from '../../components/ButtonGradient'
import TextBold from '../../components/TextBold';
import { rsize } from '../../utils/size';

export const Image = styled.Image`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  align-self: center;
  border-radius: ${rsize(40)}px;
  margin-top: ${rsize(29)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const Description = styled.Text`
  width: ${rsize(327)}px;
  align-self: center;
  margin-top: ${rsize(101)}px;

  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.xxl-3}px;
  line-height: ${props => props.theme.fontSizes.xxl+3}px;
  text-align: center;
`; 
export const ButtonGradient = styled(ButtonGradientBase)`
  height: ${rsize(71)}px;
  width: ${rsize(299)}px;
  align-self: center;
  border-radius: ${rsize(20)}px;
  margin-top: ${rsize(48)}px;
`;
export const ButtonText = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl-2}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Logo = styled.Image`
  height: ${rsize(71)}px;
  width: ${rsize(299)}px;
  align-self: center;
  border-radius: ${rsize(20)}px;
  margin-top: ${rsize(46)}px;
  margin-bottom: ${rsize(46)}px;
`;
