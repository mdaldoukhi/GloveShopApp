import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import VendorList from "../vendor/VendorList";
import VendorDetail from "../vendor/VendorDetail";
import CartList from "../cart/CartList";
import CartButton from "../cart/buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const Stack = createStackNavigator();
export default RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VendorList" component={VendorList}
                options={{
                    title: "Choose a Vendor",
                    headerRight: () => <CartButton />,
                }} />
            <Stack.Screen name="VendorDetail" component={VendorDetail} options={{
                headerRight: () => <CartButton />,
            }} />
            <Stack.Screen name="CartList" component={CartList} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};
