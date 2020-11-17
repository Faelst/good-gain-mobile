import React, { memo } from "react";
import { FlatList, View } from "react-native";
import {
  Container,
  ImageBackground,
  HeaderTitle,
  Button,
  Filter,
  FilterButtonView,
  FilterButtonText,
  Main,
  Card,
  ImageItem,
  DescriptionContainer,
  ItemTitle,
  ItemSubtitle,
  ItemButtonView,
  ItemButtonText,
  ModalContent,
  ModalIndicator,
  ModalTitle,
  MediaContainer,
  Modal,
  ModalButton,
  MediaBorder,
} from "./styles";

import ModalItem from './components/ModalItem'
import { separatorVertical, separatorHorizontal } from '../../utils/separator'

import bgGames from '../../images/bg_games.png'
import imCod from '../../images/im_games2.png'
import imFifa from '../../images/im_games1.png'
import imMedia1 from '../../images/im_games3.png'
import imMedia2 from '../../images/im_games4.png'

const dataFilter = ["Todos","PS4", "PS5", "xbox"]
const dataGames = [
  {
    id: 1,
    image: imFifa,
    name: "FIFA 20",
    type: "PS4",
    available: true,
    mode: [
      { 
        id: 1,
        image: imMedia1,
        name: "Ultimate Team"
      },
      {
        id: 2,
        image: imMedia2,
        name: "Tradicional"
      }
    ]
  },
  {
    id: 2,
    image: imFifa,
    name: "FIFA 20",
    type: "xbox",
    available: true
  },
  {
    id: 3,
    image: imCod,
    name: "Call of Duty - MW",
    type: "xbox",
    available: false
  }
]
const dataGameMode = [
  {
    id: 1,
    image: bgGames,
    title: "Ultimate Team"
  },
  {
    id: 2,
    image: bgGames,
    title: "Tradicional"
  }
]

const GamesAvailable: React.FC = () => {
  const [isFilterSelected, setFilterSelected] = React.useState(0)
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isGameModeSelected, setGameModeSelected] = React.useState(undefined)

  const handleFilter = (index: number) => {
    setFilterSelected(index)
    console.log(`filter ${index}`)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const handleModal = (index: number | any) => {
    setGameModeSelected(index)
    console.log(`game mode ${index}`)
  }

  return (
    <Container>
      <ImageBackground source={bgGames}>
        <HeaderTitle>Jogos disponíveis</HeaderTitle>
      </ImageBackground>

      <Filter>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataFilter}
          keyExtractor={item => String(item)}
          renderItem={({item, index}) => (
            <FilterButtonView
              selected={isFilterSelected === index ? true :  false}
              style={separatorHorizontal(index, dataFilter, 24, 12, 12 )}
            >
              <Button onPress={() => handleFilter(index)}>
                <FilterButtonText>{item}</FilterButtonText>
              </Button>
            </FilterButtonView>
          )}
        />
      </Filter>
        
      <Main>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataGames}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <Card style={separatorVertical(index, dataGames, 58, 14, 50 )}>
              <ImageItem source={item.image} />
              <DescriptionContainer>
                <ItemTitle>{item.name} {"\n"}
                  <ItemSubtitle>{item.type}</ItemSubtitle>
                </ItemTitle>

                <ItemButtonView availabled={item.available}>
                  <Button enabled={item.available} onPress={toggleModal}>
                    <ItemButtonText availabled={item.available}>
                      {item.available ? "Selecionar" : "Em breve"}
                    </ItemButtonText>
                  </Button>
                </ItemButtonView>
              </DescriptionContainer>
            </Card>
          )}
        />

        <View>
          <Modal
            onBackButtonPress={toggleModal}
            onBackdropPress={toggleModal}
            onSwipeComplete={toggleModal}
            isVisible={isModalVisible}
          >
            <ModalContent>
              <ModalIndicator />
              <ModalTitle>Escolha o modo de jogo online desejado:</ModalTitle>

              <MediaContainer>
                {dataGameMode.map((item, index) => {
                  if (isGameModeSelected === index) {
                    return (
                      <MediaBorder key={item.id}>
                        <ModalItem
                          title={item.title}
                          image={item.image}
                          onPress={() => handleModal(index)}
                        />
                      </MediaBorder>
                    )
                  } else {
                    return (
                      <ModalItem
                        key={item.id}
                        index={index}
                        title={item.title}
                        image={item.image}
                        onPress={() => handleModal(index)}
                        isFocused={isGameModeSelected}
                      />
                    )
                  }
                })}
              </MediaContainer>

              <ModalButton
                disabled={isGameModeSelected === undefined ? true : false}
                onPress={() => console.log("next")}
              >Próximo
              </ModalButton>
            </ModalContent>
          </Modal>
        </View>
      </Main>
    </Container>
  )
}

export default memo(GamesAvailable)