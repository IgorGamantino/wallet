import { Typography } from "@components/Typography";
import {
  ButtonArrowLeft,
  Container,
  ContainerHeader,
  ContainerText,
} from "./styles";

import ArrowLeft from "@assets/svg/arrowLeft.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ContainerHeader style={{ paddingTop: insets.top }}>
      <ContainerText>
        <ButtonArrowLeft onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </ButtonArrowLeft>
      </ContainerText>

      <Container>
        <Typography
          color="blue_light"
          fontSize={22}
          style={{ textAlign: "center" }}
        >
          cadastro
        </Typography>
      </Container>
    </ContainerHeader>
  );
}
