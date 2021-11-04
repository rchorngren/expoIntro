import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";

interface IEntry {
  label: string;
  isPassword: boolean;
  onTextChange?: (text: string) => void;
  defaultValue?: string;
}

const Entry: React.FC<IEntry> = (props) => {
  const [fontsLoaded] = useFonts({
    CrazyFont: require("../../assets/fonts/Fruktur-Regular.ttf"),
  });

  return (
    <View style={styles.entryContainer}>
      {fontsLoaded && <Text style={styles.label}>{props.label}</Text>}

      <TextInput
        value={props.defaultValue}
        style={styles.input}
        secureTextEntry={props.isPassword}
        onChangeText={props.onTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  entryContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: "CrazyFont",
    fontSize: 20,
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
