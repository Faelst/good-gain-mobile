import React from "react";
import { ScrollView } from "react-native";
import moment from "moment";

import {
  Container,
  BackButton,
  Header,
  TextView,
  HeaderTitleMD,
  HeaderTitleXL,
  Title,
  Description,
  DescriptionContainer,
  Percentual,
  CalendarIcon,
  ChampionshipListContainer,
} from "./styles";

import banner from "../../images/bn_championship.png";
import CardChampionship from "../../components/CardChampionship";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { rsize } from "../../utils/size";

const dataWin = [
  {
    id: 1,
    name: "FIFA Championship GG5",
    cashback: 8.0,
    subscription: 5.0,
    info:
      "*Valor válido apenas se a chave atingir\n o total de 16 participantes.",
    description: `O campeonato ocorre no formato mata-mata (1 jogo) e sem intervalo de tempo entre uma fase e outra da competição. O campeão vai se divertir e faturar um bom dinheiro, com lucro de até 1000% do capital.`,
  },
  {
    id: 2,
    name: "FIFA Championship GG5",
    cashback: 24.0,
    subscription: 15.0,
    info:
      "*Valor válido apenas se a chave atingir\n o total de 16 participantes.",
    description: `O campeonato ocorre no formato mata-mata (1 jogo) e sem intervalo de tempo entre uma fase e outra da competição. O campeão vai se divertir e faturar um bom dinheiro, com lucro de até 1000% do capital.`,
  },
];

const Championship: React.FC = () => {
  const navigation = useNavigation();

  const handlePlay = (championship: any) => {
    navigation.navigate("ChampionshipInfo", { championship });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header source={banner}>
          <BackButton onPress={() => navigation.goBack()} />
          <TextView>
            <HeaderTitleMD>Ultimate Team</HeaderTitleMD>
            <HeaderTitleXL>FIFA 20</HeaderTitleXL>
            <HeaderTitleMD>PS5</HeaderTitleMD>
          </TextView>
        </Header>

        <Title>Campeonato</Title>
        <DescriptionContainer>
          <Description>Lucros de até</Description>
          <Percentual>1000%</Percentual>
          <Description>jogando um dos nossos campeonatos.</Description>
        </DescriptionContainer>

        <CustomButton
          style={{ marginVertical: rsize(10), marginHorizontal: rsize(24) }}
          leftComponent={<CalendarIcon />}
          textAlign="left"
        >
          Filtrar por data
        </CustomButton>

        <ChampionshipListContainer>
          {dataWin.map((item) => (
            <CardChampionship
              name={item.name}
              key={item.id}
              date={moment().format("DD MMM [às] HH:mm")}
              value1={item.cashback.toString() + ",00"}
              value2={item.subscription.toString() + ",00"}
              info={item.info}
              onPress={() => handlePlay(item)}
            />
          ))}
        </ChampionshipListContainer>
      </Container>
    </ScrollView>
  );
};

export default Championship;
