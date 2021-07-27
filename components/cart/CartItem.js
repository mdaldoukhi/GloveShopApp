import { List } from "native-base";
import { Text } from "react-native";
import NumericInput from "react-native-numeric-input";

import React, { useState } from "react";

import { TotalPrice, TrashIcon } from "./styles";

import cartStore from "../../stores/cartStore"

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const handleChange = (value) => {
        setQuantity(value)
        cartStore.updateQuantity(item.id, value)
    }
    return (
        <List.Item>
            <Text>{item.name}</Text>
            <Text>
                {item.price} KD x {quantity}
            </Text>
            <TotalPrice>{item.price * quantity} KD</TotalPrice>
            <TrashIcon
                name="trash"
                size={24}
                onPress={() => cartStore.deleteItem(item.id)} />
            <NumericInput
                rounded
                totalWidth={80}
                totalHeight={40}
                initValue={quantity}
                value={quantity}
                onChange={handleChange}
            />
        </List.Item>
    );
};

export default CartItem;