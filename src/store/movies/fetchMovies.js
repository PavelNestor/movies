import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError
} from "./actions";

function fetchMovies(query) {
  return dispatch => {
    dispatch(fetchMoviesPending());
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=<<6563b97fda57eb1e67c17820ade05783>>&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMoviesSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      });
  };
}

export default fetchMovies;
