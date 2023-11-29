import moment from "moment";
import { API_IMG_URL, API_BG_URL } from "./constants";


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

export const renderMovies = (movies = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  movies.forEach(movie => {
    html += `
  <div class="position-relative movie-card">
    <img class="movie-card__img" src=${API_IMG_URL + movie.poster_path} alt=${
      movie.original_title
    }>
    <div class="position-absolute movie-card__badge movie-card__badge--${calcVoteAverage(
      movie.vote_average
    )}">${movie.vote_average.toFixed(1)}</div>
    <h2 class="movie-card__title">${movie.original_title}</h2>
    <a class="movie-card__link" href="/movie.html?movieId=${movie.id}"></a>
  </div>
  `;
  });

  elWrapper.innerHTML = html;
};

export const renderMovieBanner = (movie = {}, elWrapper, slider = false) => {
  elWrapper.innerHTML = `
    <div class="movie-banner">
        <img src="${API_BG_URL + movie.backdrop_path}"/>
        <div class="movie-banner__content">
        <h2>${movie.original_title}</h2>
        <p>${movie.overview}</p>
        ${
          slider
            ? `<a href="/movie.html?movieId=${movie.id}">READ MORE</a>`
            : ""
        }
        </div>
    </div>
`;
};

export const renderMovieDetails = (movie = {}, elWrapper) => {
  elWrapper.innerHTML = `
  <span>budget: ${movie.budget.toLocaleString()}$</span>
  <br/>
  <span>release date: ${moment(movie.release_date).format("MMM Do YY")}</span>
  `;
};

export const renderMovieTrailers = (trailers = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  trailers.forEach(trailer => {
    html += `
          <li
            class="splide__slide"
          >
          <iframe src="https://www.youtube.com/embed/${trailer.key}"></iframe>
          </li>
    `;
  });

  elWrapper.innerHTML = html;
};


