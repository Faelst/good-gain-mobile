import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
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
  BackgroundTitle,
  ButtonGradient,
  ActionButton,
  ActionButtonText,
  ActionIcon,
  MediaDate,
  MediaActionButton,
  MediaActionButtonText,
  MediaFooterText
} from './styles'

import ActionCard from '../../components/ActionCard'
import profilePics from '../../images/profile_pics.png'
import ggImage1 from '../../images/gg_image1.png'
import ggImage2 from '../../images/gg_image2.png'
import ggImage3 from '../../images/gg_image3.png'
import control from '../../images/icons/control.svg'
import pfTrofeu from '../../images/icons/pf_trophy.svg'
import trophy from '../../images/icons/trophy.svg'
import flash from '../../images/icons/flash.svg'
import { rsize } from '../../utils/size'

const GGPanel: React.FC = () => {
  const [openPanel, setOpenPanel] = React.useState(true)

  const handleExpandablePanel = () => {
    setOpenPanel(!openPanel)
  }
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <GradientHeader />

          <MainContent>
            <ProfileImage source={profilePics} />
            <ProfileName>Lucas Monteiro</ProfileName>

            <ProfileDetailsContainer>
              <DetailCard>
                <DetailImage source={pfTrofeu} />
                <DetailContent>
                  <DetailBigTitle>20°</DetailBigTitle>
                  <DetailSubtitle>Ranking GG</DetailSubtitle>
                </DetailContent>
              </DetailCard>

              <DetailCard>
                <DetailImage source={control} />
                <DetailContent>
                  <DetailBigTitle>16</DetailBigTitle>
                  <DetailSubtitle>Partidas</DetailSubtitle>
                </DetailContent>
              </DetailCard>
            </ProfileDetailsContainer>

            <SectionHeader>
              <SectionButton rippleColor="transparent" onPress={handleExpandablePanel}>
                <SectionTitle>Ranking por Jogos</SectionTitle>
                <SectionIcon open={openPanel}/>
              </SectionButton>
            </SectionHeader>

            <ExpansionPanel open={openPanel}>

              <MediaCard>
                <MediaHeader>
                  <MediaImage source={ggImage1} />

                  <MediaDescription>
                    <MediaTitle>FIFA 20 PS4</MediaTitle>
                    <MediaValue>
                      05 <MediaSubtitle>Vitórias em partidas rápidas</MediaSubtitle>
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
                    image={flash}
                    title="Partidas rápidas"
                    width={144}
                  />
                  <ActionCard
                    image={trophy}
                    title="Campeonatos"
                    width={144}
                    backgroundColor="secondary"
                  />
                </MediaActionContent>
              </MediaCard>

              <BackgroundImage source={ggImage2}>
                <BackgroundTitle>
                  Campeonatos que está participando
                </BackgroundTitle>
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
                  <MediaImage source={ggImage3} />

                  <MediaDescription>
                    <MediaTitle>FIFA 20 GLOBAL SERIES</MediaTitle>
                    <MediaDate>Domingo • 04 de Outubro de 2020</MediaDate>
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
      </SafeAreaView>
    </Container>
  )
}

export default GGPanel