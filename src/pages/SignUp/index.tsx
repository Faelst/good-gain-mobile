import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  Background,
  Form,
  Button,
  Title,
  Strong,
  Text,
  ButtonSignUp,
  ButtonSignUpText,
  TitleStrong,
  TitleContainer,
  EyeIcon,
  CheckBox
} from './styles';
import CustomInput from '../../components/CustomInput';
import { SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../../components/BackButton';
import { StatusBar } from 'expo-status-bar';

const Login: React.FC = () => {
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();

  function signIn() {
    try {
      console.log('signin');
      navigation.navigate('SignIn');
    } catch (error) {
      console.log('error', error);
    }
  }

  function signUp() {
    try {
      navigation.navigate('SignIn');
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Background>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <Form>
            <BackButton onPress={() => navigation.goBack()} />
            <TitleContainer>
              <Title>Pronto para começar?</Title>
              <Title>
                <TitleStrong>Vamos criar sua conta.</TitleStrong>
              </Title>
            </TitleContainer>
            <Text>
              Precisamos apenas de algumas informações para você aproveitar o
              melhor do aFit.
            </Text>
            <CustomInput placeholder="Nome" />
            <CustomInput placeholder="Sobrenome" />
            <CustomInput placeholder="Usuário" />
            <CustomInput placeholder="Telefone" />
            <CustomInput placeholder="E-mail" />
            <CustomInput
              placeholder="Senha"
              secureTextEntry={password_hidden}
              rightComponent={
                <EyeIcon
                  open={password_hidden}
                  onPress={() => setPasswordHidden((prev) => !prev)}
                />
              }
            />

            <CheckBox
              checked={true}
              label="Li e concordo com os Termos de Uso."
            />

            <Button onPress={signUp}>Criar conta</Button>
            <ButtonSignUp onPress={signIn}>
              <ButtonSignUpText>Já possui uma conta?</ButtonSignUpText>
              <ButtonSignUpText>
                <Strong>Clique aqui.</Strong>
              </ButtonSignUpText>
            </ButtonSignUp>
          </Form>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default Login;
