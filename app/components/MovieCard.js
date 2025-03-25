import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = ({
  movie_id,
  poster_path,
  title,
  vote_average,
  release_date,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetail", { movieId: movie_id })}
      className="w-[30%]"
    >
      <Image
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://placehold.co/600x400/1a1a1a/ffffff.png`,
        }}
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
      />

      <Text className="text-sm font-bold mt-2 text-white" numberOfLines={1}>
        {title}
      </Text>

      <View className="flex-row items-center justify-start gap-x-1">
        <Ionicons name="star" size={12} color="yellow" />
        <Text className="text-xs text-white font-bold uppercase">
          {Math.round(vote_average / 2)}
        </Text>
      </View>
      <Text className="text-light-200 text-sm mt-1">
        {release_date?.split("-")[0]}
      </Text>

      <View
        className="flex-row items-center
      justify-between"
      >
        {/* <Text className="text-xs font-medium text-light-300 uppercase">
          Movie
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
