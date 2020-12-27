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
  Details1,
  Details2,
  Strong,
  Footer,
  CheckboxView,
  Checkbox,
  Span,
  SpanUnderline,
} from "./styles";

import banner from "../../images/bn_championship2.png";
import Button from "../../components/ButtonGradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import ModalContent from "./components/ModalContent";

const ChampionshipInfo: React.FC = () => {
  const route = useRoute();
  const { championship } = route.params as any;

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
    <ScrollView>
      <Container>
        <Header source={banner}>
          <BackButton onPress={() => navigation.goBack()} />
          <TextView>
            <HeaderTitleMD>Ultimate Team</HeaderTitleMD>
            <HeaderTitleXL>FIFA 20</HeaderTitleXL>
            <HeaderTitleMD>PS5</HeaderTitleMD>
          </TextView>
        </Header>

        <Title>{championship.name}</Title>
        <Description>{championship.description}</Description>

        <Details1>
          <Strong>Taxa de inscrição</Strong>
          <Strong>R$5,00</Strong>
        </Details1>
        <Details2>
          <Strong>Sua vitória vale</Strong>
          <Strong>R$8,00</Strong>
        </Details2>

        <Footer>
          <CheckboxView>
            <Checkbox onPress={toggleChecked} checked={isChecked} />
            <Span>
              {`Li e concordo com o `}
              <SpanUnderline onPress={() => alert("Regulamento")}>
                Regulamento.
              </SpanUnderline>
            </Span>
          </CheckboxView>
          <Button onPress={toggleModal} disabled={!isChecked}>
            Encontre seu adversário
          </Button>
        </Footer>

        <CustomModal onClose={toggleModal} isVisible={isModalVisible}>
          <ModalContent
            onFinish={() => {
              toggleModal();
              navigation.navigate("Match");
            }}
          />
        </CustomModal>
      </Container>
    </ScrollView>
  );
};

export default ChampionshipInfo;
