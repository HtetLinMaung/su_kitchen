import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../constants/colors";

const FilledInput = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.inputBackground,
    height: 40,
    borderRadius: 6,
    fontSize: 15,
    paddingHorizontal: 10,
    color: "black",
    fontFamily: "Poppins"
  }
});

export default FilledInput;
