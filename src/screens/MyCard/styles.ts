import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_dark};
  flex: 1;
  height: 47px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  position: "absolute";
  bottom: 0;
  top: -120;
`;

export const TouchableCardList = styled.View`
  position: "absolute";
  top: -20%;
  width: 100%;
`;

export const ScrollViewCard = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 16px;
`;

export const ButtonPressable = styled.Pressable`
  margin-top: 10px;
  height: 40px;
`;
