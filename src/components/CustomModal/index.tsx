import React from 'react'
import { View, StyleSheet } from 'react-native'

import Modal from 'react-native-modal'
import { Content, Indicator } from './styles'
import { useTheme } from 'styled-components'

interface CustomModalProps {
  /**
  * Event called to close the modal.
  */
  onClose: () => void
    /**
  * If true the modal is displayed, if false the modal is closed.
  */
 isVisible: boolean
}
const CustomModal: React.FC<CustomModalProps> = ({onClose, isVisible, children}) => {
  const theme = useTheme()

  return (
    <View>
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
      >
        <Content>
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