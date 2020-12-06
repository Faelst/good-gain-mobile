import React from 'react';
import CustomModal from '../../../../components/CustomModal';
import GameoverModal from '../GameoverModal';
import SupportModal from '../SupportModal';
import VictoryModal from '../VictoryModal';
import {
  Card,
  Description,
  Span,
  Strong,
  Actions,
  ButtonOutlined,
  Button,
  Camera,
} from './styles';

const ContentStep3: React.FC = () => {
  const [image, setImage] = React.useState(null);
  const [value, setValue] = React.useState('');
  const [isSelected, setSelected] = React.useState();
  const [isVisible, setVisible] = React.useState(Boolean);
  const [isModalVisible, setModalVisible] = React.useState(false)
  const [borderErr, setBorderErr] = React.useState(0)
  const [step, setStep] = React.useState(false)
  const [openSupport, setOpen] = React.useState(false)

  const splitURI = (uri: any, type: any) => {
    let arr = uri.split('.');
    let last = arr[arr.length - 1]
    setValue(`${type}.${last}`)
    setImage(uri)
  }

  const handleActions = (item: any, index: number | any) => {
    if (item === "Vitória") {setVisible(true)}
    if (item === "Derrota") {setVisible(false)}
    setSelected(index)
    setBorderErr(0)
  }

  const toggleModal = () => {
    switch (isSelected) {
      case undefined: setBorderErr(1);
        break;
      case 0: image
        ? setModalVisible(!isModalVisible)
        : alert("O vencedor é obrigatório a enviar uma foto do resultado final da partida, onde conste o placar e os IDs dos jogadores.");
        break;
      case 1: 
        alert("Selecionou derrota.");
        break;
    }
    setStep(false)
    setOpen(false)
  }

  return (
    <>
      <Card style={{ borderWidth: borderErr}}>
        <Description>
        Informe o seu resultado abaixo e lembre-se
o vencedor é obrigatório a enviar uma
foto do resultado final da partida, onde
conste o placar e os IDs dos jogadores.
        </Description>
        <Span>Ver exemplo</Span>
        <Strong>Selecione a opção, para informar</Strong>
        <Strong color="secondary">o seu resultado.</Strong>

        <Actions>
          {["Vitória", "Derrota"].map((item, index) => (
            <ButtonOutlined
              key={index}
              selected={index === isSelected ? true : false}
              onPress={() => handleActions(item, index)}
            >{item}
            </ButtonOutlined>
          ))}
        </Actions>
      </Card>
      
      {isVisible &&
        <Camera
          onChangeValue={(event) => splitURI(event.uri, event.type)}
          defaultValue="Tirar foto"
          value={value}
          image={image}
        />
      }

      <Button
        onPress={toggleModal}
        marginTop={isVisible}
      >Enviar resultado
      </Button>

      <CustomModal
        isVisible={isModalVisible}
        onClose={toggleModal}
      >
        {!openSupport
          ? !step
            ? <VictoryModal sendConfirm={(event) => setStep(event)} />
            : <GameoverModal sendOpenSupport={(event) => setOpen(event)} />
          : <SupportModal />
        }
      </CustomModal>
    </>
  )
}

export default ContentStep3;