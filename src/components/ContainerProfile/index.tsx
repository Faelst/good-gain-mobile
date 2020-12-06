import React from 'react';
import BackButton from '../BackButton';

import { Container, Header, HeaderContent, Title, Main } from './styles';

interface IContainerProfile {
  title?: string,
  goBack?: () => void,
}
const ContainerProfile: React.FC<IContainerProfile> = ({title, goBack, children}) => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>{title}</Title>
          <BackButton name="x" onPress={goBack} />
        </HeaderContent>
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default ContainerProfile;