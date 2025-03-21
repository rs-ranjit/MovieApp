import { View, Image, ScrollView } from "react-native";
import React from "react";
import SearchBar from "./SearchScreen";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.push("Search"); // Correct way to navigate to the Search screen
  };

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={require("/home/rahul/Documents/movieApp/assets/icon.webp")}
          className="w-12 h-10 mt-0 mb-5 mx-auto"
        />

        <View className="flex-1 mt-5">
          <SearchBar
            onPress={handleSearchPress}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
