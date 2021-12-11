
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../style/stylesheet";
export function Login({ navigation }) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const xulydangnhap = () => {
      alert("Đăng nhập thành công!!! username: " + username + " password: " + password);
    };
  
    const chuyentrang = () => {
      navigation.goBack();
    };
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Log In</Text>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(username) => setusername(username)}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={(password) => setpassword(password)}
            placeholder="Password"
            secureTextEntry
          />
          </View>
        <View style={styles.body}>
          <Button
            style={styles.button}
            onPress={() => {
              xulydangnhap();
            }}
            title="Log In"
          />
          <Button style={styles.button} onPress={chuyentrang} title="Home" />
        </View>
      </View>
    );
  }