import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  Background,
  Container,
  Form,
  Button,
  Logo,
  LogoContainer,
  Title,
  Strong,
  ButtonSignUp,
  ButtonSignUpText,
  TitleStrong,
  TitleContainer,
  ButtonForgotPass,
  ButtonForgotPassText,
  EyeIcon,
  LogoSmall,
} from "./styles";
import CustomInput from "../../components/CustomInput";
import { ScrollView } from "react-native";

const Login: React.FC = () => {
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();

  function signIn() {
    try {
      console.log("signin");
      navigation.navigate("LandingPagePosCreation");
    } catch (error) {
      console.log("error", error);
    }
  }

  function signUp() {
    try {
      navigation.navigate("SignUp");
    } catch (error) {
      console.log("error", error);
    }
  }

  function forgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  return (
    <Background resizeMode="cover">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Form>
            <TitleContainer>
              <LogoSmall />
              <Title>Bem-vindo a GG</Title>
            </TitleContainer>
            <CustomInput
              label="E-mail"
              placeholder="Informe seu e-mail cadastrado"
            />
            <CustomInput
              label="Senha"
              placeholder="Informe sua senha"
              secureTextEntry={password_hidden}
              rightComponent={
                <EyeIcon
                  open={password_hidden}
                  onPress={() => setPasswordHidden((prev) => !prev)}
                />
              }
            />
            <ButtonForgotPass onPress={forgotPassword}>
              <ButtonForgotPassText>Esqueceu sua senha?</ButtonForgotPassText>
            </ButtonForgotPass>

            <Button onPress={signIn}>Entrar</Button>
            <ButtonSignUp onPress={signUp}>
              <ButtonSignUpText>Ainda não possui uma conta?</ButtonSignUpText>
              <ButtonSignUpText>
                <Strong>Crie agora mesmo.</Strong>
              </ButtonSignUpText>
            </ButtonSignUp>
          </Form>
        </Container>
      </ScrollView>
    </Background>
  );
};

export default Login;