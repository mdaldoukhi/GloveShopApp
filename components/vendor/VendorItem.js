import React from 'react';
import { Title } from '../../styles';
import { Image, Text } from "react-native";
import { ListWrapper } from './styles';
import { List } from "native-base"




function VindorItem({ shop, navigation }) {
    return (
        <List.Item onPress={() => navigation.navigate('VendorDetail', { shop: shop })}>
            <Image
                source={{ uri: shop.image }}
                style={{ width: 100, height: 100 }}

            />
            <Text>
                {shop.name}
            </Text>
        </List.Item>
    );
}

export default VindorItem;