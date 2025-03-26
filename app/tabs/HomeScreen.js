import { View, Image, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../services/useFetch";
import SearchBar from "../components/SearchBar";
import { fetchMovies } from "../../services/api";
import MovieCard from "../components/MovieCard";
import { getTrendingMovies } from "../../services/appwrite";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("SearchTab");
  };

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovies(""));

  if (movieLoading || trendingLoading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (movieError || trendingError) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Text className="text-white">
          Error: {movieError?.message || trendingError?.message}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 bg-primary px-5"
      ListHeaderComponent={
        <View>
          <Image
            source={require("/home/rahul/Documents/movieApp/assets/icon.webp")}
            className="w-12 h-10 mt-0 mb-5 mx-auto"
          />
          <SearchBar
            onPress={handleSearchPress}
            placeholder="Search for a movie"
          />
          {trendingMovies && (
            <View className="mt-5">
              <Text className="text-lg text-white font-bold">
                Trending Movies
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                data={trendingMovies}
                renderItem={({ item }) => <TrendingCard {...item} />}
                keyExtractor={(item) => item.movie_id.toString()}
                className="mt-3"
              />
            </View>
          )}
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
        </View>
      }
      data={movies}
      renderItem={({ item }) => <MovieCard {...item} movie_id={item.id} />}
      numColumns={3}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{
        justifyContent: "flex-start",
        gap: 20,
        paddingRight: 5,
        marginBottom: 10,
      }}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
};

export default Home;
