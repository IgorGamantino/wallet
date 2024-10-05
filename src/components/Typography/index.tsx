import { Text } from "./styles";
import { TypographyProps } from "./types";

export function Typography({
  children,
  color = "white",
  fontSize,
  ...rest
}: TypographyProps) {
  return (
    <Text {...rest} color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
}
