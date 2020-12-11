import React, { useState, memo } from "react";
import { Platform } from 'react-native'

import { Container, TextCard } from "./styles";

import ContainerProfile from "../../components/ContainerProfile";
import CustomSwitch from "../../components/CustomSwitch";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'styled-components'

const NotificationCenter: React.FC = () => {
  const [allDisabled, setAllDisabled] = useState(false)
  const [data, setData] = useState([
    {
      title: "Pausar tudo",
      value: false,
    },
    {
      title: "Mensagens do App",
      value: true,
    },
    {
      title: "Propagandas",
      value: true,
    },
  ]);

  const navigation = useNavigation();
  const theme = useTheme()

  const toggleSwitch = (index: any) => {
    setData((previousState) => {
      const _prev = [...previousState];
      _prev[index].value = !_prev[index].value;
      return _prev;
    });
    if (index === 0) {setAllDisabled(!allDisabled)}
  };

  return (
    <ContainerProfile
      title="Central de notificações"
      goBack={() => navigation.goBack()}
    >
      <Container>
        {data.map((item, index) => (
          <TextCard
            key={index}
            title={item.title}
            color={theme.colors.textColor}
          >
            <CustomSwitch
              onValueChange={() => toggleSwitch(index)}
              disabled={index > 0 && allDisabled}
              value={item.value}
              thumbColor={
                Platform.OS !== "ios"
                ? index > 0 && allDisabled ? theme.colors.textSecondary :
                  item.value ? theme.colors.secondary : theme.colors.subtitle
                : item.value ? theme.colors.secondary : theme.colors.subtitle
              }
            />
          </TextCard>
        ))}
      </Container>
    </ContainerProfile>
  );
};

export default memo(NotificationCenter);
