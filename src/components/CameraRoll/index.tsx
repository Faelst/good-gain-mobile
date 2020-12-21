import React, { useEffect } from 'react';
import { ImageURISource, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SimpleButton from '../SimpleButton';
import { Container, View, Icon, Image, Label, Text } from './styles'
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

interface CameraRollProps {
  label?: string,
  error?: boolean,
  defaultValue?: string,
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
const CameraRoll:React.FC<CameraRollProps> = ({
  label, error, defaultValue, onChangeValue, ...props
}) => {
  const [image, setImage] = React.useState() as any
  const [value, setValue] = React.useState("")

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Precisamos de permissões câmera para fazer isso funcionar!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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
      {label && <Label error={error}>{error && "*"}{label}</Label>}
      <SimpleButton onPress={pickImage}>
        <View error={error}>
          <Icon error={error} />
          {image && <Image source={{uri: image}}/>}
          <Text error={error}>{value ? value : defaultValue}</Text>
        </View>
      </SimpleButton>
    </Container>
  );
}

export default CameraRoll
