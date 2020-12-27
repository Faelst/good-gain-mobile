import React from 'react';
import { ScrollView } from 'react-native';
import { Container, CustomBanner, Title, Text } from './styles';

import ContainerProfile from '../../components/ContainerProfile'
import { useNavigation } from '@react-navigation/native';
import image from '../../images/bn_perfil2.png'

const HowUse: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContainerProfile title="Como usar o GoodGain">
        {[1,2].map((item, index) => (
          <Container key={index}>
            <CustomBanner source={image} />
            <Title>Crie uma conta</Title>
            <Text>
{`É completamente grátis, rápido e é o 
primeiro passo para você começar a se
divertir, desafiar outros jogadores e ainda
poder ganhar uma grana.

Você só precisa ser maior de 18 anos.`}
            </Text>
          </Container>
        ))}
      </ContainerProfile>
    </ScrollView>
  )
}

export default HowUse;