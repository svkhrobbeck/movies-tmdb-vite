// styles
import "bootstrap/dist/css/bootstrap.css";
import "../scss/main.scss";

// methods
import { renderMovies, renderPagination } from "./modules/render";
import getMovies from "./modules/request";
import { getSearchParams, switchLoader } from "./modules/helpers";
// elements
import * as els from "./modules/elements";

// getMovies("/movie/popular", PARAMS)
//   .then(data => renderMovies(data.results, els.elPopularMovies))
//   .catch(err => console.error(err));

// getMovies("/movie/top_rated", PARAMS)
//   .then(data => renderMovies(data.results, els.elTopRatedMovies))
//   .catch(err => console.error(err));

// code body
const fetches = async () => {
  const currentPage = getSearchParams("page");
  const { results, page, total_pages, total_results } = await getMovies(
    "/movie/upcoming",
    { page: currentPage ? currentPage : 1 }
  );

  switchLoader(true, els.elIndexLoader);
  renderMovies(results, els.elUpcomingMovies);
  renderPagination(results, page, total_pages, total_results, els.elPagination);
  switchLoader(false, els.elIndexLoader);
};
fetches();

// els.elSearchForm.addEventListener("input", onSearchInput);
