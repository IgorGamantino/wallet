import { Touchable, ButtonText } from "./styles";

interface ButtonProps {
  text: string;
  variant?: "blue" | "green";
}

export function Button({ text, variant = "blue" }: ButtonProps) {
  return (
    <Touchable variant={variant}>
      <ButtonText variant={variant}>{text}</ButtonText>
    </Touchable>
  );
}
