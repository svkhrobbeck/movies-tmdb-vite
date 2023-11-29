import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { getMovies } from "./modules/request";
import {
  renderMovieBanner,
  renderMovieDetails,
  renderMovieTrailers,
} from "./modules/render";

const movieId =
  new URLSearchParams(window.location.search).get("movieId") || 453545;

getMovies(`/movie/${movieId}`).then(data => {
  document.title = data.original_title || "Movie";
  renderMovieBanner(data, document.querySelector("[data-wrapper]"));
  renderMovieDetails(data, document.querySelector("[data-details]"));
});

getMovies(`/movie/${movieId}/videos`).then(data => {
  renderMovieTrailers(data.results, document.querySelector("[data-trailers]"));
});
