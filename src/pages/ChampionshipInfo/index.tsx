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
  Subtitle,
  Footer,
  CheckboxView,
  Checkbox,
  Span,
  SpanUnderline,
  TitleGradient,
  CardContainer,
  InfoContainer,
} from "./styles";

import banner from "../../images/bn_championship2.png";
import Button from "../../components/ButtonGradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import ModalContent from "./components/ModalContent";
import CardThin from "../../components/CardThin";
import Card from "./components/Card"
import CardLight from "./components/CardLight"
import { rsize } from "../../utils/size";

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

/*   useEffect(() => {
    return () => {
      toggleModal();
    };
  }, []); */

  return (
    <>
      <Container>
        <ScrollView>
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

          <CardThin
            title="Taxa de inscrição"
            value="R$5,00"
          />
          <CardThin
            style={{marginTop: rsize(9)}}
            title="Prêmio de até"
            value="R$55,00*"
            color="green"
          />

          <TitleGradient>Ainda dá tempo de participar</TitleGradient>
          <Subtitle>As inscrições se encerram em</Subtitle>

          <CardContainer>
            <Card title="01" subtitle="dias" />
            <Card title="05" subtitle="horas" />
            <Card title="25" subtitle="minutos" />
          </CardContainer>

          <Card
            style={{alignSelf: "center"}}
            color="green"
            title="16 vagas"
            subtitle="disponíveis"
          />

          <InfoContainer>
            <CardLight title="Inicia em" subtitle="20 ago às 18:00" />
            <CardLight title="Console" subtitle="PS5" />
            <CardLight title="Modo" subtitle="Ultimate Team" />
            <CardLight title="Formato" subtitle="Mata-mata" />
            <CardLight title="Número de Vagas" subtitle="16" />
          </InfoContainer>

          <Span style={{marginHorizontal: rsize(25), marginBottom: rsize(27)}}>
            *Valor válido apenas se a chave atingir
            o total de 16 participantes.
          </Span>

        </ScrollView>
      </Container>

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
          Participar
        </Button>
      </Footer>

      <CustomModal onClose={toggleModal} isVisible={isModalVisible}>
        <ModalContent
          onFinish={() => {
            toggleModal();
            navigation.navigate("Switching");
          }}
        />
      </CustomModal>
    </>
  );
};

export default ChampionshipInfo;
