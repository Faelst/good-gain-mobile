import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  Container,
  ImageContainer,
  Image,
  Description,
  Title, 
  Subtitle
} from './styled'

interface DescriptionCardProps {
  image: ImageSourcePropType
  title: string
  description: string
  marginLeft?: boolean
}

const DetailsCard: React.FC<DescriptionCardProps> = ({
  image, title, description, marginLeft
}) => {
  return (
        <Container enabled={false} marginLeft={marginLeft}>
          <ImageContainer>
            <Image resizeMode="contain" source={image} />
          </ImageContainer>

          <Description>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Description>
        </Container>
  )
}

export default DetailsCard
