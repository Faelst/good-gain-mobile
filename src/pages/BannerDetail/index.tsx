import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Title,
  ImageBackground,
  IconX,
  Description,
  DescriptionBold,
  Image,
  TextButton,
  ButtonTextStart,
} from "./styles";

import bnDetail from "../../images/bn_detail.png";
import bnPs5 from "../../images/bn_ps5.png";
import icFlash from "../../images/icons/ic_flash.png";

import CloseButton from "../../components/IconButton";
import ActionCard from "../../components/ActionCard";
import { useNavigation } from "@react-navigation/native";

const BannerDetail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <ImageBackground source={bnDetail}>
          <CloseButton onPress={() => navigation.goBack()}>
            <IconX />
          </CloseButton>
        </ImageBackground>

        <Title>Prêmio Mensal</Title>
        <Description>
          Este mês sortearemos um {`\n`}
          <DescriptionBold>Play Station 5 </DescriptionBold>entre os {`\n`}3
          primeiros do ranking.
        </Description>

        <Image source={bnPs5} />
        <TextButton>Ver regulamento</TextButton>
        <ActionCard size="xl" image={icFlash}>
          <ButtonTextStart>Iniciar uma partida rápida</ButtonTextStart>
        </ActionCard>
      </Container>
    </ScrollView>
  );
};

export default BannerDetail;
