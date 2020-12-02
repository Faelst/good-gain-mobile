import React from 'react';
import {
  SubtitleView,
  Subtitle,
  SubtitleStrong,
  Card,
  Image,
  TextContainer,
  Title,
  Player,
} from './styles';

import MatchContainer from '../../components/MatchContainer'
import MatchTime from '../../components/MatchTime'
import MatchAction from '../../components/MatchAction'
import imageProgress from '../../images/im_p1.png'
import { useNavigation } from '@react-navigation/native'

const Match: React.FC = () => {
  const navigation = useNavigation()

  return (
    <MatchContainer
      title="O desafio começa aqui!"
      image={imageProgress}
    >
      <SubtitleView>
        <Subtitle>
          Siga as instruções abaixo para avançar para a próxima etapa.
        </Subtitle>
        <SubtitleStrong>Fique atento ao cronômetro e evite W.O.</SubtitleStrong>
      </SubtitleView>

      <MatchTime time={"00:0" + 5 +":00"} description={`para criarem uma conexão\nno console`}/>

      <Card>
        <Image />
        <TextContainer>
          <Title>{`IDs dos jogadores \n`}no console:</Title>
          <Player>BRUNO_PS4</Player>
          <Player>LUCAS_PS4</Player>
        </TextContainer>
      </Card>

      <MatchAction
        onPress={() => {navigation.navigate("Match2")}}
        time={"00:04:46"}
        player1="BRUNO_PS4"
        player2="LUCAS_PS4"
      />
    </MatchContainer>
  )
}

export default Match;