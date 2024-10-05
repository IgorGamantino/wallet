import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 180px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  padding: 10px;
`;

export const ContentNumber = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
