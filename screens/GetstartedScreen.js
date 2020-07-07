import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "native-base";
import Typography from "../components/Typography";
import StartLayout from "../components/StartLayout";
import MainButton from "../components/start/MainButton";

const GetstartedScreen = ({ navigation }) => {
  return (
    <StartLayout style={styles.root}>
      <View></View>
      <View></View>
      <View></View>
      <View style={styles.buttonContainer}>
        <MainButton
          title="Get started"
          style={styles.button}
          onPress={() => navigation.navigate("StartScreen")}
        />
      </View>
    </StartLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#FF6239",
    width: "40%"
  },
  buttonText: {
    color: "white"
  }
});

export default GetstartedScreen;
