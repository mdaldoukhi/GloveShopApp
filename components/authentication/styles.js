import styled from "styled-components/native";
import { Button } from "native-base";

export const Title = styled.Text`
    text-align: center;
    margin-top: 50%;
    font-size: 22px;
`;

export const InputText = styled.TextInput `
    border: 1px solid #000;
    border-radius: 6px;
    padding: 12px;
    width: 80%;
    margin: 10px auto;
`;

export const SignButton = styled(Button) `
    background-color: #3abcee;
    width: 80%;
    margin: 15px auto;

`;