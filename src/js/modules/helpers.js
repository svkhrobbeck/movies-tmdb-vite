import { elSearchedMovies } from "./elements";
import { renderMovies } from "./render";
import getMovies from "./request";
let timeoutId = 0;

export const setPageTitle = title => {
  document.title = title;
};

export const calcVoteAverage = rate => {
  if (rate >= 7) {
    return "green";
  } else if (rate < 7 && rate >= 6) {
    return "yellow";
  } else if (rate < 6 && rate >= 5) {
    return "orange";
  } else if (rate < 5) {
    return "crimson";
  }
};

export const switchLoader = (isLoading, elLoader) => {
  if (isLoading) {
    elLoader.classList.remove("loader--hidden");
  } else {
    elLoader.classList.add("loader--hidden");
  }
};

export const debounce = (callback, timeout = 400) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(callback, timeout);
};

// events
export const onSearchInput = async e => {
  const query = e.target.value;

  const data = await getMovies("/search/movie", { query, page: 1 });
  elSearchedMovies.previousElementSibling.classList.remove("d-none");

  if (!query) elSearchedMovies.previousElementSibling.classList.add("d-none");
  debounce(() => renderMovies(data.results, elSearchedMovies));
};

export const getSearchParams = param => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};
