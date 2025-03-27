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
        <Text className="text-grey p-2">Login In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedScreen;
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 400,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
  },
  buttons: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#AB8BFF",
    borderColor: "white",
    borderWidth: 1,
    textAlign: "center",
    paddingLeft: 11,
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
});
