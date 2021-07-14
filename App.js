import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from "styled-components";
import VendorDetail from './components/vendor/VendorDetail';
import VendorList from './components/vendor/VendorList';
import { Title } from './styles';


const theme = {
  light: {
    mainColor: "#000",
    backgroundColor: "#fff",
    borderColor: "#000",
    red: "red",
    titleColor: '#0071BC'
  }
}
export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme["light"]}>
      <VendorDetail />
      </ThemeProvider>
    </View>
  );
}

