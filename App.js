import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./screen/home";

import { Login } from "./account/login";
import { Signup } from "./account/signup";

import { Forum } from "./online/forum";
import { Chat } from "./online/chat";

import { Quotes } from "./offline/quotes";
import { Todolist } from "./offline/todolist";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forum" component={Forum} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="Todolist" component={Todolist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}