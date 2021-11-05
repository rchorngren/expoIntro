import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DemoContext } from "../../context/DemoContext";
import { StackScreen } from "../../helpers/types";

interface IHomeScreen extends NativeStackScreenProps<StackScreen, 'HomeScreen'> {
  age: number
}


export const HomeScreen: React.FC<IHomeScreen> = (props: any) => {
  const context = useContext(DemoContext);
  const params = props.route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome {context?.simpleText}</Text>
      <Text>{params.userId}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
