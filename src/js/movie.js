// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
// methods
import getMovies from "./modules/request";
import * as renders from "./modules/render";
import { setPageTitle } from "./modules/helpers";
// elements
import * as els from "./modules/elements";

// code body
const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId") || 453545;

getMovies(`/movie/${movieId}`).then(data => {
  setPageTitle(data.original_title || "Movie");

  renders.renderMovieBanner(data, els.elBannerWrapper);
  renders.renderMovieDetails(data, els.elDetailsWrapper);
});

getMovies(`/movie/${movieId}/videos`)
  .then(data => renders.renderMovieTrailers(data.results, els.elTrailersBanner))
  .catch(err => console.error(err));
