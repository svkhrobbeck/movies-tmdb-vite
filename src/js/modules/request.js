import "./axios";
import axios from "axios";

export const getMovies = async (url, params = {}) => {
  const { data } = await axios.get(url, params);
  return data;
};

