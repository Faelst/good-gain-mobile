import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

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
import { ScrollView, Text } from "react-native";
import { useAuth } from "../../contexts/auth";

const Login: React.FC = () => {
  const { control, handleSubmit, errors } = useForm();
  const { signIn } = useAuth();
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();

  async function onSignIn(data: any) {
    try {
      await signIn(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  function onInvalid(e: any) {
    console.log("onInvalid", e);
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
      <ScrollView>
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

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <CustomInput
                  label="E-mail"
                  placeholder="Informe seu e-mail cadastrado"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
                // <TextInput
                //   style={styles.input}
                //   onBlur={onBlur}
                //   onChangeText={value => onChange(value)}
                //   value={value}
                // />
              )}
              name="email"
              rules={{ required: "Campo obrigatório" }}
              defaultValue=""
            />
            {errors.email && <Text>{errors.email.message}</Text>}

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <CustomInput
                  label="Senha"
                  placeholder="Informe sua senha"
                  secureTextEntry={password_hidden}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  rightComponent={
                    <EyeIcon
                      open={password_hidden}
                      onPress={() => setPasswordHidden(!password_hidden)}
                    />
                  }
                />
              )}
              name="pass"
              rules={{ required: "Campo obrigatório" }}
              defaultValue=""
            />
            {errors.pass && <Text>{errors.pass.message}</Text>}

            <ButtonForgotPass onPress={forgotPassword}>
              <ButtonForgotPassText>Esqueceu sua senha?</ButtonForgotPassText>
            </ButtonForgotPass>

            <Button onPress={handleSubmit(onSignIn, onInvalid)}>Entrar</Button>

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
