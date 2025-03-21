import axios from "axios";

const api =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTA5ODFiYjkxNmNmOWJhODc5OTgzZGIwYjVhMjI1MiIsIm5iZiI6MTc0MjUzMjQzMi44MzcsInN1YiI6IjY3ZGNlZjUwMzM4ZTc3NzgzZmY1M2U2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADhYIxsOeB9KtfGlmmx82RAv2E3SQRzXTUd1aS83jrg";

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: api,
  HEADERS: {
    Accept: "application/json",
    Authorization: `Bearer ${api}`,
  },
};

/**
 * Fetch movies based on popularity or search query
 * @param {string} query - The movie name to search for (optional)
 * @returns {Promise<Array>} - List of movies
 */

export const fetchMovies = async (query = "") => {
  try {
    const endpoint = query ? "/search/movie" : "/discover/movie"; // Use search if query is provided

    const response = await axios.get(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
      params: {
        query: query || undefined, // Only include query if searching
        sort_by: query ? undefined : "popularity.desc", // Sorting only for discover
        api_key: TMDB_CONFIG.API_KEY,
      },
      headers: TMDB_CONFIG.HEADERS,
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};
