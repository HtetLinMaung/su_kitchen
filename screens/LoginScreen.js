import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native";
import StartLayout from "../components/StartLayout";
import Typography from "../components/Typography";
import FilledInput from "../components/FilledInput";
import MainButton from "../components/start/MainButton";

import { Colors } from "../constants/colors";
import { environment } from "../environment";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      if (!phone || phone.length < 9 || phone.length > 11) {
        const error = new Error("Invalid Phone number!");
        throw error;
      }
      if (!password) {
        const error = new Error("Password should not be empty!");
        throw error;
      }
      const response = await axios.post(`${environment.host}/api/auth/login`, {
        phone_no: phone,
        password
      });

      await AsyncStorage.setItem("token", response.data.token);
      setPhone("");
      setPassword("");
      navigation.navigate("HomeScreen");
    } catch (err) {
      let message = err.message;
      if (err.response) {
        message = err.response.data.message;
      }
      Alert.alert("Something wrong!", message);
    }
  };

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
              keyboardType={"numeric"}
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
              onPress={loginHandler}
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
