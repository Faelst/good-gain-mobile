import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Image, View } from "react-native";
import ic_calendar from "../../../../images/icons/ic_calendar.png";

import {
  Button,
  Form,
  ButtonSignUp as ButtonBack,
  ButtonSignUpText as ButtonBackText,
  TrashIcon,
  BtnAdd,
  IcPlus,
  AddText,
} from "../../styles";
import CustomInput from "../../../../components/CustomInput";
import CustomInputMask from "../../../../components/CustomInputMask";
import { rsize } from "../../../../utils/size";
import CustomPicker from "../../../../components/CustomPicker";
import { Item } from "../../../../components/CustomSlider/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const initial_values = {
  consoles: [{ console: "", idconsole: "", idconsole_confirm: "" }],
};

const Step2: React.FC<IStep1> = ({ next, back }) => {
  const { control, handleSubmit, errors, watch, setError } = useForm({
    defaultValues: initial_values,
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "consoles",
    }
  );

  function onSubmit(data: any) {
    // alert("onSubmit: " + JSON.stringify(data));
    console.log("onsubmit step 2", data);
    let qtd_errors = 0;
    data.consoles.map((v, i) => {
      if (
        v.console.toLowerCase() !== "pc" &&
        v.console.toLowerCase() !== "cross" &&
        !v.idconsole
      ) {
        qtd_errors++;
        setError(`consoles[${i}].idconsole`, { message: "Campo obrigatório" });
      } else setError(`consoles[${i}].idconsole`, {});
    });

    if (qtd_errors === 0) next?.({ consoles: [data] });
  }

  console.log("step 2 render", { errors, values: watch("consoles") });

  return (
    <Form>
      {fields.map((item, index) => (
        <View key={`console_${index}`}>
          {index > 0 && (
            <TouchableOpacity
              onPress={() => remove(index)}
              style={{
                alignSelf: "flex-end",
                paddingHorizontal: rsize(28),
                paddingVertical: rsize(20),
              }}
            >
              <TrashIcon />
            </TouchableOpacity>
          )}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <CustomPicker
                label="Qual modelo do seu console?"
                placeholder="Selecione"
                items={[
                  { label: "XBOX", value: "XBOX_LIVE" },
                  { label: "Playstation", value: "PSN" },
                  { label: "PC", value: "PC" },
                  { label: "CROSS", value: "CROSS" },
                ].filter(
                  (console) =>
                    !(
                      watch("consoles").findIndex(
                        (v, i) => v.console === console.value && i !== index
                      ) >= 0
                    )
                )}
                onValueChange={(value) => onChange(value)}
                value={value}
                errorMessage={errors?.consoles?.[index]?.console?.message}
              />
            )}
            name={`consoles[${index}].console`}
            rules={{ required: "Campo obrigatório" }}
            defaultValue={item.console}
          />

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <CustomInput
                label="Qual seu ID no console (idêntico ou console)"
                placeholder="Informe seu ID exatamente conforme console"
                autoCapitalize="none"
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errorMessage={errors?.consoles?.[index]?.idconsole?.message}
              />
            )}
            name={`consoles[${index}].idconsole`}
            // rules={{ required: "Campo obrigatório" }}
            defaultValue=""
          />

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <CustomInput
                label="Confirme seu ID no console"
                placeholder="Informe seu ID exatamente conforme console"
                autoCapitalize="none"
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errorMessage={
                  errors?.consoles?.[index]?.idconsole_confirm?.message
                }
              />
            )}
            name={`consoles[${index}].idconsole_confirm`}
            // rules={{ required: "Campo obrigatório" }}
            defaultValue=""
          />
        </View>
      ))}

      <BtnAdd onPress={() => append(initial_values.consoles[0])}>
        <IcPlus />
        <AddText>Adicionar outro console</AddText>
      </BtnAdd>
      <Button style={{ alignSelf: "center" }} onPress={handleSubmit(onSubmit)}>
        Proximo passo
      </Button>
      <ButtonBack onPress={back}>
        <ButtonBackText>Voltar</ButtonBackText>
      </ButtonBack>
    </Form>
  );
};

export default Step2;
