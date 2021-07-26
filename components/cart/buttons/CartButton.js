import React from "react";

import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled, CartTextStyled } from "../styles";

//store
import cartStore from "../../../stores/cartStore";

//native-base
import { Button } from "native-base";

//observer
import { observer } from "mobx-react";
const CartButton = () => {
    const navigation = useNavigation();
    return (
        <Button onPress={() => navigation.navigate("CartList")}>
            <CartButtonStyled name="shopping-cart" size={24} />
            <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
        </Button>
    );
};

export default observer(CartButton);