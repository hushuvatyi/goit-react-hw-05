import axios from "axios";
import { API_PATH, ACCESS_KEY } from "./refs";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(API_PATH.trend, {});
  return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "?");
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?");
  return response.data;
};

export const fetchMovieReview = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?");
  return response.data;
};
