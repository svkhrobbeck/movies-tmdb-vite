import "./axios";
import axios from "axios";

const getMovies = async (url, params = {}) => {
  const payload = await axios.get(url, params);
  return payload.data;
};

export default getMovies;
