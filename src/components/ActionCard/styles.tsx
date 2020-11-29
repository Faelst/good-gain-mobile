import styled, { css } from "styled-components/native";
import { CardMedia } from "../../components/CustomCard";
import TextBold from "../../components/TextBold";
import { rsize } from "../../utils/size";

interface ContainerProps {
  size?: "sm" | "md" | "xl";
  backgroundColor?: "primary" | "secondary";
}
export const Container = styled(CardMedia)<ContainerProps>`
  margin-top: ${rsize(15, "w")}px;
  border-radius: ${rsize(20, "w")}px;
  ${(props) =>
    props.backgroundColor === "secondary"
      ? css`
          background-color: ${(props) =>
            props.theme.colors.backgroundSecondary};
        `
      : css`
          background-color: ${(props) => props.theme.colors.backgroundPrimary};
        `};

  width: ${(props) =>
    (props.size === "sm" && rsize(144)) ||
    (props.size === "md" && rsize(156)) ||
    (props.size === "xl" && rsize(287)) ||
    (props.size === undefined && rsize(287))}px;
`;

export const Content = styled.TouchableOpacity<any>`
  height: ${rsize(71)}px;
  width: ${(props) =>
    (props.size === "sm" && rsize(144)) ||
    (props.size === "md" && rsize(156)) ||
    (props.size === "xl" && rsize(287)) ||
    (props.size === undefined && rsize(287))}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled(TextBold)`
  flex: 1;

  font-size: ${(props) => props.theme.fontSizes.sm}px;
  line-height: ${(props) => props.theme.fontSizes.sm}px;
  color: ${(props) => props.theme.colors.textLight};
`;
interface ImageContainerProps {
  background?: "primary" | "secondary";
}
export const ImageContainerSM = styled.View<ImageContainerProps>`
  ${(props) =>
    props.background === "secondary"
      ? css`
          width: ${rsize(44)}px;
        `
      : css`
          width: ${rsize(59)}px;
        `};
  align-items: center;
  justify-content: center;
`;
export const ImageContainerMD = styled(ImageContainerSM)`
  ${(props) =>
    props.background === "secondary"
      ? css`
          width: ${rsize(54)}px;
        `
      : css`
          width: ${rsize(67)}px;
        `};
`;
export const ImageContainerXL = styled(ImageContainerSM)`
  width: ${rsize(65)}px;
`;
export const Image = styled.Image.attrs({
  resizeMode: "contain",
  fadeDuration: 0,
})`
  height: ${rsize(32)}px;
  width: ${rsize(29.25)}px;
`;
