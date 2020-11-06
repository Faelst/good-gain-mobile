import React from 'react';

import { Text } from './styles';

const TextBold: React.FC = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TextBold;
