import React from 'react';
import { ImageURISource, ViewProps } from 'react-native';
import SimpleButton from '../SimpleButton';

import { Container, View, Image, Text } from './styles';

interface TextCardProps extends ViewProps {
  icon?: ImageURISource,
  title?: string,
  onPress?: () => void,
}
const TextCard: React.FC<TextCardProps> = ({
  icon, title, onPress, ...props
}) => {
  return (
    <View {...props}>
      <SimpleButton onPress={onPress}>
        <Container>
          {icon && <Image source={icon} />}
          <Text>{title}</Text>
        </Container>
      </SimpleButton>
    </View>
  )
}

export default TextCard;