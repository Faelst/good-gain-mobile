import React from 'react';
import { ViewProps } from 'react-native'
import { Container, Label, Title } from './styles';

interface ICustomTitle extends ViewProps{
  label?: string,
  value?: string,
}
const CustomTitle: React.FC<ICustomTitle> = ({label, value, ...props}) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      <Title>{value}</Title>
    </Container>
  )
}

export default CustomTitle;