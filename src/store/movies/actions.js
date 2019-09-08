export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_GENRES_PENDING = 'FETCH_GENRES_PENDING';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR';
export const CLEAR_STATE = 'CLEAR_STATE';

export function fetchMoviesPending() {
  return {
    type: FETCH_MOVIES_PENDING
  }
}

export function fetchMoviesSuccess(movies) {
  return {
      type: FETCH_MOVIES_SUCCESS,
      total_pages: movies.total_pages,
      movies: movies.results,
      currentPage: movies.page,
      posterPath: movies.poster_path,
  }
}

export function fetchMoviesError(error) {
  return {
      type: FETCH_MOVIES_ERROR,
      error: error
  }
}

export function fetchGenresPending() {
  return {
    type: FETCH_GENRES_PENDING
  }
}

export function fetchGenresSuccess(genres) {
  
  return {
      type: FETCH_GENRES_SUCCESS,
      genres: genres
  }
}

export function fetchGenresError(error) {
  return {
      type: FETCH_GENRES_ERROR,
      error: error
  }
}

export function clearStateSuccess() {
  return {
      type: CLEAR_STATE
  }
}
