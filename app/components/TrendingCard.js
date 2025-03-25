import { Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TrendingCard = ({ movie_id, title, poster_url, release_date, index }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetail", { movieId: movie_id })}
      className="w-32 pl-5"
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_url}` }}
        className="w-32 h-48 rounded-lg"
        resizeMode="cover"
      />
      {title && (
        <Text className="text-sm font-bold mt-2 text-white" numberOfLines={1}>
          {title}
        </Text>
      )}
      {release_date && (
        <Text className="text-light-200 text-sm mt-1">
          {release_date.split("-")[0]}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TrendingCard;
