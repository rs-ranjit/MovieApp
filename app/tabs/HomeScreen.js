import {
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import SearchBar from "./SearchScreen";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../services/useFetch";
import { fetchMovies } from "../../services/api";

const Home = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.push("Search"); // Correct way to navigate to the Search screen
  };

  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovies("")); // Fetch popular movies by passing empty string for query

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

        {movieLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : movieError ? (
          <Text>Error: {movieError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={handleSearchPress}
              placeholder="Search for a movie"
            />
          </View>
        )}
      </ScrollView>

      <View>
        <Text className="text-lg text-white font-bold mt-5 mb-3">
          Latest Movies
        </Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          nestedScrollEnabled={true} // Enables nested scrolling for FlatList inside ScrollView
          renderItem={({ item }) => (
            <View className="flex-1 m-1 bg-gray-800 p-3 rounded-lg">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // Display movie poster image
                }}
                style={{ width: 100, height: 150 }}
                className="rounded-lg"
              />
              <Text className="text-white text-sm mt-2">{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
