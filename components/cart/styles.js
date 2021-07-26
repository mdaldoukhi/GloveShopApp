import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const TotalPrice = styled.Text`
  color: red;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(FontAwesome)`
  color: #fff;
  margin-right: 10px;
`;
export const CartTextStyled = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TrashIcon = styled(FontAwesome)`
  color: red;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: blue;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;