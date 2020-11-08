import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { rsize } from '../utils/size'

export const Container = styled(RectButton)`
  height: ${rsize(48, "w")}px;
  width: ${rsize(48, "w")}px;
  
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border-radius: ${rsize(20, "w")}px;
`

export default Container