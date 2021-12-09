import React,{useState} from 'react';
import { StyleSheet, Button, View, TextInput, Text, SafeAreaView} from 'react-native';

export default function App () {
  const [username,setusername]=useState("");
  const [password, setpassword] = useState("");  
  const xulydangnhap=()=>{
    alert(" username: "+username+" password: "+password);
  };

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.view}>
      <Text style={styles.text}>Log In</Text>
      <TextInput style={styles.input} onChangeText={(username)=>setusername(username)} placeholder="Username"/>
      <TextInput style={styles.input} onChangeText={(password)=>setpassword(password)} placeholder="Password"/>
      <Button style={styles.button} onPress={()=>{xulydangnhap()}} title="Log In"/>
    </View>
  </SafeAreaView>
  );
}

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