import React from 'react'
import {
  Container,
  ImageBackground,
  LinearGradient,
  Title,
  Span,
  Button,
} from './styles'

const ModalContent: React.FC = () => {
  return (
    <Container>
      <ImageBackground>
        <LinearGradient />
      </ImageBackground>

      <Title>O desafio foi aceito.</Title>
      <Span>O valor de R$5,00 foi debitado de sua conta.</Span>
      <Button>Bora jogar!</Button>
    </Container>
  )
}

export default ModalContent