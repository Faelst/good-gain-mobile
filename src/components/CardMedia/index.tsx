import React from 'react'
import { ViewProps } from 'react-native'
import {
  Container,
  Image,
  DescriptionContent,
  TextContainer,
  Strong,
  StrongBig,
  StrongM,
  Span,
  Actions,
  Button,
  ButtonText
} from './styles'

import image from '../../images/bn_panelgg.png'
import ButtonOutlined from '../ButtonOutlined'

interface CardMediaProps extends ViewProps {
  value1: string,
  value2: string,
  onPress?: () => void
}
const CardMedia: React.FC<CardMediaProps> = ({
  value1, value2, onPress, ...props
}) => {
  return (
    <Container {...props}>
      <DescriptionContent>
        <Image source={image}/>
        <TextContainer>
          <Strong>Sua vitória vale</Strong>
          <StrongBig>R${value1}</StrongBig>
          <Span>Inscrição</Span>
          <StrongM>R${value2}</StrongM>
        </TextContainer>
      </DescriptionContent>

      <Actions>
        <ButtonOutlined>Saiba mais</ButtonOutlined>
        <Button onPress={onPress}>
          <ButtonText>Jogar</ButtonText>
        </Button>
      </Actions>
    </Container>
  )
}

export default CardMedia