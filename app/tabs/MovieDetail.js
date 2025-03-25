import {
  Text,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import useFetch from "../../services/useFetch";
import React, { use } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { fetchMoviesDetails } from "../../services/api";
import { Ionicons } from "@expo/vector-icons";

const MovieInfo = ({ label, value }) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
};

const MovieDetail = () => {
  const navigation = useNavigation();
  const handleBackNavigation = () => {
    navigation.navigate("Home");
  };
  const route = useRoute();
  const { movieId } = route.params;
  const { data: movie, loading } = useFetch(() => fetchMoviesDetails(movieId));

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        className="mt-10 self-center"
      />
    );
  }

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Ionicons name="star" size={12} color="yellow" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieInfo label="OverView" value={movie?.overview} />
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join("-") || "N/A"}
          />
          <View className="flex-row justify-between  w-1/2 ">
            <MovieInfo
              label="Budget"
              value={`$${movie?.budget / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round(movie?.revenue / 1_000_000)} million `}
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join("-") || "N/A"
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center z-50 justify-center"
        onPress={handleBackNavigation}
      >
        <Ionicons name="arrow-back" size={25} color="white" />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetail;
