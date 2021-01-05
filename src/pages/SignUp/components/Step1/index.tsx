import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text } from "react-native";

import {
  Button,
  Form,
  ButtonSignUp as ButtonBack,
  ButtonSignUpText as ButtonBackText,
} from "../../styles";
import CustomInput from "../../../../components/CustomInput";
import CustomInputMask from "../../../../components/CustomInputMask";

interface IStep1 {
  next?(data: any): void;
  back?(): void;
}

const Step1: React.FC<IStep1> = ({ next, back }) => {
  const { control, handleSubmit, errors } = useForm();

  function onSubmit(data: any) {
    next?.(data);
  }

  return (
    <Form>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Nome completo"
            placeholder="Informe seu nome"
            autoCapitalize="none"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.name?.message}
          />
        )}
        name="name"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Usuário"
            placeholder="Informe um usuário"
            autoCapitalize="none"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.nickname?.message}
          />
        )}
        name="nickname"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInputMask
            label="Nascimento"
            placeholder="Selecione a data de nascimento"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            maskType="datetime"
            format="DD/MM/YYYY"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.birthday?.message}
          />
        )}
        name="birthday"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Sexo"
            placeholder="Selecione"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.sex?.message}
          />
        )}
        name="sex"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="CPF"
            placeholder="Informe seu CPF"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.cpf?.message}
          />
        )}
        name="cpf"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="País"
            placeholder="Selecione"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.cpf?.message}
          />
        )}
        name="country"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Estado"
            placeholder="Selecione"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.state?.message}
          />
        )}
        name="state"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Button style={{ alignSelf: "center" }} onPress={handleSubmit(onSubmit)}>
        Proximo passo
      </Button>
      <ButtonBack onPress={back}>
        <ButtonBackText>Voltar</ButtonBackText>
      </ButtonBack>
    </Form>
  );
};

export default Step1;
