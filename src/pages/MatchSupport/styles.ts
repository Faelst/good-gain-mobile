import styled from 'styled-components/native';
import ButtonGradient from '../../components/ButtonGradient';
import CustomTextBase from '../../components/CustomTextBase';
import TextBold from '../../components/TextBold';
import { rsize } from '../../utils/size';
import CustomPicker from'../../components/CustomPicker';
import CustomImagePicker from '../../components/CustomImagePicker';
import CustomInput from '../../components/CustomInput';

export const Container = styled.ScrollView`
  width: 100%;
`;
export const Strong = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xxl - 2}px;
  line-height: ${props => props.theme.fontSizes.xxl - 2}px;
  color: ${props => props.theme.colors.primary};

  margin-top: ${rsize(17)}px;
`;
export const DescriptionContainer = styled.View`
  height: ${rsize(107)}px;
  width: ${rsize(325)}px;
  align-self: center;
  justify-content: space-between;
`;
export const Description = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md + 1}px;

  margin-top: ${rsize(17)}px;
`;
export const DescriptionStrong = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md + 1}px;
  text-decoration: underline;
`;
export const Form = styled.KeyboardAvoidingView`
  margin-top: ${rsize(15)}px;
`;
export const Picker = styled(CustomPicker)``;

export const InputMultiline = styled(CustomInput).attrs({
  height: rsize(125),
  multiline: true,
})`
  flex: none;
  width: 100%;
  margin-top: ${rsize(15)}px;
`;

export const IMGPicker = styled(CustomImagePicker)``;

export const ButtonSubmit = styled(ButtonGradient)`
  align-self: center;
  margin-top: ${rsize(16)}px;
  margin-bottom: ${rsize(30)}px;
`;
