import { Touchable, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: "blue" | "green";
}

export function Button({ text, variant = "blue", ...rest }: ButtonProps) {
  return (
    <Touchable variant={variant} {...rest}>
      <ButtonText variant={variant}>{text}</ButtonText>
    </Touchable>
  );
}
