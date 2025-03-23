import {
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../services/useFetch";
import { fetchMovies } from "../../services/api";
import MovieCard from "../components/MovieCard";

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
              onPress={() => navigation.push("Search")}
              placeholder="Search for a movie"
            />
          </View>
        )}
        <View>
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            className="mt-2 pb-32"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
