import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  const [text, setText] = useState("");
  // callback handler
  function changeTextHandler(changedText) {
    console.log("user is typing ", changedText);
    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text);
    setText("")
  }
  function cancelHandler() {
    // hide the modal
    dismissModal();
    setText("");
  }
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={styles.image}
        />
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Type something"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title="Cancel" onPress={cancelHandler} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "30%",
    margin: 5,
  },
  buttonsContainer: { flexDirection: "row" },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 100, height: 100 },
});