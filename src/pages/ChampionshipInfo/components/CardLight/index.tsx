import React from 'react';
import { ViewProps } from 'react-native';

import { Container, Strong, Span } from './styles';

interface ICardLight extends ViewProps {
  title: string
  subtitle: string
}
const CardLight: React.FC<ICardLight> = ({title, subtitle, ...props}) => {
  return (
    <Container {...props}>
      <Strong>{title}</Strong>
      <Span>{subtitle}</Span>
    </Container>
  )
}

export default CardLight;