import React from 'react';
import CardThin from '../../../../components/CardThin';
import CustomBanner from '../../../../components/CustomBanner';
import { rsize } from '../../../../utils/size';
import image from '../../../../images/bn_home1.png'

import { Container, Title, Description, Button } from './styles';

const Comfirmed: React.FC = () => {
  return (
    <Container>
      <CustomBanner source={image} />
      <Title variant="body1">
        {`Parabéns!\nSua vaga no nosso\ncampeonato está garantida.`}
      </Title>
      <Description>
        Fique de olho no relógio, na central
        de notificações e faça seu check-in com
        pelo menos 10 minutos de antecedência
        do início agendado para evitar atrasos
        e desclassificação por W.O.
      </Description>

      <CardThin
        color="black"
        title="Hora de início"
        value="18:00"
      />
      <CardThin
        style={{marginTop: rsize(12)}}
        color="black"
        title="Data"
        value="20/02/2021"
      />
      <CardThin
        style={{marginTop: rsize(12)}}
        color="black"
        title="Modo do jogo"
        value="Ultimate Team"
      />

      <Button>Check-in</Button>
    </Container>
  )
}

export default Comfirmed;