import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { CardMedia } from '../../../../components/CustomCard';
import TextBold from '../../../../components/TextBold';
import ButtonGradient from '../../../../components/ButtonGradient';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rsize(31)}px;
`;
export const Content = styled.View`
  margin-right: ${rsize(1)}px;
`;
export const FluxoIconLeft = styled.Image`
  height: ${rsize(84)}px;
  width: ${rsize(30)}px;
`
;
export const FluxoIconRight = styled.Image`
  height: ${rsize(84)}px;
  width: ${rsize(30)}px;
`
;
interface IBorder {
  isVisible?: boolean,
}
export const Border = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))<IBorder>`
  width: ${props => props.isVisible ? rsize(327) : rsize(321)}px;
  align-self: center;
  border-radius: ${props => props.isVisible ? rsize(23) : rsize(22)}px;
  padding: ${props => props.isVisible ? rsize(3) : 0}px;
`;
interface ICard {
  size?: boolean,
}
export const Card = styled(CardMedia)<ICard>`
  height: ${props => props.size ? rsize(62) : rsize(68)}px;
  width: ${props => props.size ? rsize(321) : rsize(327)}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding-left: ${rsize(14)}px;
  padding-right: ${rsize(15)}px;
  border-radius: ${rsize(20)}px;
`;
export const Image = styled.Image`
  height: ${rsize(40)}px;
  width: ${rsize(41)}px;
  border-radius: ${rsize(10)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const Text = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;

  margin-left: ${rsize(13)}px;
`;
export const Button = styled(ButtonGradient)`
  height: ${rsize(36)}px;
  width: ${rsize(104)}px;
  border-radius: ${rsize(10)}px;
`;
export const ButtonText = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => props.theme.colors.textLight};
`;
export const ButtonDisabled = styled.View`
  height: ${rsize(36)}px;
  width: ${rsize(104)}px;
  border-radius: ${rsize(10)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
interface IView {
  winner?: boolean,
}
export const View = styled.View<IView>`
  height: ${rsize(36)}px;
  width: ${rsize(74)}px;
  border-radius: ${rsize(10)}px;
  align-items: center;
  justify-content: center;
  background-color: ${
  props => props.winner
  ? props.theme.colors.secondary
  : props.theme.colors.backgroundSecondary
  };
`;
export const ViewEnd = styled.View`
  flex: 1;
  align-items: flex-end;
`;
