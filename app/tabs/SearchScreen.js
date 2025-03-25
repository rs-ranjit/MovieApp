import { ActivityIndicator, Image, View, Text, FlatList } from "react-native";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import useFetch from "../../services/useFetch";
import { fetchMovies } from "../../services/api";
import React, { useState, useEffect } from "react";
import { updateSearchCount } from "../../services/appwrite";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies(searchQuery), false);

  // useEffect(() => {
  //   const timeoutId = setTimeout(async () => {
  //     if (searchQuery.trim()) {
  //       await loadMovies(); // Load movies when query is not empty
  //     } else {
  //       reset(); // Reset the results if query is empty
  //     }
  //   }, 500);

  //   return () => clearTimeout(timeoutId);
  // }, [searchQuery]);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (movies?.length > 0 && movies?.[0]) {
      updateSearchCount(searchQuery, movies[0]);
    }
  }, [movies]);

  return (
    <View className="flex-1 bg-primary">
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} movie_id={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-ful flex-row justify-center mt-0 items-center">
              <Image
                source={require("/home/rahul/Documents/movieApp/assets/icon.webp")}
                className="w-12 h-10 mt-0 mb-5 mx-auto"
              />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search movies ..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>
            {movieLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {movieError && (
              <Text className="text-red-500 px-5 my-3">
                Error: {movieError.message}
              </Text>
            )}
            {!movieLoading &&
              !movieError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  search result for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !movieLoading && !movieError ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim()
                  ? "No Movies Found ..."
                  : "Search for a movie ..."}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default SearchScreen;
