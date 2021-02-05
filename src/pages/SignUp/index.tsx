import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import moment from "moment";

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
  Step,
  StepNumber,
} from "./styles";
import CustomInput from "../../components/CustomInput";
import { SafeAreaView, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import { StatusBar } from "expo-status-bar";
import { api } from "../../services/api";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { Toast } from "../../utils/toast";
import { useToast } from "../../contexts/toast";

const SignUp: React.FC = () => {
  const { show } = useToast();
  const [data, setData] = useState<any>({});
  const [password_hidden, setPasswordHidden] = useState(true);
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  async function signUp(data: any) {
    try {
      console.log("signUp data", data);
      let { consoles, cpf, birthday, pass_confirm, ..._data } = data;

      _data["idonline"] = {};
      consoles.map((console: any) => {
        _data["idonline"][console?.console] = console.idconsole;
      });

      _data["cpf"] = cpf.replace(/[.-]/g, "");
      _data["birthday"] = moment(birthday, "DD/MM/YYYY").format("MM/DD/YYYY");

      console.log("signUp", _data);

      const _result = await api.post("/register", _data);

      if (_result.status === 200) {
        show({ message: "Cadastro realizado com sucesso!" });
        navigation.navigate("SignIn");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  function nextStep(step_data) {
    setData((prev) => ({ ...prev, ...step_data }));

    if (step < 3) setStep((prev) => prev + 1);
    else signUp({ ...data, ...step_data });
  }

  function prevStep() {
    if (step > 1) setStep((prev) => prev - 1);
    else navigation.goBack();
  }

  const titles = [
    "Informações pessoais",
    "Informações do console",
    "Dados de login",
  ];

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
            <Step>
              <StepNumber>{step}</StepNumber>
            </Step>
          </TitleContainer>
          {step === 1 && <Step1 next={nextStep} back={prevStep} />}
          {step === 2 && <Step2 next={nextStep} back={prevStep} />}
          {step === 3 && <Step3 next={nextStep} back={prevStep} />}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default SignUp;
