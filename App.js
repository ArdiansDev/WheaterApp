import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Quote from "./component/Quote";

// import Quote from "./component/Quote";
import Suhu from "./component/Weather";

// const image = {require('./assets/background.png')};
export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.Backgroud}
    >
      <Quote />
      <Suhu />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 90,
    color: "black",
    backgroundColor: "#c4c4c4",
    opacity: 0.5,
    width: 356,
    height: 52,
    borderRadius: 20,
  },

  Backgroud: {
    // position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 1024,
    width: "100%",

    flex: 1,
    resizeMode: "cover",
  },
});
