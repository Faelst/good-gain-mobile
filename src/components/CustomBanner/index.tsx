import React from 'react';
import { ImageBackgroundProps } from 'react-native';

import { ImageBackground, LinearGradient } from './styles';

interface CustomBannerProps extends ImageBackgroundProps {}
const CustomBanner: React.FC<CustomBannerProps> = ({...props}) => {
  return (
    <>
      <ImageBackground {...props}>
        <LinearGradient />
      </ImageBackground>
    </>
  )
}

export default CustomBanner;