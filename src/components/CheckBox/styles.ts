import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import CustomTextBase from '../CustomTextBase';
import { rsize } from '../../utils/size';

export const Container = styled.View`
  flex-direction: row;
  padding: 0 ${rsize(24)}px;
`;

export const Text = styled(CustomTextBase)`
  font-size: ${(props) => props.theme.fontSizes.xs}px;
`;

export const Check = styled.View<{ checked: boolean }>`
  height: ${rsize(20)}px;
  width: ${rsize(20)}px;
  border-radius: ${rsize(10)}px;
  margin-right: ${rsize(10)}px;
  border: 1px solid ${(props) => props.theme.colors.textColor};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary : '#fff'};
`;

export const CheckIcon = styled(Feather)``;
