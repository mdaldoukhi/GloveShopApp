import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import VendorList from "../vendor/VendorList";
import VendorDetail from "../vendor/VendorDetail";

const Stack = createStackNavigator();
export default RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VendorList" component={VendorList} />
            <Stack.Screen name="VendorDetail" component={VendorDetail} />
        </Stack.Navigator>
    );
};
