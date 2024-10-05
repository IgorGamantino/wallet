import styled from "styled-components/native";

// 16; //
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 125px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 16px;
  flex-direction: row;
`;

export const BottomHeader = styled.View`
  height: 70px;
  z-index: 0;
  border-radius: 0px 0px 50px 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
