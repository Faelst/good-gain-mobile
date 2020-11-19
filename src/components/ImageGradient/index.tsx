import React from 'react'
import { ViewProps, ImageSourcePropType } from 'react-native'
import { LinearGradient, ImageBackground } from './styles'

interface ImageGradientProps extends ViewProps {
  /**
  * When no default value is provided, it is 0.2
  */
  opacity?: number,
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
   * The native side will then choose the best uri to display based on the measured size of the image container.
   * A cache property can be added to control how networked request interacts with the local cache.
   *
   * The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
   */
  source: ImageSourcePropType
}
const ImageGradient: React.FC<ImageGradientProps> = ({
  opacity, source, children, ...rest
}) => {
  return (
    <LinearGradient {...rest}>
      <ImageBackground opacity={opacity} source={source} />
      {children}
    </LinearGradient>
  )
}

export default ImageGradient