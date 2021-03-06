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
import { Button } from "react-native";
import authStore from "../../stores/authStore";

const CartList = ({ navigation }) => {
    const handleSignOut = async () => {
        await authStore.signout()
        if (authStore.user === null) navigation.replace("Home")
    }
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
            <CheckoutButton onPress={cartStore.checkout}>
                <CheckoutButtonText>Checkout</CheckoutButtonText>
            </CheckoutButton>
            <Button title="Signout" onPress={handleSignOut} />
        </List>
    );
};

export default observer(CartList);