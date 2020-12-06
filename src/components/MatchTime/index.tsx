import React from 'react';
import { LinearGradient, View, Text, Strong } from './styles';

interface MatchTimeProps {
  time: any,
  description: string
}
const MatchTime: React.FC<MatchTimeProps> = ({
  time, description, ...props
}) => {
  return (
    <LinearGradient {...props}>
      <View>
        <Text>Vocês tem</Text>
        <Strong>{time}</Strong>
        <Text>{description}</Text>
      </View>
    </LinearGradient>
  )
}

export default MatchTime;