import React from 'react';

import { Banner, Strong, Span, Footer, Button, } from './styles';
import ContainerModel from '../../components/ContainerProfile'
import { useNavigation } from '@react-navigation/native'

const TransferReceived: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ContainerModel
        title="Transferência recebida!"
        background="green"
        buttonHidden
      >
        <Banner />
        <Strong>
          A solicitação de transferência
          para sua conta foi recebida
          com sucesso!
        </Strong>
        <Span>
          {`O pedido está em análise e\n dentro de instantes será processado.`}
        </Span>
      </ContainerModel>

      <Footer>
        <Button onPress={() => navigation.navigate("Wallet")}>Certo!</Button>
      </Footer>
    </>
  )
}

export default TransferReceived;