import styled from 'styled-components/native';
import TextBold from './TextBold'
import { rsize } from '../utils/size'

const CustomTag = styled(TextBold)`
  height: ${rsize(16, "w")}px;

  border-radius: ${rsize(3, "w")}px;
  color: #FFFFFF;
  background-color: #FFA800;

  font-size: ${props => props.theme.fontSizes.xxs}px;
  line-height: ${props => props.theme.fontSizes.xs}px;
  text-align: center;
  text-align-vertical: center;
`
export default CustomTag
