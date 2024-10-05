import styled from "styled-components/native";

export const ContainerInput = styled.View`
  text-align: start;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 400;
  font-family: "PTSans_400Regular";
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const CustomContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 45px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: flex-start;
  align-items: center;
  /* padding: 16px; */
  padding: 0 16px;
`;

export const InputStyles = styled.TextInput`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
`;
