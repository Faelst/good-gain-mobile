import React from 'react'
import {
  Container,
  Title,
  Main,
  Border,
  ImageBG,
  TextContainer,
  Text,
  Button,
  ButtonContent
} from './styles'

import SimpleButton from '../../../../components/SimpleButton'

import imMedia1 from '../../../../images/im_games3.png'
import imMedia2 from '../../../../images/im_games4.png'

const dataGameMode = [
  {
    id: 1,
    image: imMedia1,
    title: "Ultimate Team"
  },
  {
    id: 2,
    image: imMedia2,
    title: "Tradicional"
  }
]

interface ModalItemProps {}
const ModalContent: React.FC<ModalItemProps> = () => {
  const [isFocused, setFocused] = React.useState(undefined)

  const handleSelect = (index: any) => {
    setFocused(index)
    console.log(`game mode ${index}`)
  }

  const isSelectedItem = (index: any) => {
    return isFocused === index ? true : false
  }

  return (
    <Container>
      <Title>Escolha o modo de jogo online desejado:</Title>

      <Main>
        {dataGameMode.map((item, index) => {
          if (isFocused === index) {
            return (
              <Border key={item.id}>
                <SimpleButton onPress={() => handleSelect(index)}>
                  <ImageBG source={item.image}>
                    <TextContainer>
                      <Text
                        selected={isSelectedItem(index)}
                        isFocused={isFocused}
                      >{item.title}
                      </Text>
                    </TextContainer>
                  </ImageBG>
                </SimpleButton>
              </Border>
            )
          } else {
            return (
              <SimpleButton key={item.id} onPress={() => handleSelect(index)}>
                <ButtonContent>
                  <ImageBG source={item.image} isFocused={isFocused}/>
                  <TextContainer>
                    <Text
                      selected={isSelectedItem(index)}
                      isFocused={isFocused}
                    >{item.title}
                    </Text>
                  </TextContainer>
                </ButtonContent>
              </SimpleButton>
            )
          }
        })}
      </Main>

      <Button
        disabled={isSelectedItem(undefined)}
        onPress={() => console.log("next")}
      >Próximo
      </Button>
    </Container>
  )
}

export default ModalContent