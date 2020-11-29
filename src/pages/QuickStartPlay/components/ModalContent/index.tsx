import React from 'react'
import {
  Container,
} from './styles'

import LookingOpponent from '../LookingOpponent'
import OpponentFound from '../OpponentFound'
import WaitingOpponent from '../WaitingOpponent'
import ChallengeAccepted from '../ChallengeAccepted'

interface ModalItemProps {
  onPress?: () => void
}
const ModalContent: React.FC<ModalItemProps> = ({onPress}) => {
  return (
    <Container>
      <LookingOpponent />
    </Container>
  )
}

export default ModalContent