import React from "react";
import { Text, StyleSheet } from "react-native";

const Typography = (props) => {
  return (
    <Text {...props} style={{ ...styles.typography, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  typography: {
    fontFamily: "Poppins"
  }
});

export default Typography;
