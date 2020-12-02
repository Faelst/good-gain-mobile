import React, { memo } from "react";
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
import CustomModal from '../../components/CustomModal'
import ModalContent from './components/ModalContent'
import { separatorVertical, separatorHorizontal } from '../../utils/separator'
import { useNavigation } from '@react-navigation/native'

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

  const navigation = useNavigation()

  const handleNextGames = () => {
    navigation.navigate("GamesAvailable2")
    toggleModal()
    console.log("nextGame")
  }

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
              <SimpleButton onPress={() => handleTab(index)}>
                {isTabSelected === index
                ? <TabStrong>{item}</TabStrong>
                : <TabTitle>{item}</TabTitle>}
              </SimpleButton>
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
                <Title>{item.name}</Title>
                <Subtitle>{item.type}</Subtitle>

                <ButtonView availabled={item.available}>
                  <Button disabled={!item.available} onPress={toggleModal}>
                    <ButtonText availabled={item.available}>
                      {item.available ? "Selecionar" : "Em breve"}
                    </ButtonText>
                  </Button>
                </ButtonView>
              </DescriptionContainer>
            </Card>
          )}
        />

        <CustomModal
          onClose={toggleModal}
          isVisible={isModalVisible}
        >
          <ModalContent onPress={handleNextGames}/>
        </CustomModal>
      </Main>
    </Container>
  )
}

export default memo(GamesAvailable)