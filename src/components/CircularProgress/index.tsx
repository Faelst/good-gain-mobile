import * as React from 'react';
import { ViewProps } from 'react-native';
import { Container, Text } from './styles';
import { rsize } from '../../utils/size'

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from 'styled-components'

interface CircularProgressProps extends ViewProps {
  title?: number,
  fill: number,
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  title, fill, ...props
}) => {
  const theme = useTheme()

  return (
    <Container {...props}>
      <AnimatedCircularProgress
        size={rsize(42)}
        width={rsize(4)}
        rotation={0}
        lineCap={"round"}
        tintColor={theme.colors.secondary}
        backgroundColor={theme.colors.backgroundLighter}
        fill={fill}
      >
        {() => (
          <Text>
            {title}
          </Text>
        )}
      </AnimatedCircularProgress>
    </Container>
  )
}

export default CircularProgress;