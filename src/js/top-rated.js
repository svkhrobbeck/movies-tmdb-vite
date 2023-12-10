// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

// elements
import * as els from "./modules/elements";
// constants
import { PGN_TEXTS } from "./modules/constants";
// methods
import { renderMovies } from "./modules/render";
import { getMovies, getSearchParams, switchLoader } from "./modules/helpers";
import { renderPagination } from "./modules/pagination";

// code body
const page = +getSearchParams("page") || 1;
const url = "/top-rated.html?";

const fetches = async () => {
  switchLoader(true, els.elIndexLoader);

  const { results, total_pages } = await getMovies("/movie/top_rated", {
    page,
  });
  renderMovies(results, els.elTopRatedMovies);

  renderPagination(page, total_pages, els.elPagination, "page", PGN_TEXTS, url);
  switchLoader(false, els.elIndexLoader);
};

fetches();
