import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "native-base";
import Typography from "../Typography";

const MainButton = (props) => {
  return (
    <Button
      rounded
      block
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Typography style={styles.buttonText}>{props.title}</Typography>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center"
  },
  buttonText: {
    color: "white"
  }
});

export default MainButton;
