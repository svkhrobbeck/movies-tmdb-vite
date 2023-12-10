// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import * as els from "./modules/elements";
import { getMovies, getSearchParams, switchLoader } from "./modules/helpers";
import { renderMovies } from "./modules/render";
import { renderPagination } from "./modules/pagination";
import { PGN_TEXTS } from "./modules/constants";

// code body
const query = getSearchParams("query");
const page = +getSearchParams("page") || 1;

const url = `/search.html?query=${query}&`;

const fetches = async () => {
  switchLoader(true, els.elIndexLoader);

  const { total_pages, results } = await getMovies("/search/movie", {
    query,
    page,
  });

  renderMovies(results, elMoviesWrapper);

  renderPagination(page, total_pages, els.elPagination, "page", PGN_TEXTS, url);
  switchLoader(false, els.elIndexLoader);
};

fetches();
