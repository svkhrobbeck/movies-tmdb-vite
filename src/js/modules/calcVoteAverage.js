const calcVoteAverage = rate => {
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

export default calcVoteAverage;
