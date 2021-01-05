import React from 'react'
import { View } from 'react-native'
import {
  Container,
  Title,
  AnimationView,
  Span,
} from './styles'

import LottieView from 'lottie-react-native';
import { rsize } from '../../../../utils/size'

const LookingOpponent: React.FC = () => {
  return (
    <Container>
      <Title>Estamos procurando seu adversário.</Title>
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
  )
}

export default LookingOpponent