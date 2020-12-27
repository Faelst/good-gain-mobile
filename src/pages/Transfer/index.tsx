import React from 'react';
import { Container, Title, Span, Button, TextButton, Footer } from './styles';

import ContainerModel from '../../components/ContainerProfile'
import CustomButton from './components/CustomButton'
import { separatorVertical } from '../../utils/separator'
import { useNavigation } from '@react-navigation/native';

import imSantander from '../../images/logo_santander.png'
import imItau from '../../images/logo_itau.png'
import imBradesco from '../../images/logo_bradesco.png'
import imNubank from '../../images/logo_nu.png'
import { BorderlessButton } from 'react-native-gesture-handler';

const dataBank = [
  { 
    name: "santander",
    image: imSantander,
    dealer: "Tiago Hadd",
    ag: "0492",
    cc: "01003594-3",
    cpf: "312.235.235-55",
  },
  { 
    name: "itau",
    image: imItau,
    dealer: "Samuel Hadd",
    ag: "0492",
    cc: "01003594-3",
    cpf: "312.235.235-55",
  },
  { 
    name: "bradesco",
    image: imBradesco,
    dealer: "Rodrigo Hadd",
    ag: "0492",
    cc: "01003594-3",
    cpf: "312.235.235-55",
  },
  { 
    name: "nubank",
    image: imNubank,
    dealer: "Matheus Hadd",
    ag: "0492",
    cc: "01003594-3",
    cpf: "312.235.235-55",
  },
]

const Transfer: React.FC = () => {
  const [isSelected, setSelected] = React.useState()
  const [isSelectedItem, setSelectedItem] = React.useState({})

  const navigation = useNavigation()

  const handleBankSelected = (index: number | any, item?: any) => {
    setSelected(index)
    setSelectedItem({item})
  }

  const handleToNavigation = () => {
    navigation.navigate("TransferBank", isSelectedItem)
  }

  return (
    <>
      <ContainerModel
        background="green"
        title="Colocar crédito"
        goBack="Wallet"
      >
        <Container>
        <Title>Transferência bancária</Title>
        <Span>Escolha abaixo um banco:</Span>

        {dataBank.map((item, index, array) => (
          <CustomButton
            key={index}
            style={separatorVertical(index, array, 40, 20, 0)}
            source={item.image}
            selected={index === isSelected ? true : false}
            isFocused={isSelected === undefined ? true : false}
            onPress={() => handleBankSelected(index, item)}
          />
        ))}

        </Container>
      </ContainerModel>
      <Footer>
        <Button
          onPress={handleToNavigation}
          disabled={isSelected === undefined ? true : false}
        >Próximo passo
        </Button>
        <BorderlessButton onPress={navigation.goBack}>
          <TextButton>Voltar</TextButton>
        </BorderlessButton>
      </Footer>
    </>
  )
}

export default Transfer;