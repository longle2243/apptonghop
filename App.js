import React from 'react';
import { StyleSheet, Button, View, TextInput, Text, SafeAreaView} from 'react-native';

const xulydangnhap=()=>{
  alert("Chuyen den trang dang nhap");
};
//onChangeText={(value)=>{this.setState({username:value})}}
const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.view}>
      <Text style={styles.text}>Log In</Text>
      <TextInput style={styles.input}  placeholder="Username"/>
      <TextInput style={styles.input}  placeholder="Password"/>
      <Button style={styles.button} onPress={()=>{xulydangnhap()}} title="Log In"/>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    height: '100%', 
  },
  view: {
   margin: 'auto',
   textAlign: 'center',
   backgroundColor: 'white',
   padding: '10%',
  },
  text: {
    color: '#33CCFF',
    padding: '10%',
    fontSize: 40,
  },
  input:{
    textAlign: 'center',
    padding: '10%',
  },
  button: {

  },
});

export default App;