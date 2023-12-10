// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

// elements
import * as els from "./modules/elements";
// constants
import { PGN_TEXTS } from "./modules/constants";
// methods
import getMovies from "./modules/request";
import { renderMovies } from "./modules/render";
import { getSearchParams, switchLoader } from "./modules/helpers";
import { renderPagination } from "./modules/pagination";

// code body
const page = +getSearchParams("page") || 1;
const url = "/popular.html?";
const popularParams = { page };

const fetches = async () => {
  const { results, total_pages } = await getMovies(
    "/movie/popular",
    popularParams
  );

  switchLoader(true, els.elIndexLoader);
  renderMovies(results, els.elPopularMovies);

  renderPagination(page, total_pages, els.elPagination, "page", PGN_TEXTS, url);
  switchLoader(false, els.elIndexLoader);
};

fetches();
