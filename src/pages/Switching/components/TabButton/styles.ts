import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import TextGradient from '../../../../components/TextGradient';
import { rsize } from '../../../../utils/size';

interface ICustomButton {
  selected?: boolean,
  isFocused?: boolean,
}
export const Container = styled.View<ICustomButton>`
  height: ${props => props.selected ? rsize(54-6) : rsize(54)}px;
  width: ${props => props.selected ? rsize(122-6) : rsize(122)}px;
  border-radius: ${rsize(15)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const BorderGradient = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))<ICustomButton>`
  border-radius: ${rsize(17)}px;
  padding: ${props => props.selected ? rsize(3) : 0}px;
`;
export const Text = styled(TextGradient).attrs({
  fontSize: rsize(20),
  textAlign: "center",
})<ICustomButton>`
`;
export const TextUnselected = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.lg+2}px;
  color: ${props => props.theme.colors.subtitle};
`;
