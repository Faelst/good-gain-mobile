import React from 'react'
import { ScrollView } from 'react-native'

import { Container, Title, ImageBackground, IconX, Description, DescriptionBold, Image, TextButton, ButtonTextStart } from './styles'
import CloseButton from '../../components/IconButton'
import ActionCard from '../../components/ActionCard'
import banner from '../../images/banner_detail.png'
import productExample from '../../images/product_example.png'
import flash from '../../images/icons/flash.svg'


const BannerDetail: React.FC = () => {
  return (
    <ScrollView>
      <Container>
        <ImageBackground source={banner}>
          <CloseButton>
            <IconX />
          </CloseButton>
        </ImageBackground>
        
        <Title>Prêmio Mensal</Title>
        <Description>
          Este mês sortearemos um {`\n`}
          <DescriptionBold>Play Station 5 </DescriptionBold>entre os {`\n`}
          3 primeiros do ranking.
        </Description>

        <Image source={productExample} />
        <TextButton>Ver regulamento</TextButton>
        <ActionCard width={287} image={flash} >
          <ButtonTextStart>Iniciar uma partida rápida</ButtonTextStart>
        </ActionCard>
      </Container>
    </ScrollView>
  )
}

export default BannerDetail