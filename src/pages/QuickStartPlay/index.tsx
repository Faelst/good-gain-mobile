import React, { useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import ModalContent from "./components/ModalContent";
import SimpleButton from "../../components/SimpleButton";
import CardThin from "../../components/CardThin";
import { rsize } from "../../utils/size";

const QuickStartPlay: React.FC = () => {
  const [isChecked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);

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
          <Header source={banner}>
            <TextView>
              <HeaderTitleMD>Ultimate Team</HeaderTitleMD>
              <HeaderTitleXL>FIFA 20</HeaderTitleXL>
              <HeaderTitleMD>PS5</HeaderTitleMD>
            </TextView>
          </Header>

          <Title>Confie na sua habilidade e siga em frente.</Title>
          <Description>
            A melhor forma de jogar, se divertir e lucrar. Coloque seu time em
            campo, vença a partida e ganhe dinheiro.
          </Description>

          <CardThin
            title="Taxa de inscrição"
            value="R$5,00"
          />
          <CardThin
            style={{marginTop: rsize(9)}}
            title="Sua vitória vale"
            value="R$8,00"
            color="green"
          />

          <CustomModal onClose={toggleModal} isVisible={isModalVisible}>
            <ModalContent
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
