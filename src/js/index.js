import "bootstrap/dist/css/bootstrap.css";
import "../scss/main.scss";

import { PARAMS } from "./modules/constants";
import { renderMovies } from "./modules/render";
import { getMovies } from "./modules/request";

getMovies("/movie/upcoming", PARAMS)
  .then(data => {
    renderMovies(data.results, document.querySelector("[data-upcoming]"));
  })
  .catch(err => console.log(err));
