import { ReactNode } from "react";
import { ImageBackground } from "react-native";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require("../../assets/img/background.png")}
    >
      {children}
    </ImageBackground>
  );
}
