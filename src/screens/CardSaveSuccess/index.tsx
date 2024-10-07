/* eslint-disable import/no-unresolved */
import { Background } from "@components/Background";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Content, ContentText } from "./styles";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { useAppSelector } from "@store/index";
import { useNavigation } from "@react-navigation/native";

export function CardSaveSuccess() {
  const { card } = useAppSelector((state) => state.card);
  const navigation = useNavigation();
  return (
    <Background>
      <Header />

      <Content>
        <ContentText>
          <Typography>Wallet Test</Typography>
          <Typography fontSize={20}>cartão cadastrado com sucesso</Typography>
        </ContentText>
        <Card data={card} />

        <Button
          text="avancar"
          onPress={() => navigation.navigate("AnimationCard")}
        />
      </Content>
    </Background>
  );
}
