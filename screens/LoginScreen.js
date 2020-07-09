import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import StartLayout from "../components/StartLayout";
import Typography from "../components/Typography";
import FilledInput from "../components/FilledInput";
import MainButton from "../components/start/MainButton";
import { Colors } from "../constants/colors";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StartLayout style={styles.root}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Typography style={styles.title}>Sign in with</Typography>
          </View>
          <View style={styles.inputContainer}>
            <FilledInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone number or email"
            />
          </View>
          <View style={styles.inputContainer}>
            <FilledInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholder="Password"
            />
          </View>
          <View style={styles.labelContainer}>
            <Typography style={styles.label}>Forget password?</Typography>
          </View>
          <View>
            <MainButton
              title="Sign in"
              style={styles.button}
              onPress={() => {}}
            />
          </View>
          <View style={styles.signUpContainer}>
            <View style={styles.textContainer}>
              <Typography>New here?</Typography>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignupScreen")}
              >
                <Typography style={styles.underline}>Sign up</Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </StartLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: Colors.orange
  },
  container: {
    height: "50%",
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins_bold",
    color: Colors.orange
  },
  inputContainer: {
    marginVertical: 10
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20
  },
  label: {
    color: Colors.labelColor,
    fontFamily: "Poppins_bold"
  },
  signUpContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  underline: {
    marginLeft: 10,
    textDecorationLine: "underline",
    color: Colors.blue
  }
});

export default LoginScreen;
