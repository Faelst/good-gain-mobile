import React from 'react'
import { ScrollView } from 'react-native'
import {
  Container,
  ButtonCancel,
  Image,
  Title,
  Button,
  Strong,
  Span,
  Divider
} from './styles'

import { useNavigation } from '@react-navigation/native'

const GamesAvailable2: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <Container>
        <ButtonCancel onPress={() => navigation.goBack()} />
        <Image />

        <Title>Escolha uma das opções:</Title>

        <Button
          onPress={() => navigation.navigate('QuickStart')}
        >Partida Rápida
        </Button>
        <Strong>Aqui sua vitória vale dinheiro!{'\n'}
          <Span>Desafie alguém para um amistoso online no modo FUT.</Span>
        </Strong>
        
        <Divider />
        <Button>Campeonatos</Button>
        <Strong>Lucre alto com sua habilidade.{'\n'}
          <Span>
            Nesta opção você pode participar de campeonatos diários  no modo FUT que podem encher o seu bolso!
          </Span>
        </Strong>
      </Container>
    </ScrollView>
  )
}

export default GamesAvailable2