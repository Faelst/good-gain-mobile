import React, { useState } from "react";
import { ScrollView } from "react-native";

import {
  Container,
  BackButton,
  Header,
  TextView,
  HeaderTitleMD,
  HeaderTitleXL,
  Title,
  Description,
} from "./styles";

import banner from "../../images/bn_games_a1.png";
import CardMedia from "../../components/CardMedia";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useApp } from "../../contexts/app";

const dataWin = [
  {
    id: 1,
    cashback: 8.0,
    subscription: 5.0,
  },
  {
    id: 2,
    cashback: 24.0,
    subscription: 15.0,
  },
];

const QuickStart: React.FC = () => {
  const { params } = useRoute();
  const { covers } = useApp();
  const data: any = params?.data || {};
  const navigation = useNavigation();

  const [options, setOptions] = useState([
    { game: "fifa21", subscription: 5, cashback: 8 },
    { game: "fifa21", subscription: 10, cashback: 16 },
    { game: "fifa21", subscription: 15, cashback: 24 },
    { game: "r6siege", subscription: 50, cashback: 80 },
    { game: "codwarzone", subscription: 5, cashback: 8 },
  ]);

  const handlePlay = (option: any) => {
    navigation.navigate("QuickStartPlay", { data: { ...data, option } });
    console.log("QuickStartPlay");
  };

  console.log("QuickStart", { covers, data });

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header source={{ uri: covers[data.cover]?.cover }}>
          <TextView>
            <HeaderTitleMD>{data.gameMode}</HeaderTitleMD>
            <HeaderTitleXL>{data.name}</HeaderTitleXL>
            <HeaderTitleMD>{data.type}</HeaderTitleMD>
          </TextView>
        </Header>

        <Title>Partida rapida</Title>
        <Description>
          Escolha abaixo uma sala de acordo com o valor que você deseja receber
          por vitória.
        </Description>

        {options
          .filter((option) => option.game === data.cover)
          .map((item, index) => (
            <CardMedia
              key={String(index)}
              value1={item.cashback.toString() + ",00"}
              value2={item.subscription.toString() + ",00"}
              onPress={() => handlePlay(item)}
            />
          ))}
      </ScrollView>
    </Container>
  );
};

export default QuickStart;
