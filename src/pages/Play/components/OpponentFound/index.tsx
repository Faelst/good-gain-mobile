import React from "react";
import {
  Container,
  ImageBackground,
  LinearGradient,
  Title,
  Span,
  Button,
} from "./styles";

interface IOpponentFound {
  sendChallange?(): void;
}

const OpponentFound: React.FC<IOpponentFound> = ({ sendChallange }) => {
  return (
    <Container>
      <ImageBackground>
        <LinearGradient />
      </ImageBackground>

      <Title>Adversário encontrado.</Title>
      <Span>Clique no botão abaixo para desafia-lo e iniciar a partida.</Span>
      <Button onPress={() => sendChallange?.()}>Enviar desafio</Button>
    </Container>
  );
};

export default OpponentFound;
