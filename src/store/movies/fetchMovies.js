import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenresPending,
  fetchGenresSuccess,
  fetchGenresError,
  clearStateSuccess
} from "./actions";

function fetchMovies(query = '', page = 1, genre = '', sortBy = '&sort_by=release_date.desc', ratingOrder = '') {
  let url = '';

  if (query !== '') {
    url = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=${page}&language=en-US&query=${query}&sort_by=release_date.desc&api_key=6563b97fda57eb1e67c17820ade05783`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?page=${page}${genre}&include_adult=false${sortBy}&language=en-US&api_key=6563b97fda57eb1e67c17820ade05783`
  }

  console.log('URL',url);
  
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

function clearState() {
  return dispatch => dispatch(clearStateSuccess());
}


export { fetchMovies, fetchGenres, clearState };
