import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  Container,
  Image,
  Content,
  DescriptionContainer,
  Title,
  SubTitle,
  SubTitle2,
  Tag,
  IconContainer,
  IconChevronRight,
  IconMapPin,
  IconPhone
} from './styles'

interface CardMediaProps {
  image: ImageSourcePropType
  title: string
  tag?: string
  address?: string
  phone?: string
  marginTop?: boolean
}

const CardMedia: React.FC<CardMediaProps> = ({
  image, title, tag, address, phone, marginTop
}) => {
  return (
    <Container marginTop={marginTop}>
      <Image source={image} />

      <Content>
        <DescriptionContainer>
          <Title>{title}</Title>
          {tag && <Tag>{tag}</Tag>}
          {address && <SubTitle><IconMapPin />{` ${address}`}</SubTitle>}
          {phone && <SubTitle2><IconPhone />{` ${phone}`}</SubTitle2>}
        </DescriptionContainer>

        <IconContainer>
          <IconChevronRight/>
        </IconContainer>
      </Content>
    </Container>
  )
}
export default CardMedia