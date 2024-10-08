import { Card } from "@components/Card";
import { ButtonPressable, Container, ScrollViewCard } from "./styles";
import { HeaderMyCard } from "@screens/Home/components/Header";
import { TouchableWithoutFeedback } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { api } from "@services/api";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

interface CardProps {
  id: string;
  number: string;
  cvv: string;
  name: string;
  expiryDate: string;
}

export function MyCard() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);
  const [cardList, setCardList] = useState<CardProps[]>([]);
  const translateY = useSharedValue<number>(0);
  const translateYSecond = useSharedValue<number>(0);

  const handlePress = (index: number) => {
    if (cardSelected === index) {
      return;
    }
    if (translateY.value === 0 && translateYSecond.value === 0) {
      setCardSelected(index);

      translateY.value = 0;

      translateYSecond.value = 400;
    } else {
      setCardSelected(null);
      translateY.value = 0;
      translateYSecond.value = 0;
    }
  };

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(translateYSecond.value, { duration: 100 }) },
      ],
      marginTop: withTiming(-140, {
        duration: 1000,
      }),
    };
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(translateY.value, { duration: 100 }) },
    ],
    marginTop: withTiming(-140, {
      duration: 1000,
    }),
  }));

  useEffect(() => {
    async function getCardList() {
      const response = await api.get("/cards");

      setCardList(response.data);
    }

    getCardList();
  }, []);

  return (
    <Container>
      <HeaderMyCard />

      <ScrollViewCard>
        {cardList.map((item, index) => (
          <TouchableWithoutFeedback
            key={item?.id}
            onPress={() => handlePress(index)}
          >
            <Card
              data={item}
              style={index === cardSelected ? animatedStyle : animatedStyle2}
              color={index === 0 ? "gray" : "green_light"}
            />
          </TouchableWithoutFeedback>
        ))}

        {cardSelected === null && (
          <ButtonPressable>
            <Typography fontSize={14}>usar este cartão</Typography>
          </ButtonPressable>
        )}

        {cardSelected !== null && (
          <Button
            style={{ marginTop: 24, marginBottom: 24 }}
            text="pagar com este cartão"
          />
        )}
      </ScrollViewCard>
    </Container>
  );
}
