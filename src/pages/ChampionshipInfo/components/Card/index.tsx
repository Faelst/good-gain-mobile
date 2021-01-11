import React from 'react';
import { ViewProps } from 'react-native';

import { Container, LinearGradient, Strong, Span } from './styles';

interface ICard extends ViewProps {
  title: string
  subtitle: string
  color?: "green"
}
const Card: React.FC<ICard> = ({title, subtitle, color, ...props}) => {
  return (
    <Container color={color} {...props}>
      <LinearGradient color={color}>
        <Strong>{title}</Strong>
        <Span>{subtitle}</Span>
      </LinearGradient>
    </Container>
  )
}

export default Card;