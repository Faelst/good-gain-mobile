import React from 'react'
import {
  Container,
  Indicator,
  Title,
  Main,
  Border,
  ImageBG,
  ImageText,
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
      <Indicator />
      <Title>Escolha o modo de jogo online desejado:</Title>

      <Main>
        {dataGameMode.map((item, index) => {
          if (isFocused === index) {
            return (
              <Border key={item.id}>
                <SimpleButton onPress={() => handleSelect(index)}>
                  <ImageBG source={item.image}>
                    <ImageText
                      selected={isSelectedItem(index)}
                      isFocused={isFocused}
                    >{item.title}
                    </ImageText>
                  </ImageBG>
                </SimpleButton>
              </Border>
            )
          } else {
            return (
              <SimpleButton key={item.id} onPress={() => handleSelect(index)}>
                <ButtonContent>
                  <ImageBG source={item.image} isFocused={isFocused}/>
                  <ImageText
                    selected={isSelectedItem(index)}
                    isFocused={isFocused}
                  >{item.title}
                  </ImageText>
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