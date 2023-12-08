// styles
import "bootstrap/dist/css/bootstrap.css";
import "../scss/main.scss";

// constants
import { PARAMS } from "./modules/constants";
// methods
import { renderMovies } from "./modules/render";
import getMovies from "./modules/request";
import { switchLoader } from "./modules/helpers";
// elements
import * as els from "./modules/elements";

// code body
getMovies("/movie/upcoming", PARAMS)
  .then(data => {
    switchLoader(true, els.elIndexLoader);
    renderMovies(data.results, els.elUpcomingMovies);
    switchLoader(false, els.elIndexLoader);
  })
  .catch(err => {
    console.error(err);
    switchLoader(false, els.elIndexLoader);
  });

// getMovies("/movie/popular", PARAMS)
//   .then(data => renderMovies(data.results, els.elPopularMovies))
//   .catch(err => console.error(err));

// getMovies("/movie/top_rated", PARAMS)
//   .then(data => renderMovies(data.results, els.elTopRatedMovies))
//   .catch(err => console.error(err));

console.dir(els.elIndexLoader);

