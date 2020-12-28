import React from 'react';
import { TextProps } from 'react-native';

import { Text } from './styles';

interface ITextBold extends TextProps {
  variant?: "body1"
}
const TextBold: React.FC<ITextBold> = ({ children, variant, ...props }) => {
  return <Text variant={variant} {...props}>{children}</Text>;
};

export default TextBold;
