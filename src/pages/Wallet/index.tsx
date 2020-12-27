import React from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  Main,
  Tab,
  TabButton,
  DescriptionContainer,
  View,
  TitleDescription,
  Strong,
  StrongResult,
  Divider,
  Card,
  Image,
  CardContent,
  StrongGradient,
  Span,
  TextResult,

} from './styles';

import Header from './components/Header'
import { separatorHorizontal, separatorVertical } from '../../utils/separator'
import { useTheme } from 'styled-components'

import image from '../../images/im_panelgg2.png'

const Wallet: React.FC = () => {
  const [isSelectedTab, setSelectedTab] = React.useState(0)

  const theme= useTheme()

  const data = [
    "Hoje","Essa semana","Esse mês", "Mês passado"
  ]

  const dataHistoric = [
    {
      name: "FIFA 20",
      mode: "Partida Rápida",
      value: 10,
      result: "Vitória",
    },
    {
      name: "FIFA 20",
      mode: "Partida Rápida",
      value: 5,
      result: "Derrota",
    },
  ]

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header />
        <Main>
          <Tab>
            {data.map((item, index, array) => (
              <TabButton
                key={index}
                onPress={() => setSelectedTab(index)}
                style={separatorHorizontal(index, array, 25, 8, 8)}
                selected={isSelectedTab === index ? true : false}
              >{item}
              </TabButton>
            ))}
          </Tab>
          
          <DescriptionContainer>
            <View>
              <TitleDescription>Ganchos</TitleDescription>
              <Strong color="green">R$80,00</Strong>
            </View>
            <Divider />
            <View>
              <TitleDescription>Investidos</TitleDescription>
              <Strong color="orange">R$20,00</Strong>
            </View>
          </DescriptionContainer>

          {dataHistoric.map((item, index, array) => (
            <Card
              key={index}
              style={separatorVertical(index, array, 12, 8, 12)}
            >
              <Image source={image} />
              <CardContent>
                <StrongGradient>{item.name}</StrongGradient>
                <Span>{item.mode}</Span>
                <StrongResult
                  color={item.result === "Vitória"
                  ? theme.colors.secondary
                  : theme.colors.backgroundSecondary}
                >
                  {item.result === "Vitória" ? "+" : "-"}R${item.value}
                </StrongResult>
                <TextResult>{item.result}</TextResult>
              </CardContent>
            </Card>
          ))}
        </Main>
      </ScrollView>
    </Container>
  )
}

export default Wallet;