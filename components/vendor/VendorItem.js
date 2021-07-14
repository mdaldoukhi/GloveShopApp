import React from 'react';
import { Title } from '../../styles';
import { Image, Text } from "react-native";
import { ListWrapper } from './styles';



function VindorItem(props) {
    return (
        <ListWrapper>
            <Image
                source={{ uri: props.shop.image }}
                style={{ width: 100, height: 100 }}
            />
            <Text>
                {props.shop.name}
            </Text>
        </ListWrapper>
    );
}

export default VindorItem;