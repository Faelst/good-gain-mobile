import React from 'react';
import SimpleButton from '../../../../components/SimpleButton';
import { Container, Title, Icon, Span, Button, TextButton, } from './styles';

interface VictoryModalProps {
  sendConfirm:(event: boolean) => void;
}
const VictoryModal: React.FC<VictoryModalProps> = ({sendConfirm}) => {
  return (
    <Container>
      <Title color="primary">Seu resultado foi:</Title>
      <Icon />
      <Title color="secondary">Vitória</Title>
      <Span>
      Você confirma o envio deste resultado?
Uma vez enviado, você não poderá voltar atrás.
      </Span>
      <Button onPress={() => sendConfirm(true)}>Confirmar</Button>
      
      <SimpleButton>
        <TextButton>Voltar</TextButton>
      </SimpleButton>
    </Container>
  )
}

export default VictoryModal;