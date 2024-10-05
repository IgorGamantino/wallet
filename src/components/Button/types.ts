import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: "blue" | "green";
}
