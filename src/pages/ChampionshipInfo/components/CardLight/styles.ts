import styled from 'styled-components/native';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  min-height: ${rsize(71)}px;
  width: ${rsize(156)}px;
  border-radius: ${rsize(20)}px;
  justify-content: center;
  padding-left: ${rsize(14)}px;
  margin-bottom: ${rsize(15)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
  elevation: 1;
`;
export const Strong = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.textColor};
`;
export const Span = styled(Strong)`
  color: ${props => props.theme.colors.primary};
`;
