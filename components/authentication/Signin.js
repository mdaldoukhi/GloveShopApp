import React, { useState } from 'react';
import { View, Alert, Button } from 'react-native';
import { InputText, SignButton, Title } from './styles';

//observer
import { observer } from "mobx-react";
import authStore from '../../stores/authStore';

const Signin = ({ navigation }) => {
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    )
    const handleSubmit = async () => {
        await authStore.signin(user)
        if (authStore.user) navigation.replace("VendorList");
    }
    return (
        <View>
            <Title>Sign in</Title>
            <InputText
                placeholder="Type your username ..."
                onChangeText={(username) => setUser({ ...user, username })}
                autoCapitalize="none"
            />
            <InputText
                placeholder="Type your password ..."
                onChangeText={(password) => setUser({ ...user, password })}
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <SignButton
                onPress={handleSubmit}>
                Sign in
            </SignButton>
            <Button
                title=" Click here to sign up"
                onPress={() => navigation.navigate("Signup")}
            />
        </View>
    );
};

export default observer(Signin);