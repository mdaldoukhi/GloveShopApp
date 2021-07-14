import React from 'react';
import vendorStore from '../../stores/vendorStore';
import itemStore from '../../stores/itemStore';
import { ListWrapper, VendorImage, VendorTitle } from './styles';
import { Text } from 'react-native';
import ItemList from '../item/ItemList';
import { observer } from "mobx-react";



function VendorDetail() {
    if (vendorStore.loading) return <Text>Loading</Text>;
    const vendor = vendorStore.vendors[0]
    const items = vendor.gloves.map(item => itemStore.getProductById(item.id))
    return (
        <>
            <ListWrapper>
                <VendorImage source={{ uri: vendor.image }} />
                <VendorTitle>{vendor.name}</VendorTitle>
            </ListWrapper>
            <ItemList items={items}/>
        </>
    );
}

export default observer(VendorDetail);