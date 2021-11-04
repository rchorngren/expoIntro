import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Entry from "../../Components/Entry";
import { MyButton } from "../../Components/MyButton";
import { TextButton } from "../../Components/TextButton";

import Logo from "../../../assets/roosterhead.svg";

export const MainScreen: React.FC = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const savePassword = async () => {
    await AsyncStorage.setItem("password", password);
  };

  const getPassword = async (): Promise<string | null> =>
    await AsyncStorage.getItem("password");

  useEffect(() => {
    const init = async () => {
      const passwordFound = await getPassword();
      if (passwordFound) {
        setPassword(passwordFound);
      }
    };
    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Logo width={200} height={200} />
        </View>
        <View style={styles.usernamePasswordContainer}>
          <Entry label="Username" isPassword={false} />

          <Entry
            label="Password"
            isPassword={hidePassword}
            onTextChange={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
        <View style={styles.loginContainer}>
          <MyButton
            label="Login"
            onPress={async () => {
              await savePassword();
              const retrievedPassword = await getPassword();
              if (retrievedPassword) {
                alert(retrievedPassword);
              }
            }}
          />

          <TextButton
            labelOne="Show password"
            labelTwo="Hide password"
            onPress={() => setHidePassword(!hidePassword)}
            toggleValue={hidePassword}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 25,
  },
  password: {
    height: 50,
    margin: 15,
    backgroundColor: "white",
  },
  usernamePasswordContainer: {
    flex: 0.25,
    justifyContent: "center",
  },
  loginContainer: {
    flex: 0.5,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
});
