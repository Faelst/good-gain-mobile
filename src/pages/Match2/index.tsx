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
import imageProgress from '../../images/im_p2.png'
import { useNavigation } from '@react-navigation/native'

const Match: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <MatchContainer title="Mutio bem!" image={imageProgress}>
      <SubtitleView>
        <Subtitle>
        Agora que vocês já criaram uma conexão
no console, vocês devem criar a partida
online no jogo.
        </Subtitle>
      </SubtitleView>

      <MatchTime
        style={{ paddingBottom: 38}}
        time={"00:05:00"}
        description={`para criarem a partida online.`}
      />
      <MatchAction
        onPress={() => navigation.navigate("Match3")}
        style={{ marginTop: 32 }}
        time={"00:04:46"}
        player1="BRUNO_PS4"
        player2="LUCAS_PS4"
      />
    </MatchContainer>
  )
}

export default Match;