import React from 'react'
import { ImageURISource, ViewProps } from 'react-native';
import { Container, ActionTitle, ActionImage } from './styles'
import { rsize } from '../../utils/size'

interface ActionCardProps extends ViewProps {
  title?: string,
  image: ImageURISource,
  width?: number,
  backgroundColor?: "primary" | "secondary"
}
const ActionCard: React.FC<ActionCardProps> = ({
  title, image, width, backgroundColor, children, ...rest
}) => {
  return (
    <Container
      width={width}
      backgroundColor={backgroundColor}
      {...rest}
    >
      <ActionImage source={image}/>
      {children ? children : <ActionTitle>{title}</ActionTitle>}
    </Container>
  )
}

export default ActionCard;
