import React, { useState } from 'react';
import { Text } from "react-native"
import { observer } from "mobx-react";
import { ItemImage } from './styles';

import NumericInput from "react-native-numeric-input";
import { List, Button } from "native-base";

import cartStore from "../../stores/cartStore";


function Item(props) {
    const [quantity, setQuantity] = useState(1);
    const handleAdd = () => {
        const newItem = { gloveId: props.item.id, quantity };
        cartStore.addToCart(newItem);
    };
    return (
        <List.Item>
            <Text>{props.item.name}</Text>
            <ItemImage source={{ uri: props.item.image }} />
            <NumericInput
                rounded
                totalWidth={80}
                totalHeight={40}
                initValue={quantity}
                minValue={1}
                onChange={setQuantity}
            />
            <Button onPress={handleAdd}>
                <Text>Add</Text>
            </Button>
        </List.Item>
    );
}

export default observer(Item);