import { ReactNode } from "react";
import { TextProps } from "react-native";
import { ColorOptions } from "src/@types/colors";

export interface TypographyProps extends TextProps {
  children: ReactNode;
  color?: ColorOptions;
  fontSize?: number;
}
