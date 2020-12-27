import React from 'react';
import { ImageURISource, ViewProps } from 'react-native';
import SimpleButton from '../SimpleButton';

import { Container, View, Image, Text } from './styles';

interface TextCardProps extends ViewProps {
  icon?: ImageURISource,
  title?: string,
  color?: string,
  onPress?: () => void,
}
const TextCard: React.FC<TextCardProps> = ({
  icon, title, color, onPress, children, ...props
}) => {
  return (
    <View {...props}>
      <SimpleButton onPress={onPress}>
        <Container 
          style={{justifyContent: children ? "space-between" : "flex-start"}}
        >
          {icon && <Image source={icon} />}
          <Text color={color}>{title}</Text>
          {children}
        </Container>
      </SimpleButton>
    </View>
  )
}

export default TextCard;