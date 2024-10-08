import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./MenuScreen"; // Adjust the import path
import StarterUpdate from "./StarterUpdate";
import MainUpdate from "./MainUpdate";
import DessertUpdate from "./DessertUpdate";
import UpdateItem from "./UpdateItem";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="StarterUpdate" component={StarterUpdate} />
        <Stack.Screen name="MainUpdate" component={MainUpdate} />
        <Stack.Screen name="DessertUpdate" component={DessertUpdate} />
        <Stack.Screen name="UpdateItem" component={UpdateItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
