import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  /* align-items: center; */
`;
export const ContentCenter = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const TopContent = styled(Animated.View)`
  left: 40px;
  top: 0px;
`;
export const BottomContent = styled(Animated.View)`
  bottom: 0;
`;

export const stylesCommon = StyleSheet.create({
  container: {
    backgroundColor: "#efef",
    width: 250,
    height: 236,
    opacity: 0.2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "absolute",
  },
});
