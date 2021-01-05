import React from 'react';
import CardThin from '../../../../components/CardThin';
import { rsize } from '../../../../utils/size';

import { Container, Title, Description, Span, Button } from './styles';

interface IConfirm {
  onConfirm?: () => void
}
const Confirm: React.FC<IConfirm> = ({onConfirm}) => {
  return (
    <Container>
      <Title variant="body1">Confirmação de inscrição.</Title>
      <Description>
        Após confirmar sua inscrição, seu nome
        será adicionado na chave e o valor da
        taxa de inscrição debitado do seu saldo.
        Aguarde até o início do campeonato e
        faça check-in com pelos menos
        10 minutos de antecedência.
      </Description>

      <CardThin
        title="Taxa de inscrição"
        value="R$5,00"
      />
      <CardThin
        style={{marginTop: rsize(9)}}
        color="green"
        title="Prêmio de até"
        value="R$55,00*"
      />

      <Span>
        *Valor válido apenas se a chave atingir
        o total de 16 participantes.
      </Span>
      <Button onPress={onConfirm}>Confirmar participação</Button>
    </Container>
  )
}

export default Confirm;