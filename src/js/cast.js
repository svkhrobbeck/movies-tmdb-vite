// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

// elements
import { elIndexLoader } from "./modules/elements";
// methods
import { getMovies, getSearchParams, switchLoader } from "./modules/helpers";
import { renderCastPage } from "./modules/render";

// code body
const castId = getSearchParams("cast");

const fetches = async () => {
  switchLoader(true, elIndexLoader);
  const castData = await getMovies(`person/${castId}`);

  renderCastPage(castData);
  switchLoader(false, elIndexLoader);
};

fetches();
