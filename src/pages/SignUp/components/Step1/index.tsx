import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Image } from "react-native";
import ic_calendar from "../../../../images/icons/ic_calendar.png";

import {
  Button,
  Form,
  ButtonSignUp as ButtonBack,
  ButtonSignUpText as ButtonBackText,
} from "../../styles";
import CustomInput from "../../../../components/CustomInput";
import CustomInputMask from "../../../../components/CustomInputMask";
import { rsize } from "../../../../utils/size";

interface IStep1 {
  next?(data: any): void;
  back?(): void;
}

const IcCalendar = () => <Image style={{ marginRight: rsize(14), tintColor: "rgba(169,169,169,0.8)" }} source={ic_calendar} />

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
            leftComponent={<IcCalendar />}
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
          ></CustomInput>
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
            errorMessage={errors?.email?.message}
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
            errorMessage={errors?.email?.message}
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
            label="Estado"
            placeholder="Selecione"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.email?.message}
          />
        )}
        name="cpf"
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
