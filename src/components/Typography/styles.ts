import styled from "styled-components/native";
import { TypographyProps } from "./types";

type TextProp = Pick<TypographyProps, "color" | "fontSize">;

export const Text = styled.Text<TextProp>`
  font-size: ${({ fontSize }) => fontSize ?? 28}px;
  font-weight: 400;
  line-height: 32px;
  font-family: "PTSansCaption_400Regular";
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
`;
