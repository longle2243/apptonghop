import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput,Button,Text } from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titleLogin}>log in</Text>
      <TextInput
        style={styles.input}
        placeholder="nhap ten"
      />
      <TextInput
        style={styles.input} 
        placeholder="nhap mat khau"
      />
      <Button
        title="Đăng nhập"
        backgroundColor="blue"
        onPress={() => alert('Đăng nhập thành công')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleLogin: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 30,
    with: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
