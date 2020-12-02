import React from 'react'
import { View, StyleSheet } from 'react-native'

import Modal from 'react-native-modal'
import { Content, Indicator } from './styles'
import { useTheme } from 'styled-components'
import { StatusBar } from 'expo-status-bar';

interface CustomModalProps {
  /**
  * Event called to close the modal.
  */
  onClose: () => void
  /**
  * If true the modal is displayed, if false the modal is closed.
  */
 isVisible: boolean
   /**
  * Optional modal background.
  */
 background?: string
}
const CustomModal: React.FC<CustomModalProps> = ({
  onClose, isVisible, background, children, ...props
}) => {
  const theme = useTheme()

  return (
    <View>
      <StatusBar hidden={isVisible}/>
      <Modal
        style={styles.modal}
        isVisible={isVisible}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        swipeDirection="down"
        backdropTransitionOutTiming={0}
        backdropColor={theme.colors.backdrop}
        backdropOpacity={0.40}
        propagateSwipe
      >
        <Content background={background} {...props}>
          <Indicator />
          {children}
        </Content>
      </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  }
})