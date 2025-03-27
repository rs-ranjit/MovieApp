import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SavedScreen = () => {
  return (
    <View className="bg-primary flex-1 justify-center items-center">
      <Ionicons name="bookmark" size={50} color="white" />
    </View>
  );
};

export default SavedScreen;
