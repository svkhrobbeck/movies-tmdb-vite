// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import {
  elIndexLoader,
  elMoviesWrapper,
  elPagination,
} from "./modules/elements";
import { getSearchParams, switchLoader } from "./modules/helpers";
import { renderMovies } from "./modules/render";
import getMovies from "./modules/request";
import { renderPagination } from "./modules/pagination";
import { PGN_TEXTS } from "./modules/constants";

// code body
const query = getSearchParams("query");
const page = +getSearchParams("page") || 1;
const paramsSearch = { query, page };
const url = `/search.html?query=${query}&`;

const fetches = async () => {
  const { total_pages, results } = await getMovies(
    "/search/movie",
    paramsSearch
  );

  switchLoader(true, elIndexLoader);
  renderMovies(results, elMoviesWrapper);

  renderPagination(page, total_pages, elPagination, "page", PGN_TEXTS, url);
  switchLoader(false, elIndexLoader);
};

fetches();
