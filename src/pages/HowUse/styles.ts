import styled from 'styled-components/native';
import CustomTextBase from '../../components/CustomTextBase';
import CustomBannerBase from '../../components/CustomBanner';
import { rsize } from '../../utils/size';
import TextBold from '../../components/TextBold';

export const Container = styled.View`
  flex: 1;
  width: ${rsize(333)}px;
  align-self: center;
`;
export const CustomBanner = styled(CustomBannerBase)`
  height: ${rsize(154)}px;
  width: ${rsize(333)}px;
  margin-top: ${rsize(21)}px;
  align-self: center;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xxl-2}px;
  color: ${props => props.theme.colors.primary};

  margin-top: ${rsize(20)}px;
`;
export const Text = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md+1}px;
  color: ${props => props.theme.colors.subtitle};

  margin-top: ${rsize(13)}px;
  margin-bottom: ${rsize(21)}px;
`;
