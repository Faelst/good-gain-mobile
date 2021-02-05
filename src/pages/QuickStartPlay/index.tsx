import React, { useEffect, useState } from "react";
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
  Footer,
  CheckboxView,
  Checkbox,
  Span,
  SpanUnderline,
} from "./styles";

import banner from "../../images/bn_games_a2.png";
import Button from "../../components/ButtonGradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import ModalContent from "./components/ModalContent";
import SimpleButton from "../../components/SimpleButton";
import CardThin from "../../components/CardThin";
import { rsize } from "../../utils/size";
import { useApp } from "../../contexts/app";

const QuickStartPlay: React.FC = () => {
  const [isChecked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const { params } = useRoute();
  const { covers } = useApp();
  const data: any = params?.data || {};

  const navigation = useNavigation();

  const toggleChecked = () => {
    setChecked(!isChecked);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    return () => {
      toggleModal();
    };
  }, []);

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()} />
        <ScrollView>
          <Header source={{ uri: covers[data.cover]?.cover }}>
            <TextView>
              <HeaderTitleMD>{data.gameMode}</HeaderTitleMD>
              <HeaderTitleXL>{data.name}</HeaderTitleXL>
              <HeaderTitleMD>{data.type}</HeaderTitleMD>
            </TextView>
          </Header>

          <Title>Confie na sua habilidade e siga em frente.</Title>
          <Description>
            A melhor forma de jogar, se divertir e lucrar. Coloque seu time em
            campo, vença a partida e ganhe dinheiro.
          </Description>

          <CardThin
            title="Taxa de inscrição"
            value={`R$${data.option?.subscription},00`}
          />
          <CardThin
            style={{ marginTop: rsize(9) }}
            title="Sua vitória vale"
            value={`R$${data.option?.cashback},00`}
            color="green"
          />

          <CustomModal onClose={toggleModal} isVisible={isModalVisible}>
            <ModalContent
              data={data}
              onFinish={() => {
                toggleModal();
                navigation.navigate("Match");
              }}
            />
          </CustomModal>
        </ScrollView>
      </Container>

      <Footer>
        <CheckboxView>
          <Checkbox onPress={toggleChecked} checked={isChecked} />
          <Span>
            {`Li e concordo com o `}
            <SimpleButton onPress={() => alert("Regulamento")}>
              <SpanUnderline>Regulamento.</SpanUnderline>
            </SimpleButton>
          </Span>
        </CheckboxView>
        <Button onPress={toggleModal} disabled={!isChecked}>
          Encontre seu adversário
        </Button>
      </Footer>
    </>
  );
};

export default QuickStartPlay;
