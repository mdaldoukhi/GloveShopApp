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
import authStore from "../../../stores/authStore";
import { Alert } from "react-native";

const CartButton = () => {
    const handlePress = () => {
        if (authStore.user) navigation.navigate("CartList")
        else {
            Alert.alert(
                "Sign in",
                "Sign in to access checkout",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Signin", onPress: () => navigation.navigate("Signin") }
                ]
            );
        }
    }
    const navigation = useNavigation();
    return (
        <Button onPress={handlePress}>
            <CartButtonStyled name="shopping-cart" size={24} />
            <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
        </Button>
    );
};

export default observer(CartButton);