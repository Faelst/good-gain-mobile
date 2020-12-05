import React from 'react';
import { View } from 'react-native'
import {
  ScrollView,
  Header,
  Title,
  Main,
  Button,
  CircularProgress,
  SubtitleView,
  Subtitle,
  Strong,
  Card,
  Image,
  TextContainer,
  Player,
} from './styles';

import SimpleButton from '../../components/SimpleButton'
import MatchTime from '../../components/MatchTime'
import MatchAction from '../../components/MatchAction'
import CustomModal from '../../components/CustomModal'
import SupportModal from './components/SupportModal'
import ContentStep3 from './components/ContentStep3'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

const Match: React.FC = () => {
  const [isModalVisible, setModalVisible] = React.useState(false)
  const [position, setPosition] = React.useState(0)
  
  const navigation = useNavigation()
  const theme = useTheme()

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const handleProgress = () => {
    setPosition(position < 2 ? position + 1 : 2)
  }

  const matchProgress = [
    {
      id: 1,
      title: "O desafio começa aqui!",
      subtitle: "Siga as instruções abaixo para avançar para a próxima etapa.",
      subtitleStrong: "Fique atento ao cronômetro e evite W.O.",
      time: "00:05:00",
      timeDescription: "para criarem uma conexão \n no console.",
      fill: 24.99,
    },
    {
      id: 2,
      title: "Muito bem!",
      subtitle: "Agora que vocês já criaram uma conexão no console, vocês devem criar a partida online no jogo.",
      subtitleStrong: "",
      time: "00:05:00",
      timeDescription: "para criarem a partida online.",
      fill: 49.99,
    },
    {
      id: 3,
      title: "Tudo pronto!",
      subtitle: "Podem iniciar a partida! \nNão se esqueça de reportar o resultado \nao final da partida, beleza?",
      subtitleStrong: "Bom jogo!",
      time: "",
      timeDescription: "",
      fill: 100,
    },
  ]

  const state = matchProgress[position]

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header>
        <Title>{state.title}</Title>
        <CircularProgress
          title={state.id}
          fill={state.fill}
        />
      </Header>

      <Main>
        <SubtitleView>
          <Subtitle>{state.subtitle}</Subtitle>
          <Strong>{state.subtitleStrong}</Strong>
        </SubtitleView>

        <View style={{ display: state.id > 2 ? "none" : "flex"}}>
          <MatchTime
            time={"00:0" + 5 +":00"}
            description={state.timeDescription}
          />

          <Card style={{ display: state.id > 1 ? "none" : "flex"}}>
            <Image />
            <TextContainer>
              <Strong>IDs dos jogadores</Strong>
              <Strong>no console:</Strong>
              <Player>BRUNO_PS4</Player>
              <Player>LUCAS_PS4</Player>
            </TextContainer>
          </Card>

          <MatchAction
            onPress={handleProgress}
            time={"00:04:46"}
            player1="BRUNO_PS4"
            player2="LUCAS_PS4"
          />
        </View>

        <View style={{ display: state.id === 3 ? "flex" : "none"}}>
          <ContentStep3 />
        </View>

        <SimpleButton onPress={toggleModal}>
          <Button>REPORTAR PROBLEMA</Button>
        </SimpleButton>
      </Main>

      <CustomModal
        background={theme.colors.backgroundLight}
        isVisible={isModalVisible}
        onClose={toggleModal}
      >
        <SupportModal onSubmit={() => {
          toggleModal(),
          alert("Problema reportado com sucesso.")
        }}/>
      </CustomModal>
    </ScrollView>
  )
}

export default Match;