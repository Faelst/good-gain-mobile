import React from 'react';
import {
  Container,
  Strong,
  DescriptionContainer,
  Description,
  DescriptionStrong,
  Form,
  Picker,
  InputMultiline,
  IMGPicker,
  ButtonSubmit,
} from './styles';

import * as ImagePicker from 'expo-image-picker'
import SimpleButton from '../../components/SimpleButton';

interface MatchSupportProps {
  onSubmit?: () => void
}
const MatchSupport: React.FC<MatchSupportProps> = ({onSubmit}) => {
  const [image, setImage] = React.useState(null);
  const [value, setValue] = React.useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      splitUri(result.uri, result.type)
    }
  };

  const splitUri = (uri: string, type: any) => {
    let arr = uri.split('.');
    let last = arr[arr.length - 1]
    setValue(`${type}.${last}`)
    setImage(uri)
  }

  const list = [
    {label: "Problema ao receber prêmio.", value: "1"},
    {label: "Falha no pagamento com cartão.", value: "2"},
  ]

  return (
    <Container contentContainerStyle={{ flexGrow: 1 }}>
      <Strong>Reportar um problema</Strong>
      <DescriptionContainer>
        <Description>Antes de reportar um problema para nosso suporte, verifique se essa resposta não se
encontra em nosso FAQ.
        </Description>
        <DescriptionStrong>Ir para FAQ.</DescriptionStrong>
      </DescriptionContainer>

      <Form>
        <Picker
          label="Assunto"
          onValueChange={(value) => {console.log(value)}}
          items={list}
        />
        <InputMultiline label="Mensagem" placeholder="Escreva aqui" />
        <IMGPicker onPress={pickImage} value={value} image={image} />

        <SimpleButton onPress={onSubmit}>
          <ButtonSubmit>Enviar</ButtonSubmit>
        </SimpleButton>
      </Form>
    </Container>
  )
}

export default MatchSupport;