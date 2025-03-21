import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import SearchBar from "./SearchScreen";

const Home = () => {
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
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
