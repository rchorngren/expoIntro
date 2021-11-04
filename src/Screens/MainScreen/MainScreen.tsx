import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import Entry from "../../Components/Entry";
import { MyButton } from "../../Components/MyButton";
import { TextButton } from "../../Components/TextButton";

import Logo from "../../../assets/roosterhead.svg";
import { DemoContext } from "../../context/DemoContext";

export const MainScreen: React.FC = (props: any) => {
  const context = React.useContext(DemoContext);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const savePassword = async () => {
    await AsyncStorage.setItem("password", context?.anotherText!);
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
          <Entry
            label="Username"
            isPassword={false}
            onTextChange={(text) => context?.setSimpleText(text)}
            defaultValue={context?.simpleText}
          />

          <Entry
            label="Password"
            isPassword={hidePassword}
            // onTextChange={(text) => setPassword(text)}
            onTextChange={(text) => context?.setAnotherText(text)}
            defaultValue={context?.anotherText}
          />
        </View>
        <View style={styles.loginContainer}>
          <MyButton
            label="Login"
            onPress={async () => {
              await savePassword();
              const retrievedPassword = await getPassword();
              if (retrievedPassword) {
                // alert(retrievedPassword);
                props.navigation.navigate("HomeScreen");
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
