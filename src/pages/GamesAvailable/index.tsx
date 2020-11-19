import React, { memo } from "react";
import { FlatList, View } from "react-native";
import {
  Container,
  ImageGradient,
  HeaderTitle,
  Button,
  Tab,
  TabView,
  TabTitle,
  Main,
  Card,
  Image,
  DescriptionContainer,
  Title,
  Subtitle,
  ButtonView,
  ButtonText,
  Modal,
} from "./styles";

import ModalContent from './components/ModalContent'
import { separatorVertical, separatorHorizontal } from '../../utils/separator'

import bgGames from '../../images/bg_games.png'
import imCod from '../../images/im_games2.png'
import imFifa from '../../images/im_games1.png'

const dataTab = ["Todos","PS4", "PS5", "xbox"]
const dataGames = [
  {
    id: 1,
    image: imFifa,
    name: "FIFA 20",
    type: "PS4",
    available: true,
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

const GamesAvailable: React.FC = () => {
  const [isTabSelected, setTabSelected] = React.useState(0)
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleTab = (index: number) => {
    setTabSelected(index)
    console.log(`tab ${index}`)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <Container>
      <ImageGradient source={bgGames}>
        <HeaderTitle>Jogos disponíveis</HeaderTitle>
      </ImageGradient>

      <Tab>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataTab}
          keyExtractor={item => String(item)}
          renderItem={({item, index}) => (
            <TabView
              selected={isTabSelected === index ? true :  false}
              style={separatorHorizontal(index, dataTab, 24, 12, 12 )}
            >
              <Button onPress={() => handleTab(index)}>
                <TabTitle>{item}</TabTitle>
              </Button>
            </TabView>
          )}
        />
      </Tab>
        
      <Main>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataGames}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <Card style={separatorVertical(index, dataGames, 58, 14, 50 )}>
              <Image source={item.image} />
              <DescriptionContainer>
                <Title>{item.name} {"\n"}
                  <Subtitle>{item.type}</Subtitle>
                </Title>

                <ButtonView availabled={item.available}>
                  <Button enabled={item.available} onPress={toggleModal}>
                    <ButtonText availabled={item.available}>
                      {item.available ? "Selecionar" : "Em breve"}
                    </ButtonText>
                  </Button>
                </ButtonView>
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
            <ModalContent />
          </Modal>
        </View>
      </Main>
    </Container>
  )
}

export default memo(GamesAvailable)