import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenresPending,
  fetchGenresSuccess,
  fetchGenresError
} from "./actions";

function fetchMovies(query = '', page = 1, genre = '', dateOrder = 'desc') {
  let url = '';

  if (query !== '') {
    url = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=${page}&language=en-US&query=${query}&api_key=6563b97fda57eb1e67c17820ade05783`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${page}&sort_by=release_date.${dateOrder}&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=6563b97fda57eb1e67c17820ade05783`
  }

  return dispatch => {
    dispatch(fetchMoviesPending());
    fetch(
      url
    )
      .then(res => res.json())
      .then(res => {

        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMoviesSuccess(res));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      });
  };
}

function fetchGenres() {
  debugger
  return dispatch => {
    dispatch(fetchGenresPending());
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=6563b97fda57eb1e67c17820ade05783`
    )
      .then(res => res.json())
      .then(res => {

        if (res.error) {
          throw res.error;
        }
        dispatch(fetchGenresSuccess(res.genres));
        return res.genres;
      })
      .catch(error => {
        dispatch(fetchGenresError(error));
      });
  };
}


export { fetchMovies, fetchGenres };
