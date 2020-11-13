import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import {
  Container,
  Header,
  HeaderContent,
  AppBarContent,
  AppBarButton,
  IconSeacrh,
  IconBell,
  Logo,
  MainContent,
  Padding,
  BannerCard,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BalanceCard,
  Rectangle,
  Rectangle2,
  BalanceTitle,
  BalanceCash,
  BalanceButton,
  IconCash,
  IconPlus,
  ActionContainer,
  CardMediaContainer,
  BackgroundMedia,
  MediaButton,
  CardMediaTitle,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import CardMedia from "../../components/CardMedia";
import ActionCard from "../../components/ActionCard";
import { rsize } from "../../utils/size";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import flash from "../../images/icons/flash.svg";
import trophy from "../../images/icons/trophy.svg";
import bgMedia1 from "../../images/bg_media1.png";
import bgMedia2 from "../../images/bg_media2.png";
import bgMedia3 from "../../images/bg_media3.png";
import bgMedia4 from "../../images/bg_media4.png";
import SimpleButton from "../../components/SimpleButton";

const dataChallenge = [
  {
    image: banner1,
    title: "Desafie!",
    description:
      "Participe de partidas rápidas ou de campeonatos com jogadores reais.",
  },
  {
    image: banner2,
    title: "Divirta-se!",
    description: "Jogue com outras pessoas no conforto da sua casa.",
  },
];

const dataMedia = [
  {
    image: bgMedia1,
    title: "Jogos disponiveis",
    navigation: "GamesAvailable"
  },
  {
    image: bgMedia2,
    title: "Convidar amigos",
    navigation: "Home"
  },
  {
    image: bgMedia3,
    title: "Ranking",
    navigation: "Home"
  },
  {
    image: bgMedia4,
    title: "Suporte",
    navigation: "Home"
  },
];

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleBannerSelected(banner: any) {
    console.log("BannerSelected");
    navigation.navigate("BannerDetail", { banner });
  }

  function handleItemSelected(item: string) {
    console.log(item);
    navigation.navigate(item);
  }

  const listMargin = (index: number) => {
    if (index === dataChallenge.length - 1) {
      return {
        marginLeft: rsize(10, "w"),
        marginRight: rsize(30, "w"),
      };
    } else if (index >= 1) {
      return {
        marginLeft: rsize(10, "w"),
      };
    } else if (index === 0) {
      return {
        marginLeft: rsize(30, "w"),
      };
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo />
          <AppBarContent>
            <AppBarButton>
              <IconSeacrh />
            </AppBarButton>
            <AppBarButton>
              <IconBell />
            </AppBarButton>
          </AppBarContent>
        </HeaderContent>
      </Header>

      <MainContent>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={dataChallenge}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <SimpleButton onPress={() => handleBannerSelected(item)}>
              <BannerCard style={listMargin(index)}>
                <BannerImage source={item.image} />
                <BannerContent>
                  <BannerTitle>{item.title}</BannerTitle>
                  <BannerDescription>{item.description}</BannerDescription>
                </BannerContent>
              </BannerCard>
            </SimpleButton>
          )}
        />

        <Padding>
          <BalanceCard>
            <Rectangle />
            <Rectangle2 />
            <IconCash />
            <View>
              <BalanceTitle>Saldo atual</BalanceTitle>
              <BalanceCash>R$150,00</BalanceCash>
            </View>
            <BalanceButton>
              <IconPlus />
            </BalanceButton>
          </BalanceCard>

          <ActionContainer>
            <ActionCard image={flash} title="Partidas rápidas" />
            <ActionCard
              image={trophy}
              title="Campeonatos"
              backgroundColor="secondary"
            />

            {dataMedia.map((item, index) => (
              <CardMediaContainer key={index}>
                <BackgroundMedia source={item.image}>
                  <MediaButton
                    onPress={() => handleItemSelected(item.navigation)}
                  >
                    <CardMediaTitle>{item.title}</CardMediaTitle>
                  </MediaButton>
                </BackgroundMedia>
              </CardMediaContainer>
            ))}
          </ActionContainer>
        </Padding>
      </MainContent>
    </Container>
  );
};

export default Home;
