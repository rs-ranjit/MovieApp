import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ placeholder, onPress, value, onChangeText }) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Ionicons name="search" size={30} color="purple" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a5b5db"
        className="flex-1 ml-2 text-white"
      />
      <Text className="text-gray-500">Search</Text>
    </View>
  );
};

export default SearchBar;
