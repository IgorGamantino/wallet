import { Card } from "@components/Card";
import {
  Container,
  Content,
  ScrollViewCard,
  TouchableCardList,
} from "./styles";
import { HeaderMyCard } from "@screens/Home/components/Header";
import { TouchableWithoutFeedback } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useState } from "react";

const cards = [1, 2];
export function MyCard() {
  const translateY = useSharedValue<number>(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const handlePress = (index) => {
    setPositionIndex(index);

    translateY.value += 40;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value * 4) }],
  }));

  return (
    <>
      <Container>
        <HeaderMyCard />

        <Content>
          <TouchableWithoutFeedback onPress={handlePress}>
            <Card style={0 !== positionIndex ? [animatedStyles] : null} />
          </TouchableWithoutFeedback>
          <TouchableCardList>
            <ScrollViewCard>
              {cards.map((item, index) => (
                <TouchableWithoutFeedback
                  key={item}
                  onPress={() => handlePress(index)}
                >
                  <Card
                    style={index !== positionIndex ? [animatedStyles] : null}
                    key={item}
                    color="gray"
                  />
                </TouchableWithoutFeedback>
              ))}
            </ScrollViewCard>
          </TouchableCardList>
        </Content>
      </Container>
    </>
  );
}
