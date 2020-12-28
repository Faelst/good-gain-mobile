import React from "react";
import { ViewProps, View } from "react-native";
import {
  Container,
  Image,
  DescriptionContent,
  TextContainer,
  Strong,
  StrongBig,
  StrongM,
  Span,
  Actions,
  Button,
  ButtonText,
  Title,
  IcCalendar,
  DateEvent,
  Info,
} from "./styles";

import image from "../../images/bn_panelgg.png";
import ButtonOutlined from "../ButtonOutlined";
import { rsize } from "../../utils/size";

interface CardChampionshipProps extends ViewProps {
  name: string;
  date: string;
  value1: string;
  value2: string;
  info: string;
  onPress?: () => void;
}
const CardChampionship: React.FC<CardChampionshipProps> = ({
  name,
  date,
  value1,
  value2,
  info,
  onPress,
  ...props
}) => {
  return (
    <Container {...props}>
      <DescriptionContent>
        <Image source={image} />
        <TextContainer>
          <Title>{name}</Title>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: rsize(5),
              marginBottom: rsize(10),
            }}
          >
            <IcCalendar />
            <DateEvent>{date}</DateEvent>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Span>Inscrição</Span>
              <StrongM>R${value2}</StrongM>
            </View>
            <View style={{ flex: 1, marginLeft: rsize(10) }}>
              <StrongM>Sua vitória vale</StrongM>
              <StrongBig>R${value1}*</StrongBig>
            </View>
          </View>
        </TextContainer>
      </DescriptionContent>

      <Actions>
        <ButtonOutlined>Saiba mais</ButtonOutlined>
        <Button onPress={onPress}>
          <ButtonText>Jogar</ButtonText>
        </Button>
      </Actions>

      <Info>{info}</Info>
    </Container>
  );
};

export default CardChampionship;
