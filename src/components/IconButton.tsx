import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { rsize } from '../utils/size'

export const Container = styled(TouchableOpacity)`
  height: ${rsize(48, "w")}px;
  width: ${rsize(48, "w")}px;
  
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: ${rsize(20, "w")}px;
`

export default Container