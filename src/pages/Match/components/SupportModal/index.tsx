import React from 'react';
import { ScrollViewProps } from 'react-native';
import {
  Container,
  Strong,
  DescriptionContainer,
  Description,
  DescriptionStrong,
  Form,
  Picker,
  InputMultiline,
  ButtonSubmit,
} from './styles';

import CameraRoll from '../../../../components/CameraRoll'

interface SupportModalProps extends ScrollViewProps {
  onSubmit?: () => void
}
const SupportModal: React.FC<SupportModalProps> = ({onSubmit, ...props}) => {
  const [image, setImage] = React.useState(null);
  const [value, setValue] = React.useState('');

  const splitURI = (uri: any, type: any) => {
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
    <Container {...props} contentContainerStyle={{ flexGrow: 1 }}>
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
        <CameraRoll
          onChangeValue={(event) => splitURI(event.uri, event.type)}
          defaultValue="Anexe imagem"
          label="Anexar imagem"
          value={value}
          image={image}
        />

        <ButtonSubmit onPress={onSubmit}>Enviar</ButtonSubmit>
      </Form>
    </Container>
  )
}

export default SupportModal;