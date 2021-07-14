import React from 'react';
import vendorStore from '../../stores/vendorStore';
import itemStore from '../../stores/itemStore';
import { ListWrapper, VendorImage, VendorTitle } from './styles';
import { Text } from 'react-native';
import ItemList from '../item/ItemList';
import { observer } from "mobx-react";

function VendorDetail({ navigation, route }) {
    if (vendorStore.loading) return <Text>Loading</Text>;
    const { shop } = route.params
    const items = shop.gloves.map(item => itemStore.getProductById(item.id))
    return (
        <>
            <ListWrapper>
                <VendorImage source={{ uri: shop.image }} />
                <VendorTitle>{shop.name}</VendorTitle>
            </ListWrapper>
            <ItemList items={items} />
        </>
    );
}

export default observer(VendorDetail);