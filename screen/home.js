
import React from "react";
import { View, Text, Button } from "react-native"; 

import { styles } from "../style/stylesheet";

export function Home({ navigation }) {
  const chuyentrang=page=>{navigation.navigate(page);};
  const login = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={login} title="Log In" />
        <Button style={styles.button} onPress={()=>{chuyentrang("Signup")}} title="Sign Up" />
      </View>
      <View style={styles.body}>
        <Button style={styles.button} onPress={()=>{navigation.navigate("Forum")}} title="Forum" />
        <Button style={styles.button} onPress={()=>{navigation.navigate("Chat")}} title="Chat" />
      </View>
      <View style={styles.body}>
        <Button style={styles.button} onPress={()=>{navigation.navigate("Quotes")}} title="Quotes"/>
        <Button style={styles.button} onPress={()=>{navigation.navigate("Todolist")}} title="Todo List"/>
      </View>
    </View>
  );
}