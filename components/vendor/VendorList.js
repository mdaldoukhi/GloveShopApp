import { View } from 'react-native';
import React from 'react';
import vindorStore from "../../stores/vendorStore"
import VindorItem from "./VendorItem"
import { Title } from '../../styles';
import { observer } from "mobx-react";
import { List } from "native-base"


function VendorList({ navigation }) {
    const vindorList = vindorStore.vendors.map(shop => <VindorItem shop={shop} key={shop.id} navigation={navigation} />)
    return (
        <List>
            {vindorStore.loading ? <Title>Loading</Title> : vindorList}
        </List>
    );
}

export default observer(VendorList);