import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

interface IEntry {
  label: string;
  isPassword: boolean;
}

const Entry: React.FC<IEntry> = (props) => {
  return (
    <View style={styles.usernameContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} secureTextEntry={props.isPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    height: 50,
    margin: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    fontSize: 20,
  },
});

export default Entry;
