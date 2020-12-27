import React from 'react';
import { ScrollView } from 'react-native';
import BackButton from '../BackButton';

import { Container, Header, HeaderContent, Title, Main } from './styles';

import { useNavigation } from '@react-navigation/native'

interface IContainerProfile {
  title?: string,
  background?: "green" | "gradient",
  goBack?: "Home" | "GGPanel" | "GamesAvailable" | "Wallet" | "Profile",
  buttonHidden?: boolean,
}
const ContainerProfile: React.FC<IContainerProfile> = ({
  title, children, goBack, background, buttonHidden
}) => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    goBack ? navigation.navigate(goBack) : navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header background={background}>
          <HeaderContent buttonHidden={buttonHidden}>
            <Title>{title}</Title>
            {!buttonHidden && <BackButton name="x" onPress={handleNavigation} />}
          </HeaderContent>
        </Header>
        <Main>
          {children}
        </Main>
      </Container>
    </ScrollView>
  )
}

export default ContainerProfile;