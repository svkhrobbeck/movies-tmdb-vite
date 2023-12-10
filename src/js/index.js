// styles
import "bootstrap/dist/css/bootstrap.css";
import "../scss/main.scss";

// methods
import { renderMovies } from "./modules/render";
import getMovies from "./modules/request";
import { getSearchParams, switchLoader } from "./modules/helpers";
// elements
import * as els from "./modules/elements";
import { renderPagination } from "./modules/pagination";
import { PGN_TEXTS } from "./modules/constants";

// code body
const page = +getSearchParams("page") || 1;
const upcomingParams = { page };

const fetches = async () => {
  const { results, total_pages } = await getMovies(
    "/movie/upcoming",
    upcomingParams
  );

  switchLoader(true, els.elIndexLoader);
  renderMovies(results, els.elUpcomingMovies);

  renderPagination(page, total_pages, els.elPagination, "page", PGN_TEXTS);
  switchLoader(false, els.elIndexLoader);
};
fetches();

// els.elSearchForm.addEventListener("input", onSearchInput);
