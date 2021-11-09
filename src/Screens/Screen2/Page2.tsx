import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text>Page 2</Text>
    </View>
  )
}

export default Page2;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})