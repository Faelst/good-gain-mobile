import React from 'react';

import {
  Container,
  Title,
  TitleStrong,
  View,
  Card,
  Image1,
  Image2,
  CardTitle1,
  CardTitle2,
 } from './styles';

import imageMoney from '../../../../images/icons/ic_money.png'
import { useNavigation } from '@react-navigation/native'
import SimpleButton from '../../../../components/SimpleButton';

const Header: React.FC = () => {
  const navigation = useNavigation(
    
  )
  return (
    <Container>
      <Title>Saldo</Title>
      <TitleStrong>R$500,00</TitleStrong>
      <View>
        <SimpleButton onPress={() => navigation.navigate("PutCredit")}>
          <Card>
            <Image1 source={imageMoney}/>
            <CardTitle1>Colocar crédito</CardTitle1>
          </Card>
        </SimpleButton>

        <SimpleButton>
          <Card>
            <Image2 source={imageMoney}/>
            <CardTitle2>Sacar</CardTitle2>
          </Card>
        </SimpleButton>
      </View>
    </Container>
  )
}

export default Header;