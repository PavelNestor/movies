import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_GENRES_PENDING,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  CLEAR_STATE
} from "./actions";

const initialState = {
  error: null,
  genres: '',
  movies: [],
  pending: false,
  total_pages: 0,
  total_results: 0
};

export const moviesReducer = (state = initialState, action) => {
  console.log('moviesReducer => state ', state);
  console.log('moviesReducer => action ', action);
  
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_MOVIES_SUCCESS:
      console.log('action.results', action.movies);
      
      return {
        ...state,
        pending: false,
        movies: [ ...state.movies, ...action.movies],
        totalPages: action.total_pages,
        currentPage: action.currentPage
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case FETCH_GENRES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        pending: false,
        genres: action.genres
      };
    case FETCH_GENRES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case CLEAR_STATE:
      return {
        ...initialState,
        genres: [...state.genres]
      };
    default:
      return state;
  }
};


// export const getMoviesPending = state => state.moviesReducer.pending;
// export const getMoviesError = state => state.moviesReducer.error;
