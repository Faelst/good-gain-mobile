import React from 'react'
import { SafeAreaView, FlatList, View } from 'react-native'
import {
  Container,
  Header,
  HeaderContent,
  AppBarContent,
  Logo,
  MainContent,
  BannerCard,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BalanceCard,
  BalanceTitle,
  BalanceCash,
  BalanceButton,
  IconCash,
  IconPlus,
  ActionContainer,
  ActionCard,
  ActionTitle,
  ActionIcon,
  CardMediaContainer,
  BackgroundMedia,
  CardMediaTitle,
} from './styles'

import { useNavigation } from "@react-navigation/native";

import CardMedia from '../../components/CardMedia'
import { Feather } from '@expo/vector-icons'
import banner from '../../images/banner_challenge.png'

const dataChallenge = [
  {
    image: banner ,
    title: "Desafie!",
    description: "Participe de partidas rápidas ou de campeonatos com jogadores reais."
  },{
    image: banner ,
    title: "Desafie2!",
    description: "Participe de partidas rápidas ou de campeonatos com jogadores reais."
  },
]

const Home: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <HeaderContent>
            <Logo />
            <AppBarContent>
              <Feather name="search" size={24} color="white" />
              <Feather name="bell" size={24} color="white" />
            </AppBarContent>
          </HeaderContent>
        </Header>

        <MainContent>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataChallenge}
            keyExtractor={item => item.title}
            renderItem={({item, index}) => (
              <BannerCard>
                <BannerImage source={item.image} />
                <BannerContent>
                  <BannerTitle>{item.title}</BannerTitle>
                  <BannerDescription>{item.description}</BannerDescription>
                </BannerContent>
              </BannerCard>
            )}
          />

          <BalanceCard enabled={false}>
            <IconCash />
            <View>
              <BalanceTitle>Saldo atual</BalanceTitle>
              <BalanceCash>R$150,00</BalanceCash>
            </View>
            <BalanceButton>
              <IconPlus />
            </BalanceButton>
          </BalanceCard>

          <ActionContainer>
            <ActionCard>
              <ActionIcon />
              <ActionTitle>Partidas rápidas</ActionTitle>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon />
              <ActionTitle>Campeonatos</ActionTitle>
            </ActionCard>

            <CardMediaContainer>
              <BackgroundMedia />
              <CardMediaTitle>Jogos disponiveis</CardMediaTitle>
            </CardMediaContainer>

            <CardMediaContainer>
              <BackgroundMedia />
              <CardMediaTitle>Jogos disponiveis</CardMediaTitle>
            </CardMediaContainer>

            <CardMediaContainer>
              <BackgroundMedia />
              <CardMediaTitle>Jogos disponiveis</CardMediaTitle>
            </CardMediaContainer>
            
          </ActionContainer>
        </MainContent>
      </Container>
    </SafeAreaView>
  )
}

export default Home;