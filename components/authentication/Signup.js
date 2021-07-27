import React, { useState } from 'react';
import { View, Alert, Button } from 'react-native';
import { InputText, SignButton, Title } from './styles';

//observer
import { observer } from "mobx-react";
import authStore from '../../stores/authStore';

const Signup = ({ navigation }) => {
    const [user, setUser] = useState(
        {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        }
    )
    const handleSubmit = async () => {
        await authStore.signup(user)
        if (authStore.user) navigation.replace("VendorList");
    }
    return (
        <View>
            <Title>Sign up</Title>
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
            <InputText
                placeholder="Type your First Name ..."
                onChangeText={(firstName) => setUser({ ...user, firstName })}
                autoCapitalize="none"
            />
            <InputText
                placeholder="Type your Last Name ..."
                onChangeText={(lastName) => setUser({ ...user, lastName })}
                autoCapitalize="none"
            />
            <InputText
                placeholder="Type your Email ..."
                onChangeText={(email) => setUser({ ...user, email })}
                autoCapitalize="none"
            />
            <SignButton
                onPress={handleSubmit}>
                Sign up
            </SignButton>
            <Button
                title=" Click here to sign in"
                onPress={() => navigation.navigate("Signin")}
            />
        </View>
    );
};

export default observer(Signup);