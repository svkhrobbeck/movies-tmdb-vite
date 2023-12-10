import moment from "moment";
import { API_IMG_URL, API_BG_URL, NOT_FOUND_IMG } from "./constants";
import { calcVoteAverage, setPageTitle } from "./helpers";
import { elCastBD, elCastBio, elCastImg, elCastName } from "./elements";

export const renderMovies = (movies = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  movies.forEach(movie => {
    const img = movie.poster_path
      ? API_IMG_URL + movie.poster_path
      : NOT_FOUND_IMG;

    html += `
  <div class="position-relative movie-card">
    <img class="movie-card__img" src=${img} alt=${movie.original_title}>
    <div class="position-absolute movie-card__badge movie-card__badge--${calcVoteAverage(
      movie.vote_average
    )}">${movie.vote_average.toFixed(1)}</div>
    <h2 class="movie-card__title">${movie.original_title}</h2>
    <a class="movie-card__link" href="/movie.html?movieId=${movie.id}"></a>
  </div>
  `;
  });

  if (!movies.length) {
    html = `
    <h2 class="text-center">movies not found</h2>
    `;
  }

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
  setPageTitle(movie.original_title || "Movie");

  elWrapper.innerHTML = `
  <span>budget: ${movie.budget.toLocaleString()}$</span>
  <br/>
  <span>release date: ${moment(movie.release_date).format("MMM Do YY")}</span>
  `;
};

export const renderMovieCasts = (casts = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  casts.forEach(cast => {
    html += `
    <a class="card" href="cast.html?cast=${cast.id}">
      <img class="card-img-top" style="width:300px" src="${
        cast.profile_path ? API_IMG_URL + cast.profile_path : NOT_FOUND_IMG
      }"/>
      <div class="card-footer">
      <h3 class="card-title">${cast.original_name}</h3>
        <p class="card-text">${cast.character}</p>
      </div>
    </a>
    `;
  });

  elWrapper.innerHTML = html;
};

export const renderMovieTrailers = (trailers = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  trailers.forEach(trailer => {
    html += `
          <li class="splide__slide">
            <iframe src="https://www.youtube.com/embed/${trailer.key}"></iframe>
          </li>
    `;
  });

  elWrapper.innerHTML = html;
};

export const renderCastPage = (cast = {}) => {
  setPageTitle(cast.name || "Cast");
  elCastName.textContent = cast.name;
  elCastBio.textContent = cast.biography;
  elCastBD.textContent = moment(cast.birthday).format("DD.MM.YYYY");
  elCastImg.src = cast.profile_path
    ? API_IMG_URL + cast.profile_path
    : NOT_FOUND_IMG;
};
