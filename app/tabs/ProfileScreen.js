import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SavedScreen = () => {
  return (
    <View className="bg-primary flex-1 justify-center items-center">
      <TouchableOpacity style={styles.icons}>
        <Ionicons name="person" size={50} color="white" />
      </TouchableOpacity>
      <TextInput
        placeholder="UserName"
        placeholderTextColor="white"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="white"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => Alert.alert("Login failed!")}
        style={styles.buttons}
      >
        <Text style={styles.text}>Login In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedScreen;
const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 400,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#0f0d23",
    borderRadius: 10,
  },
  buttons: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    backgroundColor: "grey",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "#a5b5db",
  },
});
