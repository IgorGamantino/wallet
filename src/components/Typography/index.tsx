import { ReactNode } from "react";
import { Text } from "./styles";

import { TextProps } from "react-native";

interface TypographyProps extends TextProps {
  children: ReactNode;
}

export function Typography({ children, ...rest }: TypographyProps) {
  return <Text {...rest}>{children}</Text>;
}
