import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DemoContext } from "../../context/DemoContext";
import { StackScreen, TabScreens } from "../../helpers/types";
import Page1 from "../Screen1/Page1";
import Page2 from "../Screen2/Page2";

interface IHomeScreen extends NativeStackScreenProps<StackScreen, 'HomeScreen'> {
  age: number
}


export const HomeScreen: React.FC<IHomeScreen> = (props) => {

  const TabsNavigation = createBottomTabNavigator<TabScreens>();

  const context = useContext(DemoContext);
  const params = props.route.params;

  return (
    // <View style={styles.container}>
    //   <Text>Welcome {context?.simpleText}</Text>
    //   <Text>{params.userId}</Text>
    // </View>

    <TabsNavigation.Navigator>
      <TabsNavigation.Screen name="Page1" component={Page1} options={{ tabBarIcon: ({ focused }) => { return (<MaterialIcons name="verified-user" color={focused ? 'blue' : 'grey'} size={30} />) } }} />
      <TabsNavigation.Screen name="Page2" component={Page2} options={{ headerShown: false, tabBarIcon: ({ focused }) => <MaterialIcons name="facebook" size={30} color={focused ? 'blue' : 'grey'} /> }} />
    </TabsNavigation.Navigator>

  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
