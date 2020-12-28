import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components'

import { Container, Strong } from './styles';

export interface ICardThin extends ViewProps {
  title?: string,
  value?: string,
  color?: "gradient" | "green" | "black"
}
const CardThin: React.FC<ICardThin> = ({title, value, color, ...props}) => {
  const theme = useTheme()

  return (
    <Container
      colors={
        color ?
        color === "gradient" && theme.colors.gradient ||
        color === "green" && [theme.colors.secondary, theme.colors.secondary] ||
        color === "black" && [theme.colors.dark, theme.colors.dark]
        : theme.colors.gradient
      }
      {...props}
    >
      <Strong>{title}</Strong>
      <Strong>{value}</Strong>
    </Container>
  )
}

export default CardThin;