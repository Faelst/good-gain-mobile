import React from 'react';

import { ScrollView, Header, Title, Main, Button, Image } from './styles';
import SimpleButton from '../SimpleButton'

interface MatchContainerProps {
  title: string,
  image: any,
}
const MatchContainer: React.FC<MatchContainerProps> = ({
  title, image, children
}) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header>
        <Title>{title}</Title>
        <Image source={image} />
      </Header>
      <Main>
        {children}
        <SimpleButton onPress={() => alert("Problema reportado")}>
          <Button>REPORTAR PROBLEMA</Button>
        </SimpleButton>
      </Main>
    </ScrollView>
  )
}

export default MatchContainer;