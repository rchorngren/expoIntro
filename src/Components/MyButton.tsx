import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface IMyBUtton {
  label: string;
  onPress: () => void;
}

export const MyButton: React.FC<IMyBUtton> = (props) => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  return (
    <Pressable
      style={
        buttonPressed
          ? [styles.loginButton, styles.loginButtonPressIn]
          : styles.loginButton
      }
      onPress={() => {
        {
          props.onPress();
        }
      }}
      onPressIn={() => {
        setButtonPressed(true);
      }}
      onPressOut={() => {
        setButtonPressed(false);
      }}
    >
      <MaterialIcons name="login" size={20} color="white" />
      <Text style={styles.loginButtonText}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    height: 50,
    margin: 5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  loginButtonPressIn: {
    backgroundColor: "red",
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
