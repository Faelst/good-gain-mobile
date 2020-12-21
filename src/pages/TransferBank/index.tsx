import React from 'react';
import { ImageURISource } from 'react-native'
import {
  Title,
  ContainerLogo,
  ImageLogo,
  Strong,
  Card,
  View,
  Button,
  TextButton,
  Footer
} from './styles';

import ContainerModel from '../../components/ContainerProfile'
import { BorderlessButton } from 'react-native-gesture-handler';
import CustomTitle from './components/CustomTitle'
import CustomInput from '../../components/CustomInput';
import CameraRoll from '../../components/CameraRoll';
import { useNavigation } from '@react-navigation/native';
import { PropsWallet } from '../../@types/routes';

const TransferBank: React.FC<PropsWallet> = ({route}) => {
  const [inputValue, setInputValue] = React.useState("")
  const [annex, setAnnex] = React.useState(null) as any

  const { image, dealer, ag, cc, cpf } = route.params.item

  const navigation = useNavigation()

  return (
    <>
      <ContainerModel
        background="green"
        title="Colocar crédito"
        goBack="Wallet"
      >
        <Title>Transferência bancária</Title>
        <ContainerLogo>
          <ImageLogo source={image} />
        </ContainerLogo>

        <Card>
          <Strong>Dados para transferência</Strong>
          <CustomTitle label="Dealer autorizado" value={dealer} />
          <View>
            <CustomTitle label="Agência" value={ag} />
            <CustomTitle label="Conta corrente" value={cc} />
          </View>
          <CustomTitle label="CPF" value={cpf} />
        </Card>

        <CustomInput
          keyboardType="numeric"
          label="Informe o valor que irá transferir"
          placeholder="Informe o valor em R$"
          onChangeText={(event) => setInputValue(event)}
        />
        <CameraRoll
          onChangeValue={(event) => setAnnex(event.uri)}
          label="Após a transferência, envie o comprovante"
          defaultValue="Foto do comprovante de transferência"
        />
      </ContainerModel>
      <Footer>
        <Button
          onPress={() => navigation.navigate("TransferReceived")}
          disabled={inputValue && annex ? false : true}
        >Enviar
        </Button>
        <BorderlessButton onPress={navigation.goBack}>
          <TextButton>Voltar</TextButton>
        </BorderlessButton>
      </Footer>
    </>
  )
}

export default TransferBank;