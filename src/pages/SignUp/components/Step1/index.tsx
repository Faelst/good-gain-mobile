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
import CustomPicker from "../../../../components/CustomPicker";
import country_data from "country-region-data/data.json";
interface IStep1 {
  next?(data: any): void;
  back?(): void;
}

const IcCalendar = () => (
  <Image
    style={{ marginRight: rsize(14), tintColor: "rgba(169,169,169,0.8)" }}
    source={ic_calendar}
  />
);

const Step1: React.FC<IStep1> = ({ next, back }) => {
  const { control, handleSubmit, watch, errors } = useForm();

  function onSubmit(data: any) {
    next?.(data);
  }

  console.log("country", watch("country"));

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
            errorMessage={errors?.nicknamegg?.message}
          />
        )}
        name="nicknamegg"
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
          <CustomPicker
            label="Sexo"
            placeholder="Selecione"
            items={[
              { label: "Masculino", value: "M" },
              { label: "Feminino", value: "F" },
              { label: "Outros", value: "O" },
            ]}
            onValueChange={(value) => onChange(value)}
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
          <CustomInputMask
            type="cpf"
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
          <CustomPicker
            label="País"
            placeholder="Selecione"
            items={[
              // { label: "Brasil", value: "Brasil" },
              ...country_data.map((v) => ({
                label: v.countryName,
                value: v.countryName,
                ...v,
              })),
            ]}
            onValueChange={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.state?.message}
          />
        )}
        name="country"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomPicker
            label="Estado"
            placeholder="Selecione"
            items={[
              // { label: "São Paulo", value: "SP" },
              ...(
                country_data.filter(
                  (v) => v.countryName === watch("country")
                )?.[0] || { regions: [] }
              )?.regions?.map((v: any) => ({
                label: v.name,
                value: v.shortCode,
              })),
            ]}
            onValueChange={(value) => onChange(value)}
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
