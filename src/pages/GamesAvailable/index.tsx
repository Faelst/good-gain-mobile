import React from "react";
import { FlatList } from "react-native";
import { BaseButton, RectButton } from "react-native-gesture-handler";
import {
  Container,
  ImageBackground,
  HeaderTitle,
  Header,
  ListHorizontalButton,
  ListHorizontalButtonText,
  Main,
  ListContent,
  ImageItem,
  ListItemDescription,
  ListTitle,
  ListSubtitle,
  ListButton,
  ListButtonText,
} from "./styles";

import { rsize } from '../../utils/size'
import bgGames from '../../images/bg_games.png'
import bgCod from '../../images/bg_cod.png'
import bgFifa from '../../images/bg_fifa.png'

const dataGamesTypes = ["Todos","PS4", "PS5", "xbox"]
const dataGames = [
  {
    id: 1,
    image: bgFifa,
    name: "FIFA 20",
    type: "PS4",
    available: true
  },
  {
    id: 2,
    image: bgFifa,
    name: "FIFA 20",
    type: "xbox",
    available: true
  },
  {
    id: 3,
    image: bgCod,
    name: "Call of Duty - MW",
    type: "xbox",
    available: false
  }
]

const GamesAvailable: React.FC = () => {
  const listMarginGamesTypes = (index: number) => {
    if (index === dataGamesTypes.length - 1) {
      return {marginLeft: rsize(12), marginRight: rsize(12)}
    } else if (index >= 1) {
      return {marginLeft: rsize(12)}
    } else if (index === 0) {
      return {marginLeft: rsize(24)}
    }
  }
  const listMarginGames = (index: number) => {
    if (index === dataGames.length - 1) {
      return {marginTop: rsize(14), marginBottom: rsize(50)}
    } else if (index >= 1) {
      return {marginTop: rsize(14)}
    }
    else if (index === 0) {
      return {marginTop: rsize(58)}
    }
  }
  const handleButtonDisabled = (available: boolean) => {
    if (!available) {
      return {
        color: "#a9a9a9",
        borderColor: "#a9a9a9"
      }
    }
  }

  return (
    <Container>
      <ImageBackground source={bgGames}>
        <HeaderTitle>Jogos disponíveis</HeaderTitle>
      </ImageBackground>

      <Header>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataGamesTypes}
          keyExtractor={item => String(item)}
          renderItem={({item, index}) => (
            <ListHorizontalButton style={listMarginGamesTypes(index)}>
              <ListHorizontalButtonText>{item}</ListHorizontalButtonText>
            </ListHorizontalButton>
          )}
        />
      </Header>
        
      <Main>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataGames}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <ListContent style={listMarginGames(index)}>
              <ImageItem source={item.image} />
              <ListItemDescription>
                <ListTitle>{item.name} {"\n"}
                  <ListSubtitle>{item.type}</ListSubtitle>
                </ListTitle>

                  <ListButton
                    onPress={() => {}}
                    disabled={!item.available}
                    style={handleButtonDisabled(item.available)}
                  >
                    <ListButtonText
                      style={handleButtonDisabled(item.available)}
                    >
                      {item.available ? "Selecionar" : "Em breve"}
                    </ListButtonText>
                  </ListButton>
              </ListItemDescription>
            </ListContent>
          )}
        />
      </Main>
    </Container>
  )
}

export default GamesAvailable