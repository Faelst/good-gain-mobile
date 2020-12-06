import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import CustomTextBase from '../CustomTextBase';
import { rsize } from '../../utils/size';

export const Container = styled.View`
  width: ${rsize(325)}px;
  align-self: center;
  margin-top: ${rsize(15)}px;
`;
export const View = styled.View`
  height: ${rsize(55)}px;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  padding-left: ${rsize(22)}px;
  padding-right: ${rsize(22)}px;
  align-items: center;
  border-radius: ${rsize(27.5)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`;
export const Label = styled(CustomTextBase)`
  height: ${rsize(27)}px;
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.fontFamily.textMedium};
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: ${rsize(27)}px;
  margin-bottom: ${rsize(5)}px;
`;
export const Text = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;

  flex: 1;
`;
export const Image = styled.Image`
  height: ${rsize(24)}px;
  width: ${rsize(24)}px;
  border-radius: ${rsize(5)}px;
  margin-left: ${rsize(12)}px;
`;
export const Icon = styled(Feather).attrs({
  name: "camera",
  size: rsize(24)
})`
  color: ${props => props.theme.colors.textColor};
`;
