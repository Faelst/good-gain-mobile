import React from 'react';
import { StyleProp, TextProps } from 'react-native'
import { MaskedView, View, Text, LinearGradient } from './styles'
import { rsize } from '../../utils/size'

interface TextGradientProps {
  fontSize: number,
  textAlign?: string,
  gradient?: boolean,
  width?: number,
  fontFamily?: string,
  textDecoration?: string,
}
const TextGradient: React.FC<TextGradientProps> = ({
  fontSize,
  textAlign,
  gradient,
  width,
  fontFamily,
  textDecoration,
  children,
  ...props
}) => {
  const size = fontSize ? fontSize : rsize(14);
  const isGradient = gradient === undefined ? true : gradient;

  return (
    <MaskedView
      {...props} 
      maskElement={
        <View>
          {/* Transparent background because mask is based off alpha channel. */}
          <Text
            fontSize={size}
            textAlign={textAlign}
            fontFamily={fontFamily}
            textDecoration={textDecoration}
          >
            {children}
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <LinearGradient width={width} gradient={isGradient} fontSize={size}/>
    </MaskedView>
  );
}

export default TextGradient;