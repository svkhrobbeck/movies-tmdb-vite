import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import "./modules/axios";
import axios from "axios";
import upcomingMovies from "./modules/upcomingMovies";

const getUpcomingMovies = async () => {
  const { data } = await axios.get("/movie/upcoming", {
    params: {
      page: 2,
    },
  });
  upcomingMovies(data.results);
};

getUpcomingMovies();
