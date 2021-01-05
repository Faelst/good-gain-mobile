import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  Background,
  Form,
  Button,
  Title,
  Strong,
  Text,
  ButtonSignUp as ButtonBack,
  ButtonSignUpText as ButtonBackText,
  TitleStrong,
  TitleContainer,
  EyeIcon,
  CheckBox,
} from "./styles";
import CustomInput from "../../components/CustomInput";
import { SafeAreaView, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import { StatusBar } from "expo-status-bar";
import ButtonGradient from "../../components/ButtonGradient";
import { api } from "../../services/api";
import Step1 from "./components/Step1";
import { TextInputMask } from 'react-native-masked-text'

const SignUp: React.FC = () => {
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  async function signUp() {
    try {
      const _result = await api.post("/register");
    } catch (error) {
      console.log("error", error);
    }
  }

  function nextStep() {
    if (step < 3) setStep((prev) => prev + 1);
    else signUp();
  }

  const titles = ["Informações pessoais", "Informações do console"];

  return (
    <Background>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <TitleContainer>
            <Title>{titles[step - 1]}</Title>
          </TitleContainer>
          {step === 1 && <Step1 next={nextStep} />}
          {step === 2 && <Step1 next={nextStep} />}
          {step === 3 && <Step1 />}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default SignUp;
