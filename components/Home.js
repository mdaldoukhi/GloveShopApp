import React from 'react';
import { View, Text } from 'react-native';
import { Title } from '../styles';
import { Button } from 'native-base';

const Home = ({ navigation }) => {
    return (
        <Button style={{ marginTop: "30%" }} onPress={() => navigation.navigate('VendorList')}>
            Click Here
        </Button>
    );
};


export default Home;
