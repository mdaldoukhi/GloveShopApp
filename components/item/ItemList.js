import React from 'react';
import { Text } from "react-native"
import Item from './Item';
import { observer } from "mobx-react";
import itemStore from '../../stores/itemStore';


function ItemList({ items }) {
    if(itemStore.loading) return <Text>Loading</Text>
    const itemList = items.map(item => <Item item={item} key={item.id}/>)
    return (
        <>
            {itemList}
        </>
    );
}

export default observer(ItemList);