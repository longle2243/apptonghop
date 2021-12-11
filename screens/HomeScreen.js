import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/stylesheets";
import { auth, signOut, ref, child, get, database } from "../firebase";

export const HomeScreen = ({ navigation }) => {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const dbRef = ref(database);
  let name;
  await get(child(dbRef, `users/${auth.currentUser.uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        name = snapshot.val().username;
        console.log(name);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tên tài khoản : {name}</Text>
      <Text>Địa chỉ email : {auth.currentUser?.email}</Text>
      <Button onPress={handleSignout} title="Đăng xuất" />
    </View>
  );
};
