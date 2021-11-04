import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DemoContext } from "../../context/DemoContext";

const HomeScreen = () => {
  const context = useContext(DemoContext);

  return (
    <View style={styles.container}>
      <Text>Welcome {context?.simpleText}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
