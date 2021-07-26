import styled, { createGlobalStyle } from "styled-components/native"


export const Title = styled.Text`
    color: ${props => props.theme.mainColor};
    margin-top: 50%;
    font-size: 25px;
`;

export const AppTitle = styled.Text `
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin: 15%;
`;

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;
