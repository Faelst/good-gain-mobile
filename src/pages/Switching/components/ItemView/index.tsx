import React from 'react';
import {
  Container,
  Content,
  FluxoIconLeft,
  FluxoIconRight,
  Border,
  Card,
  Image,
  Text,
  Button,
  ButtonText,
  ButtonDisabled,
  View,
  ViewEnd,
} from './styles';

import { rsize } from '../../../../utils/size';
import { ImageURISource } from 'react-native';
import iconFluxo from '../../../../images/icons/arrow5.1.png';

interface IItemView {
  /**
   * Recebe dois nomes, o primeiro sendo o vencedor e o segundo sendo o perdedor.
  **/
  name:  [string, string]
  /**
   * Recebe duas imagens, a primeira sendo o vencedor e a segunda sendo o perdedor.
  **/
  source: [ImageURISource, ImageURISource]
  /**
   * Estado da partida.
  **/
  state?: "iniciar" | "aguardando",
  /**
   * Evento chamado para iniciar uma partida.
  **/
  onPress?: () => void,
  fluxoLeftHide?: boolean,
  fluxoRightHide?: boolean,
}
const ItemView: React.FC<IItemView> = ({
  name, source, state, onPress, fluxoLeftHide, fluxoRightHide, ...props
}) => {
  return (
    <Container {...props}>
      <FluxoIconLeft
        source={iconFluxo}
        tintColor={fluxoLeftHide && "transparent"}
      />
      <Content>
        <Border isVisible={state !== undefined}>
          <Card size={state !== undefined}>
            <Image source={source[0]} />
            <Text>{name[0]}</Text>
            <ViewEnd>
              {
                state ? state === "iniciar"
                  ? <Button component={
                      <ButtonText>Iniciar partida</ButtonText>
                    }/>
                  : <ButtonDisabled>
                      <ButtonText>Aguardando</ButtonText>
                    </ButtonDisabled>
                : <View winner>
                    <ButtonText>Vitória</ButtonText>
                  </View>
              }
            </ViewEnd>
          </Card>
        </Border>

        <Card style={{marginTop: rsize(7)}}>
          <Image source={source[1]} />
          <Text>{name[1]}</Text>
          <ViewEnd>
            {
              !state && <View winner={false}>
                  <ButtonText>Derrota</ButtonText>
                </View>
            }
          </ViewEnd>
        </Card>
      </Content>
      <FluxoIconRight
        source={iconFluxo}
        tintColor={fluxoRightHide && "transparent"}
      />
    </Container>
  )
}

export default ItemView;