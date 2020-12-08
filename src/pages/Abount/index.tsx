import React from 'react';
import { ScrollView } from 'react-native';
import { Container, CustomBanner, Text } from './styles';

import ContainerProfile from '../../components/ContainerProfile'
import { useNavigation } from '@react-navigation/native';
import image from '../../images/bn_perfil1.png'

const terms = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.

In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.

Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.`

const Abount: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContainerProfile
        title="Sobre nós"
        goBack={() => navigation.goBack()}
      >
        <CustomBanner source={image} />
        <Container>
          <Text>
            {terms}
          </Text>
        </Container>
      </ContainerProfile>
    </ScrollView>
  )
}

export default Abount;