import React, { memo } from 'react'
import { MediaImageBackground, MediaText } from './styles'

import SimpleButton from '../../../../components/SimpleButton'

interface ModalItemProps {
  image: any,
  title: string,
  index?: number,
  onPress: () => void
  isFocused?: number | any
}
const ModalItem: React.FC<ModalItemProps> = ({
  image, title, index, onPress, isFocused
  }) => {
  return (
    <SimpleButton onPress={onPress}>
      <MediaImageBackground source={image} isFocused={isFocused}>
        <MediaText selected={ isFocused === index ? true : false }
        >{title}
        </MediaText>
      </MediaImageBackground>
    </SimpleButton>
  )
}

export default memo(ModalItem)