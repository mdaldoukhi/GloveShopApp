import React from "react";

import { Spinner, List } from "native-base";

import { CheckoutButton, CheckoutButtonText } from "./styles"
//stores
import cartStore from "../../stores/cartStore";
import itemStore from "../../stores/itemStore";

//component
import CartItem from "./CartItem";

//observer
import { observer } from "mobx-react";

const CartList = () => {
    if (itemStore.loading) return <Spinner />;
    const cartList = cartStore.items
        .map((item) => ({
            ...itemStore.getProductById(item.gloveId),
            quantity: item.quantity,
        }))
        .map((item) => <CartItem item={item} key={item.id} />);
    return (
        <List>
            {cartList}
            <CheckoutButton onPress={cartStore.checkout}><CheckoutButtonText>Checkout</CheckoutButtonText></CheckoutButton>
        </List>
    );
};

export default observer(CartList);