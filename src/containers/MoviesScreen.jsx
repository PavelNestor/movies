import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies, fetchGenres, clearState } from '../store/movies/fetchMovies';

import MovieList from './MovieList';
import SearchPanel from './SearchPanel';
import MovieComponent from './MovieComponent';

import { Col, PageContent, Row } from './style.js';

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
  const [moviesLsit, setMoviesList] = React.useState(movies);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  // const [isLoading, setIsLoading] = React.useState(false);

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
    setSelectedMovie(null);
    fetchMovies(query.title, 1, query.genre, query.sortBy);
  };

  const onHandleClickOnCard = (event, movie) => {
    event.preventDefault();
    setSelectedMovie({ ...movie });
  };

  const onHandleFetchMovies = page => {
    fetchMovies(searchValue.title, page, searchValue.genre, searchValue.sortBy);
  };

  return (
    <PageContent className={selectedMovie !== null ? 'addPadding' : ''}>
      {error && <span className="movie-list-error">{error}</span>}
      <Row>
        <SearchPanel handleSubmit={onHandleSubmit} genres={genres} />
        <Col>
          {moviesLsit && (
            <React.Fragment>
              <MovieList
                movies={moviesLsit}
                handleFetchMovies={onHandleFetchMovies}
                totalPages={totalPages}
                currentPage={currentPage}
                onHandleClickOnCard={onHandleClickOnCard}
              />

              {pending && (
                <div className="loader">
                  <div className="bar"></div>
                </div>
              )}
            </React.Fragment>
          )}

          {selectedMovie && (
            <MovieComponent
              movie={selectedMovie}
              isSelected={selectedMovie !== null}
              genres={genres}
            />
          )}
        </Col>
      </Row>
    </PageContent>
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
