import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SimpleButton from '../SimpleButton';
import { Container, View, Icon, Image, Label, Text } from './styles'
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

interface CameraProps {
  label?: string,
  defaultValue?: string,
  error?: boolean,
  /**
  * Retorna um objeto com os seguintes valores:
  * cancelled: boolean,
  * height: number,
  * type: string,
  * uri: string,
  * width: number,
  **/
 onChangeValue?: (event: ImageInfo) => void
}
const Camera:React.FC<CameraProps> = ({
  label, defaultValue, onChangeValue, error, ...props
}) => {
  const [image, setImage] = React.useState() as any
  const [value, setValue] = React.useState("")

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Precisamos de permissões da câmera para fazer isso funcionar!');
        }
      }
    })();
  }, []);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    /* console.log(result); */
    if (!result.cancelled) {
      onChangeValue !== undefined && onChangeValue(result)
      setImage(result.uri)

      let arr = result.uri.split('.');
      let last = arr[arr.length - 1]
      setValue(`${result.type}.${last}`)
    }
  };

  return (
    <Container {...props}>
      {label && <Label>{label}</Label>}
      <SimpleButton onPress={takePicture}>
        <View error={error}>
          <Icon />
          {image && <Image source={{uri: image}}/>}
          <Text>{value ? value : defaultValue}</Text>
        </View>
      </SimpleButton>
      {error && <Label error={error}>*Campo obrigatório</Label>}
    </Container>
  );
}

export default Camera
