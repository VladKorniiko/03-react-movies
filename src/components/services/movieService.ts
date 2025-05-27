import axios from "axios";
import { type Movie } from "../../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(BASE_URL, config);
  return response.data.results;
}
