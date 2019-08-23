import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from "./actions";

const initialState = {
  pending: false,
  movies: [],
  error: null
};

export const moviesReducer = (state = initialState, action) => {
  console.log('moviesReducer => state ', state);
  console.log('moviesReducer => action ', action);
  console.log('moviesReducer => action.movies ', action.movies);
  
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.movies
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};


// export const getMoviesPending = state => state.moviesReducer.pending;
// export const getMoviesError = state => state.moviesReducer.error;
