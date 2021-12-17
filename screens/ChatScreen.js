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
  const [messages, setMessages] = useState([]);

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
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      setMessages(
        QuerySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth.currentUser?.email,
        avatar: "http://i.pravatar.cc/300",
      }}
      alignTop={true}
      scrollToBottom={true}
    />
  );
};
