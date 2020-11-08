import React from 'react'
import { SafeAreaView, FlatList, View } from 'react-native'
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler'
import {
  Container,
  Header,
  HeaderContent,
  AppBarContent,
  AppBarButton,
  IconSeacrh,
  IconBell,
  Logo,
  MainContent,
  Padding,
  BannerCard,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BalanceCard,
  Rectangle,
  Rectangle2,
  BalanceTitle,
  BalanceCash,
  BalanceButton,
  IconCash,
  IconPlus,
  ActionContainer,
  ActionCard,
  ActionCard2,
  ActionTitle,
  ActionIcon,
  CardMediaContainer,
  BackgroundMedia,
  MediaButton,
  CardMediaTitle,
} from './styles'

import { useNavigation } from "@react-navigation/native";

import CardMedia from '../../components/CardMedia'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'
import banner from '../../images/banner_challenge.png'
import flash from '../../images/icons/flash.svg'
import trophy from '../../images/icons/trophy.svg'
import bgMedia1 from '../../images/bg_media1.png'
import bgMedia2 from '../../images/bg_media2.png'
import bgMedia3 from '../../images/bg_media3.png'
import bgMedia4 from '../../images/bg_media4.png'

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

const dataMedia = [
  {
    image: bgMedia1 ,
    title: "Jogos disponiveis",
  },{
    image: bgMedia2 ,
    title: "Convidar amigos",
  },{
    image: bgMedia3 ,
    title: "Ranking",
  },{
    image: bgMedia4 ,
    title: "Suporte",
  },
]

const Home: React.FC = () => {
  const navigation = useNavigation()

  const listMargin = (index: number) => {
    if (index === dataChallenge.length - 1 ) {
      return {
        marginLeft: rsize(10, "w"),
        marginRight: rsize(30, "w")
      }
    } else if (index >= 1) {
      return {
        marginLeft: rsize(10, "w")
      }
    } else if (index === 0) {
      return {
        marginLeft: rsize(30, "w")
      }
    } 
  }

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <HeaderContent>
            <Logo />
            <AppBarContent>
              <AppBarButton>
                <IconSeacrh/>
              </AppBarButton>
              <AppBarButton>
                <IconBell/>
              </AppBarButton>
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
              <BannerCard style={listMargin(index)}>
                <BannerImage source={item.image} />
                <BannerContent>
                  <BannerTitle>{item.title}</BannerTitle>
                  <BannerDescription>{item.description}</BannerDescription>
                </BannerContent>
              </BannerCard>
            )}
          />

          <Padding>
            <BalanceCard enabled={false}>
              <Rectangle />
              <Rectangle2 />
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
                <ActionIcon source={flash}/>
                <ActionTitle>Partidas rápidas</ActionTitle>
              </ActionCard>
              
              <ActionCard2>
                <ActionIcon source={trophy}/>
                <ActionTitle>Campeonatos</ActionTitle>
              </ActionCard2>

              {dataMedia.map(item => (
                <CardMediaContainer>
                  <BackgroundMedia source={item.image}>
                    <MediaButton>
                      <CardMediaTitle>{item.title}</CardMediaTitle>
                    </MediaButton>
                  </BackgroundMedia>
                </CardMediaContainer>
              ))}

            </ActionContainer>
          </Padding>
        </MainContent>
      </Container>
    </SafeAreaView>
  )
}

export default Home;