import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons";
const Task = (props) => {
  return (
    <View style={styles.taskWrapper}>
      <TouchableOpacity onPress={() => props.setChecked()}>
        <Icon
          name={props.checked ? "check" : "square"}
          size={30}
          color="#900"
          style={{ marginLeft: 15 }}
        ></Icon>
      </TouchableOpacity>
      <View>
        {/*  {neu co thi xuat hien neu khoong thi khong} */}
        {props.checked && <View style={styles.verticalLine}></View>}

        <Text style={styles.task}>{props.text}</Text>
      </View>
      <Icon
        name="trash-2"
        size={30}
        color="#900"
        style={{ marginLeft: "auto" }}
        onPress={props.delete}
      ></Icon>
    </View>
  );
};
export default Task;
const styles = StyleSheet.create({
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
