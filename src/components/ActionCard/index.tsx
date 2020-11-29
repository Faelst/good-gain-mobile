import React from "react";
import { ImageURISource, ViewProps } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import {
  Container,
  Content,
  Title,
  ImageContainerSM,
  ImageContainerMD,
  ImageContainerXL,
  Image,
} from "./styles";

interface ActionCardProps extends RectButtonProperties {
  title?: string;
  image: ImageURISource;
  size?: "sm" | "md" | "xl";
  backgroundColor?: "primary" | "secondary";
}
const ActionCard: React.FC<ActionCardProps> = ({
  title,
  image,
  size,
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Content size={size} backgroundColor={backgroundColor}>
        {(size === "sm" && (
          <ImageContainerSM background={backgroundColor}>
            <Image source={image} />
          </ImageContainerSM>
        )) ||
          (size === "md" && (
            <ImageContainerMD background={backgroundColor}>
              <Image source={image} />
            </ImageContainerMD>
          )) ||
          (size === "xl" && (
            <ImageContainerXL background={backgroundColor}>
              <Image source={image} />
            </ImageContainerXL>
          )) ||
          (size === undefined && (
            <ImageContainerXL background={backgroundColor}>
              <Image source={image} />
            </ImageContainerXL>
          ))}
        {children ? children : <Title>{title}</Title>}
      </Content>
    </Container>
  );
};

export default ActionCard;
