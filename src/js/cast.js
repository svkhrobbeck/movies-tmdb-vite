// styles
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { getSearchParams } from "./modules/helpers";
import getMovies from "./modules/request";
import { renderCastPage } from "./modules/render";

// code body
const castId = getSearchParams("cast");
console.log(castId);

const fetches = async () => {
  // 1
  const castData = await getMovies(`person/${castId}`);
  renderCastPage(castData);
};

fetches();


