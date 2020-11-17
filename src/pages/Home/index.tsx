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
  MediaButtonText,
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
import { rsize } from "../../utils/size";
import { useNavigation } from "@react-navigation/native";

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
    navigation: "GamesAvailable"
  },
  {
    image: mdHome2,
    title: "Convidar amigos",
    navigation: "Home"
  },
  {
    image: mdHome3,
    title: "Ranking",
    navigation: "Home"
  },
  {
    image: mdHome4,
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
            <ActionCard
              size="md"
              image={icFlashWT}
              title="Partidas rápidas"
            />
            <ActionCard
              size="md" 
              image={icTrophyWT}
              title="Campeonatos"
              backgroundColor="secondary"
            />

            {dataMedia.map((item, index) => (
              <CardMediaContainer key={index}>
                <BackgroundMedia source={item.image}>
                  <MediaButton
                    onPress={() => handleItemSelected(item.navigation)}
                  >
                    <MediaButtonText>{item.title}</MediaButtonText>
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
