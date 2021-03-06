import React from 'react';
import ContainerProfile from '../../components/ContainerProfile';
import { Container, TextCard } from './styles';

import icInvite from '../../images/icons/ic_user_add.png'
import icBell from '../../images/icons/ic_bell.png'
import icInfoGG from '../../images/icons/ic_info_gg.png'

import { useNavigation } from '@react-navigation/native';

const ProfileSettings: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ContainerProfile title="Configurações">
      <Container>
        <TextCard title="Convidar amigos" icon={icInvite} />
        <TextCard
          title="Central de notificações"
          icon={icBell}
          onPress={() => navigation.navigate("NotificationCenter")}
        />
        <TextCard
          title="Sobre nós" 
          icon={icInfoGG}
          onPress={() => navigation.navigate("Abount")}
        />
      </Container>
    </ContainerProfile>
  )
}

export default ProfileSettings;