import React from "react";
import { ImageURISource, ViewProps } from "react-native";

import {
  Container,
  Content,
  Title,
  ImageContainerSM,
  ImageContainerMD,
  ImageContainerXL,
  Image,
} from "./styles";

interface ActionCardProps extends ViewProps {
  title?: string;
  image: ImageURISource;
  size?: "sm" | "md" | "xl";
  backgroundColor?: "primary" | "secondary";
  onPress?(): void;
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
    <Container size={size} backgroundColor={backgroundColor} {...rest}>
      <Content
        size={size}
        onPress={() => {
          requestAnimationFrame(() => rest.onPress?.());
        }}
      >
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
