import React, { memo, useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  ImageGradient,
  HeaderTitle,
  Button,
  Tab,
  TabView,
  TabStrong,
  TabTitle,
  Main,
  Card,
  Image,
  DescriptionContainer,
  Title,
  Subtitle,
  ButtonView,
  ButtonText,
} from "./styles";

import SimpleButton from "../../components/SimpleButton";
import CustomModal from "../../components/CustomModal";
import ModalContent from "./components/ModalContent";
import { separatorVertical, separatorHorizontal } from "../../utils/separator";
import { useNavigation } from "@react-navigation/native";

import bgGames from "../../images/bg_games.png";
import imCod from "../../images/im_games2.png";
import imFifa from "../../images/im_games1.png";
import { useApp } from "../../contexts/app";

// const dataTab = ["Todos", "PS4", "PS5", "xbox"];
// const dataGames = [
//   {
//     id: 1,
//     image: imFifa,
//     name: "FIFA 20",
//     type: "PS4",
//     available: true,
//   },
//   {
//     id: 2,
//     image: imFifa,
//     name: "FIFA 20",
//     type: "xbox",
//     available: true,
//   },
//   {
//     id: 3,
//     image: imCod,
//     name: "Call of Duty - MW",
//     type: "xbox",
//     available: false,
//   }
// ]

const GamesAvailable: React.FC = () => {
  const { games, covers } = useApp();
  const [isTabSelected, setTabSelected] = React.useState(0);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [data, setData] = React.useState({});
  const [dataGames, setDataGames] = useState<any[]>([]);
  const [dataTab, setDataTab] = useState<any[]>(["Todos"]);

  const navigation = useNavigation();

  const handleNextGames = () => {
    navigation.navigate("GamesAvailable2", { data });
    toggleModal();
  };

  const handleTab = (index: number) => {
    setTabSelected(index);
    console.log(`tab ${index}`);
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleSelected = (item: object | any) => {
    toggleModal();
    setData(item);
  };

  const handleGameMode = (event: { gameMode: string }) => {
    setData((previousState) => {
      const _prev = { ...previousState, gameMode: event.gameMode };
      return _prev;
    });
  };

  useEffect(() => {
    try {
      if (!games) return;
      // if (!covers) return;

      let _games: any[] = [];
      Object.keys(games).map((v: any) => {
        _games = [
          ..._games,
          ...games[v].map((game: any) => {
            console.log({
              game,
              covers: JSON.stringify(covers).substr(25),
              cover: covers?.[game.cover]?.cover?.substr(25),
            });
            const image = covers?.[game.cover]?.cover
              ? covers?.[game.cover]?.cover
              : "";

            return {
              ...game,
              type: v,
              image,
              available: true,
            };
          }),
        ];
      });

      setDataGames(_games);
      setDataTab(["Todos", ...Object.keys(games)]);
    } catch (error) {}
  }, [games, covers]);

  console.log("Games Avaliable", { dataGames, dataTab });

  return (
    <Container>
      <ImageGradient source={bgGames}>
        <HeaderTitle>Jogos dispon??veis</HeaderTitle>
      </ImageGradient>

      <Tab>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataTab}
          keyExtractor={(item) => String(item)}
          renderItem={({ item, index }) => (
            <SimpleButton onPress={() => handleTab(index)}>
              <TabView
                selected={isTabSelected === index ? true : false}
                style={separatorHorizontal(index, dataTab, 24, 12, 12)}
              >
                {isTabSelected === index ? (
                  <TabStrong>{item}</TabStrong>
                ) : (
                  <TabTitle>{item}</TabTitle>
                )}
              </TabView>
            </SimpleButton>
          )}
        />
      </Tab>

      <Main>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataGames.filter(
            (game) =>
              dataTab[isTabSelected] === "Todos" ||
              game.type === dataTab[isTabSelected]
          )}
          keyExtractor={(item) => String(`${item.type}_${item.name}`)}
          renderItem={({ item, index }) => (
            <Card style={separatorVertical(index, dataGames, 58, 14, 50)}>
              <Image source={{ uri: item.image }} />
              <DescriptionContainer>
                <Title>{item.name}</Title>
                <Subtitle>{item.type}</Subtitle>

                <ButtonView availabled={item.available}>
                  <Button
                    disabled={!item.available}
                    onPress={() => handleSelected(item)}
                  >
                    <ButtonText availabled={item.available}>
                      {item.available ? "Selecionar" : "Em breve"}
                    </ButtonText>
                  </Button>
                </ButtonView>
              </DescriptionContainer>
            </Card>
          )}
        />

        <CustomModal onClose={toggleModal} isVisible={isModalVisible}>
          <ModalContent
            onPlay={(event) => {
              handleGameMode(event);
            }}
            onPress={handleNextGames}
          />
        </CustomModal>
      </Main>
    </Container>
  );
};

export default memo(GamesAvailable);
