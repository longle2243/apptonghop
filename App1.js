import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
      
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView>
      <TextInput
        style={styles.input}
       
        placeholder="nhap ten"
      />
      <TextInput
        style={styles.input} 
      
        placeholder="nhap mat khau"
        
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
  input: {
    height: 15,
    with: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
