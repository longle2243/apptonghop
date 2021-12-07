import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleLogin}>Register page</Text>
      <TextInput style={styles.textInput} placeholder="Họ tên" />
      <TextInput style={styles.textInput} placeholder="Địa chỉ email" />
      <TextInput style={styles.textInput} placeholder="Mật khẩu" />
      <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu" />
      <Button
        title="Đăng ký"
        backgroundColor="blue"
        onPress={() => alert('Đăng ký thành công')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleLogin: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    marginBottom: 30,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 300,
  },
});
export default LotsOfStyles;
