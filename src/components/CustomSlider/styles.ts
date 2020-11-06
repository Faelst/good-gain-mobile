import styled from 'styled-components/native';
import { rsize } from '../../utils/size';
import CustomTextBase from '../CustomTextBase';
import TextBold from '../TextBold';

export const ItemContainerWidth = 45;

export const Container = styled.View`
  height: ${rsize(61)}px;
  flex-direction: row;
  margin: 0 ${rsize(24)}px;
`;
export const ListContainer = styled.View`
  flex: 1;
  background-color: #f4f4fe;
  height: ${rsize(61)}px;
`;

export const List = styled.ScrollView`
  height: ${rsize(61)}px;
  /* background-color: red; */
`;

export const Item = styled.View`
  height: ${rsize(41)}px;
  width: ${rsize(ItemContainerWidth)}px;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
`;
export const ItemText = styled(CustomTextBase)`
  color: #333;
  font-size: ${(props) => props.theme.fontSizes.xs}px;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid #8d97b5;
  width: ${rsize(80, 'w')}px;
  border-radius: ${rsize(4)}px;
  margin-left: ${rsize(6)}px;
`;
export const Value = styled(TextBold)`
  color: #000;
  font-size: ${(props) => props.theme.fontSizes.lg}px;
`;
export const Prefix = styled(CustomTextBase)`
  color: #000;
  font-size: ${(props) => props.theme.fontSizes.sm}px;
`;
