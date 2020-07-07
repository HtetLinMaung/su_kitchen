import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const StartLayout = (props) => {
  return (
    <ImageBackground
      source={require("../assets/ma-la-xiang-guo-10.jpg")}
      style={{ ...styles.backgroundImage, ...props.style }}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  }
});

export default StartLayout;
