import { Touchable, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ButtonProps } from "./types";

export function Button({
  text,
  variant = "blue",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Touchable disabled={disabled} variant={variant} {...rest}>
      <ButtonText disabled={disabled} variant={variant}>
        {text}
      </ButtonText>
    </Touchable>
  );
}
