import React from 'react';
import { Text } from "react-native"
import Item from './Item';
import { observer } from "mobx-react";


function ItemList({ items }) {
    const itemList = items.map(item => <Item item={item} key={item.id}/>)
    return (
        <>
            {itemList}
        </>
    );
}

export default observer(ItemList);