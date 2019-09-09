import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies, fetchGenres, clearState } from '../store/movies/fetchMovies';

// import LoadingSpinner from "./LoadingSpinner";
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
  const [selectedMovie, setselectedMovie] = React.useState(null);
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollPosition)
    return () => scrollPosition;
  });

  React.useEffect(() => {
    fetchGenres();
  }, []);

  React.useEffect(() => {
    setMoviesList([...movies]);
  }, [movies]);

  const scrollPosition = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setScroll(winScroll);
  };

  const onHandleSubmit = (event, query) => {
    event.preventDefault();
    clearState();
    setSearchValue(query);
    setselectedMovie(null);
    fetchMovies(query.title, 1, query.genre, query.sortBy);
  };

  const onHandleClickOnCard = (event, movie) => {
    event.preventDefault();
    setselectedMovie({...movie})
  };

  const onHandleFetchMovies = page => {
    fetchMovies(searchValue.title, page, searchValue.genre, searchValue.sortBy);
  };

  return (
    <PageContent>
      {error && <span className="movie-list-error">{error}</span>}
      <Row>
        <Col>
          <SearchPanel handleSubmit={onHandleSubmit} genres={genres} />
        </Col>
        <Col>
          <div>
            {moviesLsit &&
              <MovieList
                movies={moviesLsit}
                handleFetchMovies={onHandleFetchMovies}
                totalPages={totalPages}
                currentPage={currentPage}
                onHandleClickOnCard={onHandleClickOnCard}
              />
            }
          </div>
        </Col>
      </Row>
      <Row>
        {selectedMovie &&
          <MovieComponent movie={selectedMovie} scroll={scroll}/>
        }
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
