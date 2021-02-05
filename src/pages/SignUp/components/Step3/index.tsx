import React, { useState } from "react";
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
import { EyeIcon } from "../../../Login/styles";

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

const Step3: React.FC<IStep1> = ({ next, back }) => {
  const { control, handleSubmit, errors, setError } = useForm();
  const [password_hidden, setPasswordHidden] = useState(true);

  function onSubmit(data: any) {
    if (data.pass !== data.pass_confirm) {
      setError("pass_confirm", { message: "Senhas devem ser identicas" });
      return;
    }

    next?.(data);
  }

  return (
    <Form>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Email"
            placeholder="Informe um e-mail para cadastro"
            autoCapitalize="none"
            returnKeyType="next"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors?.email?.message}
          />
        )}
        name="email"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Senha"
            placeholder="Informe uma senha"
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="next"
            textContentType="oneTimeCode"
            onBlur={onBlur}
            secureTextEntry={password_hidden}
            onChangeText={(value) => onChange(value)}
            value={value}
            rightComponent={
              <EyeIcon
                open={password_hidden}
                onPress={() => setPasswordHidden(!password_hidden)}
              />
            }
            errorMessage={errors?.pass?.message}
          />
        )}
        name="pass"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <CustomInput
            label="Confirme a senha"
            placeholder="Confirme a senha"
            secureTextEntry={password_hidden}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            textContentType="oneTimeCode"
            returnKeyType="send"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            rightComponent={
              <EyeIcon
                open={password_hidden}
                onPress={() => setPasswordHidden(!password_hidden)}
              />
            }
            errorMessage={errors?.pass_confirm?.message}
          />
        )}
        name="pass_confirm"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />

      <Button style={{ alignSelf: "center" }} onPress={handleSubmit(onSubmit)}>
        Criar conta
      </Button>
      <ButtonBack onPress={back}>
        <ButtonBackText>Voltar</ButtonBackText>
      </ButtonBack>
    </Form>
  );
};

export default Step3;
