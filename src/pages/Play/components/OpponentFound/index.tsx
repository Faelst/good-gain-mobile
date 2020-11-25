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

      <Title>Adversário encontrado.</Title>
      <Span>Clique no botão abaixo para desafia-lo e iniciar a partida.</Span>
      <Button>Enviar desafio</Button>
    </Container>
  )
}

export default ModalContent