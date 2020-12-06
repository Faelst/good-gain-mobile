import React from 'react';
import { ImageURISource, TouchableWithoutFeedbackProps } from 'react-native';
import SimpleButton from '../SimpleButton';

import { Container, Image, Text } from './styles';

interface TextCardProps extends TouchableWithoutFeedbackProps {
  icon?: ImageURISource,
  title: string,
}
const TextCard: React.FC<TextCardProps> = ({icon, title, ...props}) => {
  return (
    <SimpleButton {...props}>
      <Container>
        {icon && <Image source={icon} />}
        <Text>{title}</Text>
      </Container>
    </SimpleButton>
  )
}

export default TextCard;