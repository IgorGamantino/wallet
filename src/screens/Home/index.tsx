import { Button } from "@components/Button";
import { Background } from "@components/Background";
import { Container } from "./styles";
import { Typography } from "@components/Typography";

export function Home() {
  return (
    <Background>
      <Container>
        <Typography>Wallet Test</Typography>
        <Button text="meus cartões" />
        <Button variant="green" text="cadastrar cartão" />
      </Container>
    </Background>
  );
}
