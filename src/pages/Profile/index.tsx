import React from 'react';
import { ScrollView } from 'react-native'
import {
  Container,
  Header,
  ImageBackground,
  Main,
  Image,
  Strong
} from './styles';

import TextCard from '../../components/TextCard'
import imageBG from '../../images/bn_detail.png'
import imageProfile from '../../images/profile_pics.png'
import icEdit from '../../images/icons/ic_edit.png'
import icSettings from '../../images/icons/ic_settings.png'
import icSupport from '../../images/icons/ic_support.png'
import icDocText from '../../images/icons/ic_document_text.png'
import icLogout from '../../images/icons/ic_logout.png'


const Profile: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <ImageBackground opacity={0.6} source={imageBG} />
        </Header>

        <Main>
          <Image source={imageProfile} />
          <Strong>Lucas Monteiro</Strong>

          <TextCard title="Editar Perfil" icon={icEdit} />
          <TextCard title="Configurações" icon={icSettings} />
          <TextCard title="Suporte" icon={icSupport} />
          <TextCard title="Termos de Uso" icon={icDocText} />
          <TextCard title="Sair" icon={icLogout} />
        </Main>
      </Container>
    </ScrollView>
  )
}

export default Profile;