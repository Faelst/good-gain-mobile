import React from "react";
import { Container, Title, Image, Span } from "./styles";

const WaitingOpponent: React.FC = () => {
  return (
    <Container>
      <Title>Estamos aguardando o adversário aceitar.</Title>
      <Image />
      <Span>Aguarde um instante.</Span>
    </Container>
  );
};

export default WaitingOpponent;
