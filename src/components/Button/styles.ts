import styled from "styled-components/native";
import { ButtonProps } from "./types";

type ButtonPropsStyles = Pick<ButtonProps, "variant" | "disabled">;

export const Touchable = styled.TouchableOpacity<ButtonPropsStyles>`
  padding: 10px 20px;
  background-color: ${({ theme, variant, disabled }) =>
    disabled
      ? theme.colors.white
      : variant === "blue" && !disabled
        ? theme.colors.blue_light
        : theme.colors.green_light};

  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 55px;
`;

export const ButtonText = styled.Text<ButtonPropsStyles>`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  font-family: "PTSansCaption_400Regular";

  color: ${({ theme, variant, disabled }) =>
    disabled
      ? theme.colors.gray_disabled
      : variant === "blue" && !disabled
        ? theme.colors.white
        : theme.colors.blue_dark};
`;
