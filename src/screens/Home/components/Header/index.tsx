import { Typography } from "@components/Typography";
import { BottomHeader, Container } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "styled-components/native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function HeaderMyCard() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();

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
        <Pressable onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={24}
            color={theme.colors.blue_light}
          />
        </Pressable>

        <Typography color="blue_dark">Wallet Test</Typography>

        <Pressable onPress={() => navigation.navigate("CardRegistration")}>
          <Entypo name="plus" size={24} color={theme.colors.blue_light} />
        </Pressable>
      </Container>
      <BottomHeader>
        <Typography color="blue_light" fontSize={20}>
          Meus cartões
        </Typography>
      </BottomHeader>
    </>
  );
}
