import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Button, Stack, Text } from "native-base";
import { AppTitle, HomeBackground, Title } from "../styles";
const Home = ({ navigation }) => {
  return (
    <>
      <HomeBackground source={require("./bkimage.png")}>
      <AppTitle>GoalKeeper Equipment</AppTitle>
        <Button
          style={{ marginTop: "100%", width: "80%" }}
          mx={{
            base: "auto",
            md: 0,
          }}
          variant="outline"
          onPress={() => navigation.navigate("VendorList")}
        >
          Go to the Shop
        </Button>
      </HomeBackground>
    </>
  );
};

export default Home;
