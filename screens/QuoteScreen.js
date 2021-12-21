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
          <View style={styles.taskWrapper}>
            <TouchableOpacity onPress={() => handleCheckedTodo(task.key)}>
              <Icon
                name={task.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
              ></Icon>
            </TouchableOpacity>
            <View>
              {/*  {neu co thi xuat hien neu khoong thi khong} */}
              {task.checked && <View style={styles.verticalLine}></View>}

              <Text style={styles.task}>{task.text}</Text>
            </View>
            <Icon
              name="trash"
              size={30}
              color="#900"
              style={{ marginLeft: "auto" }}
              onPress={() => handleDeletetodo(task.key)}
            ></Icon>
          </View>
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
  taskWrapper: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffffff",
    borderBottomWidth: 1.5,
    width: "100%",
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: "#F0F0F0",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  verticalLine: {
    borderBottomWidth: 4,
    borderBottomColor: "white",
    marginTop: 15,
    marginLeft: 10,
    width: "100%",
    position: "absolute",
  },
});
