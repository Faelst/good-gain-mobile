import React from 'react';
import { ViewProps } from 'react-native';

import {
  Card,
  Title,
  View,
  Strong,
  Button,
  Span,
} from './styles';
interface MatchActionProps extends ViewProps {
  time: any,
  player1: string,
  player2: string,
  onPress?: () => void,
}
const MatchAction: React.FC<MatchActionProps> = ({
  time, player1, player2, onPress, ...rest
}) => {
  return (
    <Card {...rest}>
      <Title>
        Após enviar ou aceitar o convite de conexão, confirma abaixo clicando em “OK’.
      </Title>
      <View>
        <Strong>{player1}</Strong>
        <Button onPress={onPress}>OK</Button>
      </View>
      <View>
        <Strong>{player2}</Strong>
        <Span>Aguardando{`\n${time}`}</Span>
      </View>
    </Card>
  )
}

export default MatchAction;