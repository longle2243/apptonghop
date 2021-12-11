import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/stylesheets";
import {
  ref,
  set,
  database,
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../firebase";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setRepeatPass] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Login");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with ", user.email);

          set(ref(database, "users/" + user.uid), {
            username: name,
            email: email,
          });
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.titleLogin}>Register page</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Họ tên"
        onChangeText={(userName) => setName(userName)}
      />
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
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Nhập lại mật khẩu"
        onChangeText={(userRePass) => setRepeatPass(userRePass)}
      />
      <View
        style={{
          width: 300,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button title="Đăng ký" color="#841584" onPress={handleSignUp} />
        <Button
          title="Đăng nhập"
          color="#841584"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </View>
  );
};
