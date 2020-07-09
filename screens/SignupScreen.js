import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  CheckBox
} from "react-native";
import StartLayout from "../components/StartLayout";
import Typography from "../components/Typography";
import FilledInput from "../components/FilledInput";
import MainButton from "../components/start/MainButton";
import { Colors } from "../constants/colors";

const SignupScreen = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <StartLayout style={styles.root}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Typography style={styles.title}>Sign up with</Typography>
          </View>
          <View style={styles.inputContainer}>
            <FilledInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Name"
            />
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
          <View style={styles.inputContainer}>
            <FilledInput
              value={confirm}
              onChangeText={(text) => setConfirm(text)}
              secureTextEntry
              placeholder="Re-enter password"
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={agree}
              onValueChange={(v) => setAgree(v)}
              style={styles.checkbox}
            />
            <Typography style={styles.label}>
              I agree with terms and condition
            </Typography>
          </View>
          <View>
            <MainButton title="Sign up" onPress={() => {}} />
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
  container: {
    height: "60%",
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
    color: Colors.blue
  },
  inputContainer: {
    marginVertical: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  label: {
    color: Colors.labelColor
  }
});

export default SignupScreen;
