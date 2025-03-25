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
    const searchQuery = query.trim(); // Trim query to avoid issues
    const endpoint = searchQuery ? "/search/movie" : "/discover/movie"; // Use search if query is provided

    const params = searchQuery
      ? { query: searchQuery, include_adult: false, language: "en-US", page: 1 }
      : { sort_by: "popularity.desc" };

    const response = await axios.get(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
      params,
      headers: TMDB_CONFIG.HEADERS,
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};

export const fetchMoviesDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`,
      {
        headers: TMDB_CONFIG.HEADERS,
      }
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
  }
};
