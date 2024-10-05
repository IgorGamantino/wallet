import { Button } from "@components/Button";
import { Background } from "@components/Background";
import { Container } from "./styles";
import { Typography } from "@components/Typography";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Typography>Wallet Test</Typography>
        <Button text="meus cartões" />
        <Button
          variant="green"
          text="cadastrar cartão"
          onPress={() => navigation.navigate("CardRegistration")}
        />
      </Container>
    </Background>
  );
}
