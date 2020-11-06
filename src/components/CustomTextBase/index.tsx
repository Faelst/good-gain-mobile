import React from 'react';

import { Text } from './styles';

const CustomTextBase: React.FC = ({ children, ...props }) => {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
};

export default CustomTextBase;
