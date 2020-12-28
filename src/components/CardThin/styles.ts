import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { rsize } from '../../utils/size';

export const Container = styled(LinearGradient)`
  height: ${rsize(36)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  border-radius: ${rsize(10)}px;
  padding-left: ${rsize(10)}px;
  padding-right: ${rsize(10)}px;
`;
export const Strong = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textLight};
`;