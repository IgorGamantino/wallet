import { Typography } from "@components/Typography";
import { BottomHeader, Container } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
export function HeaderMyCard() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container
        style={{
          paddingTop: insets.top,
          shadowColor: "#142995",
          shadowOffset: {
            height: 1,
            width: 1,
          },
          shadowOpacity: 0.3,
          elevation: 1,
        }}
      >
        <Feather name="arrow-left" size={24} color="black" />

        <Typography color="blue_dark">Wallet Test</Typography>

        <Entypo name="plus" size={24} color="black" />
      </Container>
      <BottomHeader>
        <Typography color="blue_light" fontSize={20}>
          Meus cartões
        </Typography>
      </BottomHeader>
    </>
  );
}
