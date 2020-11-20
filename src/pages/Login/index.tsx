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
  TitleContainer,
  ButtonForgotPass,
  ButtonForgotPassText,
  EyeIcon,
  LogoSmall,
} from "./styles";

import CustomInput from "../../components/CustomInput";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login: React.FC = () => {
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();

  function signIn() {
    try {
      console.log("signin");
      navigation.navigate("Principal");
    } catch (error) {
      console.log("error", error);
    }
  }

  function signUp() {
    try {
      // navigation.navigate("SignUp");
    } catch (error) {
      console.log("error", error);
    }
  }

  function forgotPassword() {
    // navigation.navigate("ForgotPassword");
  }

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Background>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Background>

        <Container>
          <Form>
            <TitleContainer>
              <LogoSmall />
              <Title>Bem-vindo a GG</Title>
            </TitleContainer>

            <CustomInput
              label="E-mail"
              placeholder="Informe seu e-mail cadastrado"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />
            <CustomInput
              label="Senha"
              placeholder="Informe sua senha"
              secureTextEntry={password_hidden}
              rightComponent={
                <EyeIcon
                  open={password_hidden}
                  onPress={() => setPasswordHidden(!password_hidden)}
                />
              }
            />

            <ButtonForgotPass onPress={forgotPassword}>
              <ButtonForgotPassText>Esqueceu sua senha?</ButtonForgotPassText>
            </ButtonForgotPass>

            <Button onPress={signIn}>Entrar</Button>
            
            <ButtonSignUp onPress={signUp}>
              <ButtonSignUpText>
                Ainda não possui uma conta? <Strong>Crie agora mesmo.</Strong>
              </ButtonSignUpText>
            </ButtonSignUp>
          </Form>
        </Container>
      </ScrollView>
    </>
  );
};

export default Login;
