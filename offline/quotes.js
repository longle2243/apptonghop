import React from "react";
import { View, Text, Button} from "react-native";
import { styles } from "../style/stylesheet";

export function Quotes({ navigation }) {
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