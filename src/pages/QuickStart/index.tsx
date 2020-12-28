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
} from './styles'

import banner from '../../images/bn_games_a1.png'
import CardMedia from '../../components/CardMedia'
import { useNavigation } from '@react-navigation/native'

const dataWin = [
  {
    id: 1,
    cashback: 8.00,
    subscription: 5.00,
  },
  {
    id: 2,
    cashback: 24.00,
    subscription: 15.00,
  },
]

const QuickStart: React.FC = () => {
  const navigation = useNavigation()

  const handlePlay = () => {
    navigation.navigate("QuickStartPlay")
    console.log("QuickStartPlay")
  }

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header source={banner}>
          <TextView>
            <HeaderTitleMD>Ultimate Team</HeaderTitleMD>
            <HeaderTitleXL>FIFA 20</HeaderTitleXL>
            <HeaderTitleMD>PS5</HeaderTitleMD>
          </TextView>
        </Header>

        <Title>Partida rapida</Title>
        <Description>
          Escolha abaixo uma sala de acordo com o valor que você deseja receber por vitória.
        </Description>

        {dataWin.map((item) => (
          <CardMedia
            key={item.id}
            value1={item.cashback.toString() + ",00"}
            value2={item.subscription.toString() + ",00"}
            onPress={handlePlay}
          />
        ))}
      </ScrollView>
    </Container>
  )
}

export default QuickStart