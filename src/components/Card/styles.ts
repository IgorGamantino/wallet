import styled from "styled-components/native";
import { CardProps } from "./types";

import Animated from "react-native-reanimated";

type ContainerProps = Pick<CardProps, "color">;

export const Container = styled(Animated.View)<ContainerProps>`
  width: 100%;
  height: 180px;
  gap: 10px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  padding: 10px;

  box-shadow: 2px 2px 5px black;
`;

export const ContentNumber = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
