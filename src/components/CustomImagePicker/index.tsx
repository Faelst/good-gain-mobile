import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SimpleButton from '../SimpleButton';
import {Container, View, Icon, Image, Label, Text } from './styles'

interface ImagePickerProps {
  onPress: () => void
  value?: string
  image?: any
}
const CustomImagePicker:React.FC<ImagePickerProps> = ({
  onPress, value, image, ...props
}) => {
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

  return (
    <SimpleButton onPress={onPress}>
      <Container {...props}>
        <Label>Anexar imagem</Label>
        <View>
          <Icon />
          {image && <Image source={{uri: image}}/>}
          <Text>{value ? value : "Anexe imagem"}</Text>
        </View>
      </Container>
    </SimpleButton>
  );
}

export default CustomImagePicker
