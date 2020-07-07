import React, { useState } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import { Button, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./components/Typography";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    ...Ionicons.font
  });
};

const App = () => {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/ma-la-xiang-guo-10.jpg")}
        style={styles.backgroundImage}
      >
        <View></View>
        <View></View>
        <View></View>
        <View style={styles.buttonContainer}>
          <Button rounded style={styles.button}>
            <Typography style={styles.buttonText}>Get started</Typography>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#FF6239",
    width: "40%",
    justifyContent: "center"
  },
  buttonText: {
    color: "white"
  }
});

export default App;
