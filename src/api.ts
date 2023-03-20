const API_KEY = "9a3037cf1839c50b07a1db2cf57a5bf7";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetSearch {
  page: number;
  results: SearchResult[];
  total_pages: number;
  total_results: number;
}
export interface SearchResult {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
}

export async function getMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getLatest() {
  const response = await fetch(`${BASE_PATH}/movie/latest?api_key=${API_KEY}`);
  return await response.json();
}

export async function getTopRated() {
  const response = await fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getUpComming() {
  const response = await fetch(
    `${BASE_PATH}/movie//upcoming?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getSearchMovie(keyword: string) {
  const response = await fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}`
  );
  return await response.json();
}

export async function getSearchTv(keyword: string) {
  const response = await fetch(
    `${BASE_PATH}/search/Tv?api_key=${API_KEY}&query=${keyword}`
  );
  return await response.json();
}

export async function getTvLatest() {
  const response = await fetch(`${BASE_PATH}/tv/latest?api_key=${API_KEY}`);
  return await response.json();
}

export async function getAiring_today() {
  const response = await fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getPopular() {
  const response = await fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`);
  return await response.json();
}

export async function getTvTopRated() {
  const response = await fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}`);
  return await response.json();
}
