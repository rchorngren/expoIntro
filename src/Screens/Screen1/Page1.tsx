import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Page1 = () => {
  return (
    <View style={styles.container}>
      <Text>Page 1</Text>
    </View>
  )

}

export default Page1;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})