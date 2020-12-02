import React from 'react';
import { LinearGradient, Text, Strong } from './styles';

interface MatchTimeProps {
  time: any,
  description: string
}
const MatchTime: React.FC<MatchTimeProps> = ({
  time, description, ...props
}) => {
  return (
    <LinearGradient {...props}>
      <Text>Vocês tem</Text>
      <Strong>{time}</Strong>
      <Text>{description}</Text>
    </LinearGradient>
  )
}

export default MatchTime;