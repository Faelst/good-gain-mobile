import React from 'react'
import { ScrollView } from 'react-native'

import {
  Container,
  BackButton,
  Header,
  TextView,
  HeaderTitleMD,
  HeaderTitleXL,
  Title,
  Description,
  Details1,
  Details2,
  Strong,
  Footer,
  CheckboxView,
  Checkbox,
  Span,
  SpanUnderline,
} from './styles'

import banner from '../../images/bn_games_a2.png'
import Button from '../../components/ButtonGradient'
import { useNavigation } from '@react-navigation/native'
import CustomModal from '../../components/CustomModal'
import ModalContent from './components/ModalContent'

const Play: React.FC = () => {
  const [isChecked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation()

  const toggleChecked = () => {
    setChecked(!isChecked)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <ScrollView>
      <Container>
        <Header source={banner}>
          <BackButton onPress={() => navigation.goBack()} />
          <TextView>
            <HeaderTitleMD>Ultimate Team</HeaderTitleMD>
            <HeaderTitleXL>FIFA 20</HeaderTitleXL>
            <HeaderTitleMD>PS5</HeaderTitleMD>
          </TextView>
        </Header>

        <Title>Confie na sua habilidade e siga em frente.</Title>
        <Description>
        A melhor forma de jogar, se divertir e lucrar.
Coloque seu time em campo, vença
a partida e ganhe dinheiro.
        </Description>

        <Details1>
          <Strong>Taxa de inscrição</Strong>
          <Strong>R$5,00</Strong>
        </Details1>
        <Details2>
          <Strong>Sua vitória vale</Strong>
          <Strong>R$8,00</Strong>
        </Details2>

        <Footer>
          <CheckboxView>
            <Checkbox onPress={toggleChecked} checked={isChecked}/>
            <Span>
              {`Li e concordo com o `}
              <SpanUnderline onPress={() => alert("Regulamento")}
              >Regulamento.
              </SpanUnderline>
            </Span>
          </CheckboxView>
          <Button
            onPress={toggleModal}
            disabled={!isChecked}
          >Encontre seu adversário
          </Button>
        </Footer>

        <CustomModal
          onClose={toggleModal}
          isVisible={isModalVisible}
        >
          <ModalContent/>
        </CustomModal>
      </Container>
    </ScrollView>
  )
}

export default Play