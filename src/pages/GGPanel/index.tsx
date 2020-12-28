import React from "react";
import { View, ScrollView } from "react-native";
import {
  Container,
  GradientHeader,
  MainContent,
  ProfileImage,
  ProfileName,
  ProfileDetailsContainer,
  DetailCard,
  DetailContent,
  DetailImage,
  DetailBigTitle,
  DetailSubtitle,
  SectionHeader,
  SectionTitle,
  SectionButton,
  SectionIcon,
  ExpansionPanel,
  MediaCard,
  MediaHeader,
  MediaImage,
  MediaDescription,
  MediaTitle,
  MediaTextContent,
  MediaValue,
  MediaSubtitle,
  MediaStrong,
  MediaActionContent,
  BackgroundImage,
  BackgroundTitleContainer,
  BackgroundTitle,
  ButtonGradient,
  ActionButtonText,
  ActionIcon,
  MediaDate,
  MediaActionButton,
  MediaActionButtonText,
  MediaFooterText,
} from "./styles";

import profilePics from "../../images/profile_pics.png";
import imPanelGG from "../../images/im_panelgg.png";
import bnPanelGG from "../../images/bn_panelgg.png";
import imPanelGG2 from "../../images/im_panelgg2.png";
import icControl from "../../images/icons/ic_control.png";
import icTrophy from "../../images/icons/ic_trophy.png";
import icTrophyWT from "../../images/icons/ic_trophy_wt.png";
import icFlashWT from "../../images/icons/ic_flash.png";

import ActionCard from "../../components/ActionCard";
import { useNavigation } from "@react-navigation/native";
import { rsize } from "../../utils/size";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";

const GGPanel: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [openPanel, setOpenPanel] = React.useState(true);

  const handleExpandablePanel = () => {
    setOpenPanel(!openPanel);
  };

  const navigation = useNavigation()
  return (
    <Container>
      <ScrollView>
        <GradientHeader />

        <MainContent>
          <ProfileImage source={{ uri: user?.image || "" }} />
          <ProfileName>{user?.name}</ProfileName> 

          <ProfileDetailsContainer>
            <DetailCard>
              <DetailImage source={icTrophy} />
              <DetailContent>
                <DetailBigTitle>20°</DetailBigTitle>
                <DetailSubtitle>Ranking GG</DetailSubtitle>
              </DetailContent>
            </DetailCard>

            <DetailCard>
              <DetailImage source={icControl} />
              <DetailContent>
                <DetailBigTitle>16</DetailBigTitle>
                <DetailSubtitle>Partidas</DetailSubtitle>
              </DetailContent>
            </DetailCard>
          </ProfileDetailsContainer>

          <SectionHeader>
            <SectionButton
              rippleColor="transparent"
              onPress={handleExpandablePanel}
            >
              <SectionTitle>Ranking por Jogos</SectionTitle>
              <SectionIcon open={openPanel} />
            </SectionButton>
          </SectionHeader>

          <ExpansionPanel open={openPanel}>
            <MediaCard>
              <MediaHeader>
                <MediaImage source={imPanelGG} />

                <MediaDescription>
                  <MediaTitle>FIFA 20 PS4</MediaTitle>
                  <MediaValue>
                    05{" "}
                    <MediaSubtitle>Vitórias em partidas rápidas</MediaSubtitle>
                  </MediaValue>
                  <MediaValue>
                    02 <MediaSubtitle>Vitórias em campeonatos</MediaSubtitle>
                  </MediaValue>
                  <MediaValue>
                    07 <MediaSubtitle>Pontos no jogo</MediaSubtitle>
                  </MediaValue>
                </MediaDescription>
              </MediaHeader>

              <MediaStrong>20° no ranking deste jogo</MediaStrong>
              <MediaActionContent>
                <ActionCard
                  image={icFlashWT}
                  title="Partidas rápidas"
                  size="sm"
                  onPress={() => navigation.navigate("QuickStart")}
                />
                <ActionCard
                  image={icTrophyWT}
                  title="Campeonatos"
                  size="sm"
                  backgroundColor="secondary"
                  onPress={() => navigation.navigate("Championship")}
                />
              </MediaActionContent>
            </MediaCard>

            <BackgroundImage source={bnPanelGG}>
              <BackgroundTitleContainer>
                <BackgroundTitle>
                  Campeonatos que está participando
                </BackgroundTitle>
              </BackgroundTitleContainer>
            </BackgroundImage>

            <ButtonGradient>
              <ActionButtonText>UEFA GG Championchip</ActionButtonText>
              <ActionIcon />
            </ButtonGradient>

            <SectionHeader style={{ height: rsize(48) }}>
              <SectionTitle>Ranking por Jogos</SectionTitle>
            </SectionHeader>

            <MediaCard style={{ height: rsize(200) }}>
              <MediaHeader>
                <MediaImage source={imPanelGG2} />

                <MediaDescription>
                  <MediaTitle>FIFA 20 GLOBAL SERIES</MediaTitle>
                  <View>
                    <MediaDate>Domingo • 04 de Outubro de 2020</MediaDate>
                  </View>
                  <MediaTextContent>
                    <MediaValue>R$50,00</MediaValue>
                    <MediaSubtitle>Taxa de inscrição</MediaSubtitle>
                  </MediaTextContent>
                  <MediaTextContent>
                    <MediaValue>R$500,00</MediaValue>
                    <MediaSubtitle>Premiação máxima</MediaSubtitle>
                  </MediaTextContent>
                </MediaDescription>
              </MediaHeader>

              <MediaActionButton>
                <MediaActionButtonText>Participar</MediaActionButtonText>
              </MediaActionButton>

              <MediaFooterText>
                * Prêmio válido para preenchimento completo da chave
              </MediaFooterText>
            </MediaCard>
          </ExpansionPanel>
        </MainContent>
      </ScrollView>
    </Container>
  );
};

export default GGPanel;
