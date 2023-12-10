// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
// methods
import getMovies from "./modules/request";
import * as renders from "./modules/render";
import { getSearchParams, setPageTitle, switchLoader } from "./modules/helpers";
// elements
import * as els from "./modules/elements";

// code body
const movieId = getSearchParams("movieId");

const fetches = async () => {
  switchLoader(true, els.elIndexLoader);

  // 1
  const movie = await getMovies(`/movie/${movieId}`);
  setPageTitle(movie.original_title || "Movie");

  renders.renderMovieBanner(movie, els.elBannerWrapper);
  renders.renderMovieDetails(movie, els.elDetailsWrapper);

  // 2
  const videos = await getMovies(`/movie/${movieId}/videos`);
  renders.renderMovieTrailers(videos.results, els.elTrailersBanner);

  // 3
  const casts = await getMovies(`/movie/${movieId}/credits`);
  renders.renderMovieCasts(casts.cast, els.elCasts);
  switchLoader(false, els.elIndexLoader);
};

fetches();
