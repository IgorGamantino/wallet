import { Typography } from "@components/Typography";
import { Container, ContentNumber } from "./styles";

import BulletIcon from "@assets/svg/bollets.svg";
import { ViewProps } from "react-native";
import { ColorOptions } from "src/@types/colors";
type CardPropsData = {
  id: string;
  number: string;
  cvv: string;
  name: string;
  expiryDate: string;
};
interface CardProps extends ViewProps {
  color?: ColorOptions;
  data?: CardPropsData;
}

export function Card({ color = "green_light", data, ...rest }: CardProps) {
  return (
    <Container {...rest} color={color}>
      <Typography fontSize={18}>Black Card</Typography>
      <Typography fontSize={16}>{data?.name}</Typography>
      <ContentNumber>
        <BulletIcon />
        <BulletIcon />
        <BulletIcon />
        <Typography fontSize={14}>{data?.number.substring(12, 16)}</Typography>
      </ContentNumber>
      <Typography fontSize={14}>Validade {data?.expiryDate}</Typography>
    </Container>
  );
}
