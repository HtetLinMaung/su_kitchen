import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetstartedScreen from "./screens/GetstartedScreen";
import StartScreen from "./screens/StartScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    ...Ionicons.font
  });
};

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetstartedScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="GetstartedScreen"
          component={GetstartedScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartScreen"
          component={StartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
