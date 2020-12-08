import React from 'react';
import ContainerProfile from '../../components/ContainerProfile';
import { Container, TextCard } from './styles';

import icBig from '../../images/icons/ic_bug.png'
import icGames from '../../images/icons/ic_games.png'
import icSupport from '../../images/icons/gg_support.png'

import { useNavigation } from '@react-navigation/native';

const ProfileSupport: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ContainerProfile
      title="Suporte"
      goBack={() => navigation.goBack()}
    >
      <Container>
        <TextCard title="Relatar um problema" icon={icBig} />
        <TextCard
          title="Como usar o GoodGain"
          icon={icGames}
          onPress={() => navigation.navigate("HowUse")}
        />
        <TextCard title="FAQ" icon={icSupport} />
      </Container>
    </ContainerProfile>
  )
}

export default ProfileSupport;