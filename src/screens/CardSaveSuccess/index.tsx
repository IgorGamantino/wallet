import { Background } from "@components/Background";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Content, ContentText } from "./styles";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { View } from "react-native";

export function CardSaveSuccess() {
  return (
    <Background>
      <Header />

      <Content>
        <ContentText>
          <Typography>Wallet Test</Typography>
          <Typography fontSize={20}>cartão cadastrado com sucesso</Typography>
        </ContentText>
        <Card />

        <Button text="avancar" />
      </Content>
    </Background>
  );
}
