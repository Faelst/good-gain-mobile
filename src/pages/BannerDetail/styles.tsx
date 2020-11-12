import styled from 'styled-components/native';
import { StatusBar } from 'react-native'
import TextBold from '../../components/TextBold/'
import CustomTextBase from '../../components/CustomTextBase/'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${StatusBar.currentHeight}px;
  padding-Bottom: ${rsize(51)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const Title = styled(TextBold)`
  margin-top: ${rsize(22.38)}px;

  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  line-height: ${props => props.theme.fontSizes.xxl - 2}px;
  color: ${props => props.theme.colors.textColor};
`;
export const ImageBackground = styled.ImageBackground`
  height: ${rsize(221)}px;
  width: 100%;
  align-items: flex-end;
  padding: ${rsize(24)}px ${rsize(24)}px 0 0;
  border-bottom-left-radius: ${rsize(30)}px;
  border-bottom-right-radius: ${rsize(30)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const IconX = styled(Feather).attrs({
  name: "x",
  size: rsize(24),
})`
  color: ${props => props.theme.colors.textColor};
`;
export const Description = styled(CustomTextBase)`
  height: ${rsize(67)}px;
  width: ${rsize(321)}px;
  margin-top: ${rsize(14)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
`;
export const DescriptionBold = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  color: ${props => props.theme.colors.textColor};
`;
export const Image = styled.ImageBackground`
  height: ${rsize(185)}px;
  width: ${rsize(333)}px;
  border-radius: ${rsize(20)}px;
  margin: ${rsize(24)}px ${rsize(21)}px 0 ${rsize(21)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const TextButton = styled(CustomTextBase)`
  margin-top: ${rsize(17)}px;
  margin-bottom: ${rsize(109)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
  text-decoration-line: underline;
`;
export const ButtonTextStart = styled(TextBold)`
  text-align-vertical: center;
  font-size: ${props => props.theme.fontSizes.md}px;
`;
