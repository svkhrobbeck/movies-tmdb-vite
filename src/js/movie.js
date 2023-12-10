// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
// methods
import * as renders from "./modules/render";
import * as helpers from "./modules/helpers";
// elements
import * as els from "./modules/elements";

// code body
const movieId = helpers.getSearchParams("movieId");

const fetches = async () => {
  helpers.switchLoader(true, els.elIndexLoader);

  // 1
  const movie = await helpers.getMovies(`/movie/${movieId}`);
 

  renders.renderMovieBanner(movie, els.elBannerWrapper);
  renders.renderMovieDetails(movie, els.elDetailsWrapper);

  // 2
  const videos = await helpers.getMovies(`/movie/${movieId}/videos`);
  renders.renderMovieTrailers(videos.results, els.elTrailersBanner);

  // 3
  const casts = await helpers.getMovies(`/movie/${movieId}/credits`);
  renders.renderMovieCasts(casts.cast, els.elCasts);
  helpers.switchLoader(false, els.elIndexLoader);
};

fetches();
