import styled from "styled-components/native";


export const ContainerInput = styled.View`
  width: 100%;
  text-align:  start;

`;
export const InputStyles = styled.TextInput`
    background-color: ${({theme}) => theme.colors.white};
    height: 45px;
    padding: 16px;
    border-radius: 6px;

 font-size: 16px;
 font-weight: 400;
 line-height: 18px;

`;

export const Label = styled.Text`
 font-size: 14px;
 font-weight: 400;
 line-height: 16px;
 color: ${({theme}) => theme.colors.white};
 margin-bottom: 4px;
`;
