import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Image,Description, ButtonGradient,ButtonText, Logo } from './styles';
import ContainerModel from '../../components/ContainerProfile'
import { useNavigation } from '@react-navigation/native'

import image from '../../images/im_wallet1.png'
import logo from '../../images/im_picpay.png'

const PutCredit: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ContainerModel title="Colocar crédito" background="green">
      <Image source={image} />
      <Description>
        Escolha abaixo a melhor
        forma de transferir dinheiro
        para sua conta virtual na GG.
      </Description>
      
      <ButtonGradient
        onPress={() => navigation.navigate("Transfer")}
        component={
          <ButtonText>Transferência bancária</ButtonText>
      }/>
      <TouchableOpacity>

        <Logo source={logo} />
      </TouchableOpacity>
    </ContainerModel>
  )
}

export default PutCredit;