import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./components/Navigation/index"


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
      <NativeBaseProvider>
        <ThemeProvider theme={theme["light"]}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </NativeBaseProvider>

  );
}

