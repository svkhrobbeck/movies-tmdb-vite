// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import { elIndexLoader, elMoviesWrapper } from "./modules/elements";
import { getSearchParams, switchLoader } from "./modules/helpers";
import { renderMovies } from "./modules/render";
import getMovies from "./modules/request";

// code body
const query = getSearchParams("query");

const fetches = async () => {
  const data = await getMovies("/search/movie", { query });
  console.log(data);

  switchLoader(true, elIndexLoader);
  renderMovies(data.results, elMoviesWrapper);
  switchLoader(false, elIndexLoader);
};

fetches();
