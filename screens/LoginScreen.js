import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/stylesheets";
import { auth } from "../firebase";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Login with ", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.titleLogin}>Login page</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Địa chỉ email"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        onChangeText={(userPass) => setPassword(userPass)}
      />
      <Button title="Đăng nhập" backgroundColor="blue" onPress={handleLogin} />
    </View>
  );
};
