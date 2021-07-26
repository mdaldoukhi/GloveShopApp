import React from 'react';
import { Text } from "react-native"
import Item from './Item';
import { observer } from "mobx-react";
import itemStore from '../../stores/itemStore';
import { List } from 'native-base';


function ItemList({ items }) {
    if(itemStore.loading) return <Text>Loading</Text>
    const itemList = items.map(item => <Item item={item} key={item.id}/>)
    return (
        <List>
            {itemList}
        </List>
    );
}

export default observer(ItemList);