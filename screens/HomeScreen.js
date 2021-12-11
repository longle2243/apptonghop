import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheets";
import { auth } from "../firebase";

export const HomeScreen = ({ navigation }) => {
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current user: {auth.currentUser?.email}</Text>

      <TouchableOpacity onPress={handleSignout}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};
