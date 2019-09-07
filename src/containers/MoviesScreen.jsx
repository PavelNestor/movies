import React from 'react';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies, fetchGenres } from '../store/movies/fetchMovies';
import { getMoviesError, getMovies, getMoviesPending } from '../store/movies/reducer';

// import LoadingSpinner from "./LoadingSpinner";
import MovieList from './MovieList';
import SearchPanel from './SearchPanel';

const initialState = {
  query: '',
  genre: ''
};

const MovieScreen = ({
  fetchMovies,
  fetchGenres,
  totalPages,
  currentPage,
  movies,
  error,
  pending,
  genres
}) => {
  const [searchValue, setSearchValue] = React.useState(initialState);
  // const [genres, setGenres] = React.useState('');

  React.useEffect(() => {
    fetchGenres();
  }, []);

  const onHandleSearch = event => {
    const { name, value } = event.currentTarget;

    setSearchValue({ ...searchValue, query: value });
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    console.log('searchValue --------------', searchValue);

    fetchMovies(searchValue.query, 1, searchValue.genre);
  };

  const onHandleSelectGenre = event => {
    const { name, value } = event.currentTarget;
    setSearchValue({ ...searchValue, genre: value });

    // fetchMovies(searchValue);
  };

  const onHandleFetchMovies = page => {
    fetchMovies(searchValue, page);
  };

  return (
    <div className="movie-list-wrapper">
      {error && <span className="movie-list-error">{error}</span>}

      <SearchPanel
        handleSubmit={onHandleSubmit}
        handleSearch={onHandleSearch}
        handleSelectGenre={onHandleSelectGenre}
        genres={genres}
      />

      <div>
        {movies && movies.length ? (
          <MovieList
            movies={movies}
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
      fetchGenres: fetchGenres
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieScreen);
