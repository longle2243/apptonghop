import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./Task";
export const QuoteScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue("");
    }
  };
  const handleDeletetodo = (id) => {
    setTodos(
      todos.filter((value) => {
        if (value.key !== id) return true;
      })
    );
  };
  const handleCheckedTodo = (id) => {
    setTodos(
      todos.map((value) => {
        if (value.key === id) value.checked = !value.checked;
        return value;
      })
    );
  };
  return (
    <ImageBackground
      source={{
        uri: "https://wallpapertag.com/wallpaper/full/3/4/d/121586-new-red-gradient-background-2560x1600-for-phone.jpg",
      }}
      style={styles.container}
    >
      <Text style={{ marginTop: "10%", fontSize: 16, color: "white" }}>
        Today
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => setValue(value)}
          value={value}
          multiline={true}
          placeholder="Do it now!"
          placeholderTextColor={"white"}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <Icon
            name="plus"
            size={30}
            color="#900"
            style={{ marginLeft: 15 }}
          ></Icon>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            checked={task.checked}
            delete={() => handleDeletetodo(task.key)}
            setChecked={() => handleCheckedTodo(task.key)}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgb(222,222,222)",
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
  textInput: {
    height: 20,
    minHeight: "10%",
    marginTop: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
    flex: 1,
  },
});
