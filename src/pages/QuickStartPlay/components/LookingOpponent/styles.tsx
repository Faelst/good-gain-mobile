import styled from 'styled-components/native';
import TextBold from "../../../../components/TextBold";
import CustomTextBase from '../../../../components/CustomTextBase';
import { rsize } from "../../../../utils/size";

import imLoading from '../../../../images/im_loading.png'

export const Container = styled.View`
  width: 100%;
  align-items: center;
`
export const Title = styled(TextBold)`
  height: ${rsize(55)}px;
  width: ${rsize(240)}px;
  margin-top: ${rsize(47)}px;

  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const AnimationView = styled.View`
  height: ${rsize(105)}px;
  width: ${rsize(105)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${rsize(32)}px;
`
export const Span = styled(CustomTextBase)`
  margin-top: ${rsize(28)}px;
  margin-bottom: ${rsize(93)}px;

  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
`
