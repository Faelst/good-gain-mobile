import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Container,
  ImageBackground,
  LinearGradient,
  Title,
  Span,
  Button,
} from "./styles";

interface IChallengeAccepted {
  onPlay?(): void;
}

const ChallengeAccepted: React.FC<IChallengeAccepted> = ({ onPlay }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageBackground>
        <LinearGradient />
      </ImageBackground>

      <Title>O desafio foi aceito.</Title>
      <Span>O valor de R$5,00 foi debitado de sua conta.</Span>
      <Button onPress={() => onPlay?.()}>Bora jogar!</Button>
    </Container>
  );
};

export default ChallengeAccepted;
