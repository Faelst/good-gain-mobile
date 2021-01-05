import React from 'react';
import CardThin from '../../../../components/CardThin';
import CustomBanner from '../../../../components/CustomBanner';
import { rsize } from '../../../../utils/size';
import image from '../../../../images/bn_home1.png'

import { Container, Title, Description, Strong, H1, Button } from './styles';

interface IAward {
  onContinues?: () => void
}
const Award: React.FC<IAward> = ({onContinues}) => {
  return (
    <Container>
      <Title variant="body1">
        {`Atualização\nda premiação..`}
      </Title>
      <Description>
        {`Este campeonato fechou uma chave
com 16 participantes incluíndo você.\n\n`}
        <Strong>A premiação para o campeão será de:</Strong>
      </Description>

      <H1>R$55,00</H1>

      <Button onPress={onContinues}>Continuar</Button>
    </Container>
  )
}

export default Award;