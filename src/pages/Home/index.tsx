import React from "react";
import { FlatList, View } from "react-native";
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
  IconCash,
  IconPlus,
  Rectangle,
  Rectangle2,
  BalanceTitle,
  BalanceCash,
  ViewButton,
  ActionContainer,
  BackgroundMedia,
  MediaTextView,
  MediaTitle,
} from "./styles";

import bnHome1 from "../../images/bn_home1.png";
import bnHome2 from "../../images/bn_home2.png";
import icFlashWT from "../../images/icons/ic_flash.png";
import icTrophyWT from "../../images/icons/ic_trophy_wt.png";
import mdHome1 from "../../images/md_home1.png";
import mdHome2 from "../../images/md_home2.png";
import mdHome3 from "../../images/md_home3.png";
import mdHome4 from "../../images/md_home4.png";

import ActionCard from "../../components/ActionCard";
import SimpleButton from "../../components/SimpleButton";
import { Button } from '../../components/index'
import { useNavigation } from "@react-navigation/native";
import { separatorHorizontal } from "../../utils/separator";

const dataChallenge = [
  {
    image: bnHome1,
    title: "Desafie!",
    description:
      "Participe de partidas rápidas ou de campeonatos com jogadores reais.",
  },
  {
    image: bnHome2,
    title: "Divirta-se!",
    description: "Jogue com outras pessoas no conforto da sua casa.",
  },
];

const dataMedia = [
  {
    image: mdHome1,
    title: "Jogos disponiveis",
    navigation: "GamesAvailable",
  },
  {
    image: mdHome2,
    title: "Convidar amigos",
    navigation: "Home",
  },
  {
    image: mdHome3,
    title: "Ranking",
    navigation: "Home",
  },
  {
    image: mdHome4,
    title: "Suporte",
    navigation: "ProfileSupport",
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
              <BannerCard
                style={separatorHorizontal(index, dataChallenge, 30, 10, 30)}
              >
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
            <ViewButton>
              <Button onPress={() => navigation.navigate("PutCredit")}>
                <IconPlus />
              </Button>
            </ViewButton>
          </BalanceCard>

          <ActionContainer>
            <ActionCard
              size="md"
              image={icFlashWT}
              title="Partidas rápidas"
              onPress={() => navigation.navigate("QuickStart")}
            />
            <ActionCard
              size="md"
              image={icTrophyWT}
              title="Campeonatos"
              backgroundColor="secondary"
              onPress={() => navigation.navigate("Switching")}
            />

            {dataMedia.map((item, index) => (
              <SimpleButton
                key={index}
                onPress={() => handleItemSelected(item.navigation)}
              >
                <BackgroundMedia source={item.image}>
                  <MediaTextView>
                    <MediaTitle>{item.title}</MediaTitle>
                  </MediaTextView>
                </BackgroundMedia>
              </SimpleButton>
            ))}
          </ActionContainer>
        </Padding>
      </MainContent>
    </Container>
  );
};

export default Home;
