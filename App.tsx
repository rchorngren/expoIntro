import React from "react";
import { DemoContextProvider } from "./src/context/DemoContext";
import { MainScreen } from "./src/Screens/MainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/Screens/MainScreen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreen } from "./src/helpers/types";

const Stack = createNativeStackNavigator<StackScreen>();

export const App = () => {
  return (
    <NavigationContainer>
      <DemoContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </DemoContextProvider>
    </NavigationContainer>
  );
};

export default App;
