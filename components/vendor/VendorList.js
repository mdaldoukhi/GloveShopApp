import { View } from 'react-native';
import React from 'react';
import vindorStore from "../../stores/vendorStore"
import VindorItem from "./VendorItem"
import { Title } from '../../styles';
import { observer } from "mobx-react";


function VendorList() {
    const vindorList = vindorStore.vendors.map(shop => <VindorItem shop={shop} key={shop.id} />)
    return (
        <View>
            {vindorStore.loading ? <Title>Loading</Title> : vindorList}
        </View>
    );
}

export default observer(VendorList);