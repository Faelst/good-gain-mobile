import React from "react";
import { Container, Title, AnimationView, Span } from "./styles";

import LottieView from 'lottie-react-native';
import { rsize } from '../../../../utils/size'

const WaitingOpponent: React.FC = () => {
  return (
    <Container>
      <Title>Estamos aguardando o adversário aceitar.</Title>
      <AnimationView>
        <LottieView
          style={{height: rsize(205), width: rsize(205)}}
          source={require('../../../../images/loading.json')}
          autoPlay
          loop
        />
      </AnimationView>
      <Span>Aguarde um instante.</Span>
    </Container>
  );
};

export default WaitingOpponent;
