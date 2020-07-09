import React from "react";
import { StyleSheet, View } from "react-native";
import StartLayout from "../components/StartLayout";
import MainButton from "../components/start/MainButton";
import { Colors } from "../constants/colors";

const StartScreen = ({ navigation }) => {
  return (
    <StartLayout style={styles.root}>
      <View style={styles.buttonContainer}>
        <MainButton
          style={styles.register}
          title="I'm new"
          onPress={() => navigation.navigate("SignupScreen")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          style={styles.login}
          title="I've been here"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </StartLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  buttonContainer: {
    width: "60%",
    marginBottom: 50
  },
  login: {
    backgroundColor: Colors.orange
  },
  register: {
    backgroundColor: Colors.blue
  }
});

export default StartScreen;
