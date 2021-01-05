import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, Title, Icon, Span, Button, TextButton, } from './styles';

interface VictoryModalProps {
  sendConfirm:(event: boolean) => void;
  goBack?:() => void;
}
const VictoryModal: React.FC<VictoryModalProps> = ({sendConfirm, goBack}) => {
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
      
      <BorderlessButton>
        <TextButton onPress={goBack}>Voltar</TextButton>
      </BorderlessButton>
    </Container>
  )
}

export default VictoryModal;