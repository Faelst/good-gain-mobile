import React from 'react';
import { ScrollView, Header, Title, Main, Button, Image } from './styles';

import SimpleButton from '../SimpleButton'
import CustomModal from '../CustomModal'
import MatchSupport from '../../pages/MatchSupport'

import { useTheme } from 'styled-components'

interface MatchContainerProps {
  title: string,
  image: any,
}
const MatchContainer: React.FC<MatchContainerProps> = ({
  title, image, children
}) => {
  const [isModalVisible, setModalVisible] = React.useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const theme = useTheme()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header>
        <Title>{title}</Title>
        <Image source={image} />
      </Header>
      <Main>
        {children}
        <SimpleButton onPress={toggleModal}>
          <Button>REPORTAR PROBLEMA</Button>
        </SimpleButton>
      </Main>

      <CustomModal
        background={theme.colors.backgroundLight}
        isVisible={isModalVisible}
        onClose={toggleModal}
      >
        <MatchSupport onSubmit={() => {
          toggleModal(),
          alert("Problema reportado com sucesso.")
        }}/>
      </CustomModal>
    </ScrollView>
  )
}

export default MatchContainer;