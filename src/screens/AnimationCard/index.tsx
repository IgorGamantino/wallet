import { useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import WalletIcon from "@assets/svg/wallet.svg";
import {
  BottomContent,
  Container,
  ContentCenter,
  TopContent,
  stylesCommon,
} from "./styles";

export const AnimationCard = () => {
  const { navigate } = useNavigation();
  const focused = useIsFocused();

  const animationBottomViewValue = useSharedValue(-120);
  const animationBottomViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: "-214deg" },
        { translateX: -50 },
        {
          translateY: withTiming(animationBottomViewValue.value, {
            duration: 800,
          }),
        },
      ],
      width: 450,
      height: 300,
    };
  });

  const animationTopViewValue = useSharedValue(-120);
  const animationTopViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: "-32eg" },
        { translateX: -100 },
        {
          translateY: withTiming(animationTopViewValue.value, {
            duration: 800,
          }),
        },
      ],
      width: 400,
      height: 250,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      animationTopViewValue.value = -78;
      animationBottomViewValue.value = -50;
    }, 100);
  }, [animationBottomViewValue, animationTopViewValue]);

  useEffect(() => {
    if (focused) {
      setTimeout(() => {
        navigate("MyCart");
      }, 5000);
    }
  }, [focused, navigate]);

  return (
    <Container>
      <Animated.View />
      <TopContent
        style={[
          animationTopViewStyle,
          stylesCommon.container,
          {
            transform: [
              { rotate: "-24deg" },
              { translateX: -50 },
              { translateY: -150 },
            ],
          },
        ]}
      />
      <ContentCenter>
        <WalletIcon />
      </ContentCenter>

      <BottomContent
        style={[
          animationBottomViewStyle,
          stylesCommon.container,
          {
            transform: [
              { rotate: "-214deg" },
              { translateX: -50 },
              { translateY: -150 },
            ],
          },
        ]}
      />
    </Container>
  );
};
