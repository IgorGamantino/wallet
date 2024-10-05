import { Typography } from "@components/Typography";
import { Container, ContentNumber } from "./styles";

import BulletIcon from "@assets/svg/bollets.svg";
import { ViewProps } from "react-native";
import { ColorOptions } from "src/@types/colors";

interface CardProps extends ViewProps {
  color?: ColorOptions;
}

export function Card({ color = "green_light", ...rest }: CardProps) {
  return (
    <Container {...rest} color={color}>
      <Typography fontSize={18}>Black Card</Typography>
      <Typography fontSize={16}>João Carlos Pereira</Typography>
      <ContentNumber>
        <BulletIcon />
        <BulletIcon />
        <BulletIcon />
        <Typography fontSize={14}>2345</Typography>
      </ContentNumber>
      <Typography fontSize={14}>Validade 04/32</Typography>
    </Container>
  );
}
