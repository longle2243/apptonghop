import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Home({ navigation }) {
  const login = () => {
    navigation.navigate("Login");
  };
  const signup = () => {
    navigation.navigate("Signup");
  };
  const forum = () => {
    navigation.navigate("Forum");
  };
  const chat = () => {
    navigation.navigate("Chat");
  };
  const quotes = () => {
    navigation.navigate("Quotes");
  };
  const todolist = () => {
    navigation.navigate("Todolist");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={login} title="Log In" />
        <Button style={styles.button} onPress={signup} title="Sign Up" />
      </View>
      <View style={styles.body}>
        <Button style={styles.button} onPress={forum} title="Forum" />
        <Button style={styles.button} onPress={chat} title="Chat" />
      </View>
      <View style={styles.body}>
        <Button style={styles.button} onPress={quotes} title="Quotes" />
        <Button style={styles.button} onPress={todolist} title="Todo List" />
      </View>
    </View>
  );
}

function Login({ navigation }) {
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

function Signup({ navigation }) {
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
        <Text style={styles.text}>Log In</Text>
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
        />
        <TextInput
          style={styles.input}
          onChangeText={(password2) => setpassword2(password2)}
          placeholder="Confirm Password"
        />
        </View>
      <View style={styles.body}>
        <Button
          style={styles.button}
          onPress={() => {
            xulydangnhap();
          }}
          title="Sign In"
        />
        <Button style={styles.button} onPress={chuyentrang} title="Home" />
      </View>
    </View>
  );
}

function Forum({ navigation }) {
  const chuyentrang = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Forum</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={chuyentrang} title="Home" />
      </View>
    </View>
  );
}

function Chat({ navigation }) {
  const chuyentrang = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Chat</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={chuyentrang} title="Home" />
      </View>
    </View>
  );
}

function Quotes({ navigation }) {
  const chuyentrang = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Quotes</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={chuyentrang} title="Home" />
      </View>
    </View>
  );
}

function Todolist({ navigation }) {
  const chuyentrang = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Todo List</Text>
      <View style={styles.body}>
        <Button style={styles.button} onPress={chuyentrang} title="Home" />
      </View>
    </View>
  );
}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "#33CCFF",
    fontSize: 30,
  },
  button: {
    flex: 1,
  },
});
