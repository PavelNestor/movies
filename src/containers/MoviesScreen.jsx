import React from 'react';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies, fetchGenres, clearState } from '../store/movies/fetchMovies';
import { getMoviesError, getMovies, getMoviesPending } from '../store/movies/reducer';

// import LoadingSpinner from "./LoadingSpinner";
import MovieList from './MovieList';
import SearchPanel from './SearchPanel';

const initialState = {
  title: '',
  genre: '',
  dateOrder: '',
  ratingOrder: ''
};

const MovieScreen = ({
  fetchMovies,
  fetchGenres,
  totalPages,
  currentPage,
  clearState,
  movies,
  error,
  pending,
  genres
}) => {
  const [searchValue, setSearchValue] = React.useState(initialState);
  const [isFetching, setIsFetching] = React.useState(pending);
  const [moviesLsit, setMoviesList] = React.useState(movies);

  React.useEffect(() => {
    fetchGenres();
  }, []);

  React.useEffect(() => {
    setMoviesList([...movies]);
  }, [movies]);

  const onHandleSubmit = (event, query) => {
    event.preventDefault();
    clearState();
    setSearchValue(query);
    fetchMovies(query.title, 1, query.genre, query.sortBy);
    // setMoviesList(movies);
  };

  const onHandleFetchMovies = page => {
    fetchMovies(searchValue.title, page, searchValue.genre, searchValue.sortBy);
  };

  return (
    <div className="movie-list-wrapper">
      {error && <span className="movie-list-error">{error}</span>}

      <SearchPanel handleSubmit={onHandleSubmit} genres={genres} />

      <div>
        {moviesLsit && moviesLsit.length ? (
          <MovieList
            movies={moviesLsit}
            handleFetchMovies={onHandleFetchMovies}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        ) : (
          'Enter your query'
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.moviesReducer.error,
    movies: state.moviesReducer.movies,
    pending: state.moviesReducer.pending,
    totalPages: state.moviesReducer.totalPages,
    currentPage: state.moviesReducer.currentPage,
    genres: state.moviesReducer.genres
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMovies,
      fetchGenres: fetchGenres,
      clearState: clearState
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieScreen);
