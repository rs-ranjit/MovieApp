import {
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
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

        {movieLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : movieError || trendingError ? (
          <Text>Error: {movieError?.message || trendingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={handleSearchPress}
              placeholder="Search for a movie"
            />

            {trendingMovies && (
              <View className="mt-19">
                <Text className="text-lg text-white font-bold">
                  Trending Movies{" "}
                </Text>
              </View>
            )}
          </View>
        )}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          className="mb-4 mt-3"
          data={trendingMovies}
          renderItem={({ item, index }) => (
            <TrendingCard {...item} index={index} />
          )}
          keyExtractor={(item) => item.movie_id.toString()}
        />
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
