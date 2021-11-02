import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Entry from "../../Components/Entry";

export const MainScreen: React.FC = () => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.usernamePasswordContainer}>
        <Entry label="Username" isPassword={false} />

        <Entry label="Password" isPassword={hidePassword} />
      </View>
      <View style={styles.loginContainer}>
        <Pressable
          style={
            buttonPressed
              ? [styles.loginButton, styles.loginButtonPressIn]
              : styles.loginButton
          }
          onPress={() => {
            // setHidePassword(!hidePassword);
          }}
          onPressIn={() => {
            setButtonPressed(true);
          }}
          onPressOut={() => {
            setButtonPressed(false);
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.showPasswordButton}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          {hidePassword ? (
            <Text>Show password</Text>
          ) : (
            <Text>Hide password</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    margin: "5px",
  },
  password: {
    height: 50,
    margin: 15,
    backgroundColor: "white",
  },
  usernamePasswordContainer: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
  },
  loginContainer: {
    flex: 0.5,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
  showPasswordButton: {
    alignSelf: "center",
  },
  loginButton: {
    height: 50,
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButtonPressIn: {
    backgroundColor: "red",
  },
  loginButtonPressOut: {},
});
