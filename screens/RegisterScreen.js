import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Button, InputField, ErrorMessage } from "../components";
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../firebase";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setRepeatPass] = useState();
  const [name, setName] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setSignupError("Mật khẩu không khớp");
    } else if (password === "" && confirmPassword === "" && email === "") {
      setSignupError("Hãy điền đầy đủ thông tin");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with ", user.email);

          // set(ref(database, "users/" + user.uid), {
          //   username: name,
          //   email: email,
          // });
        })
        .catch((error) => setSignupError(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <Text style={styles.title}>Tạo tài khoản mới</Text>
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="account"
        placeholder="Nhập tên của bạn"
        autoFocus={true}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="email"
        placeholder="Nhập địa chỉ email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="lock"
        placeholder="Nhập mật khẩu"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={password}
        onChangeText={(text) => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="lock"
        placeholder="Nhập lại mật khẩu"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={confirmPassword}
        onChangeText={(text) => setRepeatPass(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <Button
        onPress={handleSignUp}
        backgroundColor="#f57c00"
        title="Đăng ký"
        tileColor="#fff"
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
        }}
      />
      <Text
        style={{ color: "blue", textAlign: "center" }}
        onPress={() => navigation.replace("Login")}
      >
        Đã có tài khoản ? Đăng nhập ngay
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    alignSelf: "center",
    paddingBottom: 24,
  },
});
