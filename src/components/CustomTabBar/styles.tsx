import styled, { css } from 'styled-components/native';
import { rsize } from '../../utils/size'
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${rsize(16, "w")}px ${rsize(25, "w")}px 0 ${rsize(25, "w")}px;
`
export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  border-radius: ${rsize(50, "w")}px;
`
interface TabTextLabelProps {
  isFocused: boolean
}
export const TabTextLabel = styled(Animated.Text)<TabTextLabelProps>`
  min-height: ${rsize(31, "w")}px;
  min-width: ${rsize(75, "w")}px;

  border-width: ${rsize(1, "w")}px;
  border-color:${props => props.isFocused ? "#33C899" : 'rgba(138, 149, 158, 0.25)'};
  border-radius: ${rsize(50, "w")}px;
  padding-left: ${props => props.isFocused ? rsize(7, "w") : rsize(10, "w")}px;
  padding-right: ${props => props.isFocused ? rsize(7, "w") : rsize(10, "w")}px;

  background-color: ${
    props => props.isFocused
    ? "#33C899"
    : props.theme.colors.backgroundLigth
  };

  font-family: ${props => props.isFocused ? "Montserrat-Bold" : "Montserrat"};
  font-size: ${props => props.theme.fontSizes.xs + 1}px;
  line-height: ${props => props.theme.fontSizes.xxl}px;
  color: ${props => props.isFocused ? "#FFFFFF" : "#8D97B5"};
  text-align: center;
  text-align-vertical: center;
`
