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
