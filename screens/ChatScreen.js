import React, { useState, useLayoutEffect, useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "@firebase/auth";
import { auth, database } from "../firebase";
export const ChatScreen = ({ navigation }) => {
  const [message, setMessage] = useState([]);

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <Text>Logout</Text>
        </TouchableOpacity>;
      },
    });
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createAt", "desc"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      setMessage(
        QuerySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createAt: doc.data().createAt,
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, [navigation]);

  const onSend = useCallback((message = []) => {
    setMessage((previousMessages) =>
      GiftedChat.append(previousMessages, message)
    );
    const { _id, createAt, text, user } = message[0];

    addDoc(collection(database, "chats"), {
      _id,
      createAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={message}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth.currentUser?.email,
        avatar: "http://i.pravatar.cc/300",
      }}
    />
  );
};
