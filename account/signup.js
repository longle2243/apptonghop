
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../style/stylesheet";

export function Signup({ navigation }) {
    const [mail, setmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const xulydangnhap = () => {
      alert("Đăng kí thành công :) username: " + username + " password: " + password+ " confirm password: " + password2+ " gmail: " + mail);
    };
  
    const chuyentrang = () => {
      navigation.goBack();
    };
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(mail) => setmail(mail)}
            placeholder="Gmail"
          />
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
          <TextInput
            style={styles.input}
            onChangeText={(password2) => setpassword2(password2)}
            placeholder="Confirm Password"
            secureTextEntry
          />
          </View>
        <View style={styles.body}>
          <Button
            style={styles.button}
            onPress={() => {
              xulydangnhap();
            }}
            title="Sign Up"
          />
          <Button style={styles.button} onPress={chuyentrang} title="Home" />
        </View>
      </View>
    );
  }