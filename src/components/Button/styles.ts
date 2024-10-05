import styled from "styled-components/native";
import { ButtonProps } from "./types";

type ButtonPropsStyles = Pick<ButtonProps, "variant">;

export const Touchable = styled.TouchableOpacity<ButtonPropsStyles>`
  padding: 10px 20px;
  background-color: ${({ theme, variant }) =>
    variant === "blue" ? theme.colors.blue_light : theme.colors.green_light};

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

  color: ${({ theme, variant }) =>
    variant === "blue" ? theme.colors.white : theme.colors.blue_dark};
`;
