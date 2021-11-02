import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export const MainScreen: React.FC = () => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.usernamePasswordContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Password</Text>

          <TextInput style={styles.input} secureTextEntry={hidePassword} />

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
  usernameContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    paddingHorizontal: 20,
  },
  passwordContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    paddingHorizontal: 20,
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
  label: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
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
