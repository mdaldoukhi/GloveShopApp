import React from 'react';
import { Text } from "react-native"
import { observer } from "mobx-react";
import { ItemImage } from './styles';


function Item(props) {
    return (
        <>
            <Text>{props.item.name}</Text>
            <ItemImage source={{ uri: props.item.image }} />
        </>
    );
}

export default observer(Item);