import React from 'react'
import { Container, Title, IconGoBack, Spacing, RightIcon } from './styles'

import { useNavigation } from "@react-navigation/native";

interface TopTabProps {
  title: string
  hideLeftIcon?: boolean
  rightIcon?: string
  onPressRight?: () => void
}

const TopTab: React.FC<TopTabProps> = ({
  title, hideLeftIcon, rightIcon, onPressRight
}) => {
  const navigation = useNavigation()

  return (
    <Container>
      {
        hideLeftIcon ?
        <Spacing /> :
        <IconGoBack onPress={navigation.goBack}/>
      }
      <Title>{title}</Title>
      {
        !rightIcon ?
        <Spacing /> :
        <RightIcon
          name={rightIcon}
          onPress={rightIcon ? onPressRight : () => {}}
      />}
    </Container>
  )
}

export default TopTab