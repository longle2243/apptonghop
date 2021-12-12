import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";
import { auth, signOut, ref, child, get, database } from "../firebase";
import { IconButton } from "../components";
export const HomeScreen = ({ navigation }) => {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  // const dbRef = ref(database);
  // let name;
  // get(child(dbRef, `users/${auth.currentUser.uid}`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       name = snapshot.val().username;
  //       console.log(name);
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {auth.currentUser?.email}!</Text>
        <IconButton
          name="logout"
          size={24}
          color="#fff"
          onPress={handleSignout}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>Forum</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>Friend</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text
              style={styles.title}
              onPress={() => {
                navigation.navigate("Chat");
              }}
            >
              Chat
            </Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>TodoList</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>Quotes</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>...</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e93b81",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },

  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    margin: 20,
    borderRadius: 20,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33ccff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
