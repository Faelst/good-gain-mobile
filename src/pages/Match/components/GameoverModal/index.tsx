import React from 'react';
import CustomBanner from '../../../../components/CustomBanner';
import {
  Container,
  Title,
  View,
  Strong,
  Span,
  SpanUnderline,
  Button,
  TextButton,
} from './styles';

import image from '../../../../images/bn_detail.png'
import SupportModal from '../SupportModal';
import SimpleButton from '../../../../components/SimpleButton';

interface GameoverModalProps {
  sendOpenSupport: (event: boolean) => void
}
const GameoverModal: React.FC<GameoverModalProps> = ({sendOpenSupport}) => {
  return (
    <>
      <Container>
        <Title>Fim de jogo!</Title>
        <CustomBanner source={image} />
        <View>
          <Strong>
            O resultado da sua partida foi recebido com sucesso e está em análise.
          </Strong>
          <Span>
            Em alguns instantes você será notificado
            sobre a análise e o valor da sua vitória
            creditado no seu saldo assim como
            seus pontos no ranking.
          </Span>
          <Span>{`Fique de olho na sua `}
            <SpanUnderline>central de notificações.</SpanUnderline>
          </Span>
        </View>
        <Button>Ver resultados</Button>

        <SimpleButton onPress={() => sendOpenSupport(true)}>
          <TextButton>REPORTAR PROBLEMA</TextButton>
        </SimpleButton>
      </Container>
    </>
  )
}

export default GameoverModal;