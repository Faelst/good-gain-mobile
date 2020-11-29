import React from 'react';

import {
  SubtitleView,
  Subtitle,
  SubtitleStrong,
  Card,
  Description,
  Span,
  Strong,
  Actions,
  ButtonOutlined,
  Button,
} from './styles';

import MatchContainer from '../../components/MatchContainer'
import imageProgress from '../../images/im_p3.png'

const Match: React.FC = () => {
  return (
    <MatchContainer title="Tudo pronto!" image={imageProgress}>
      <SubtitleView>
        <Subtitle>
        Podem iniciar a partida!
Não se esqueça de reportar o resultado
ao final da partida, beleza?
        </Subtitle>
        <SubtitleStrong>Bom jogo!</SubtitleStrong>
      </SubtitleView>

      <Card>
        <Description>
        Informe o seu resultado abaixo e lembre-se
o vencedor é obrigatório a enviar uma
foto do resultado final da partida, onde
conste o placar e os IDs dos jogadores.
        </Description>
        <Span>Ver exemplo</Span>
        <Strong>Selecione a opção, para informar</Strong>
        <Strong color="secondary">o seu resultado.</Strong>

        <Actions>
          <ButtonOutlined>Vitória</ButtonOutlined>
          <ButtonOutlined>Derrota</ButtonOutlined>
        </Actions>
      </Card>

      <Button>Enviar resultado</Button>
    </MatchContainer>
  )
}

export default Match;