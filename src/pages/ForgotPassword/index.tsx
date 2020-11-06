import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  Background,
  Container,
  Form,
  Button,
  ButtonLink,
  Logo,
  Title,
  TitleContainer,
  Text,
  SubTitle,
  Header
} from './styles';
import CustomInput from '../../components/CustomInput';
import BackButton from '../../components/BackButton';
import { ScrollView } from 'react-native';

const ForgotPassword: React.FC = () => {
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();

  function send() {
    try {
      console.log('signin');
      navigation.navigate('Home');
    } catch (error) {
      console.log('error', error);
    }
  }

  function back() {
    navigation.goBack();
  }

  return (
    <Background resizeMode="cover">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Header>
            <BackButton light onPress={() => navigation.goBack()} />
            <Logo />
          </Header>
          <Form>
            <TitleContainer>
              <Title>Recuperar senha</Title>
              <SubTitle>Não se preocupe.</SubTitle>
              <SubTitle>Nos informe o e-mail cadastrado.</SubTitle>
            </TitleContainer>
            <CustomInput placeholder="E-mail" />

            <Text>Envieremos uma senha provisória.</Text>

            <Button onPress={send}>Enviar</Button>
            <ButtonLink onPress={back}>Voltar</ButtonLink>
          </Form>
        </Container>
      </ScrollView>
    </Background>
  );
};

export default ForgotPassword;
