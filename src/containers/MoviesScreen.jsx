import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, ReactReduxContext } from "react-redux";
import { bindActionCreators } from "redux";

import fetchMoviesAction from "../store/movies/fetchMovies";
import {
  getMoviesError,
  getMovies,
  getMoviesPending
} from "../store/movies/reducer";

// import LoadingSpinner from "./LoadingSpinner";
// import MovieList from "./MovieList";

import { Button, Input } from "./style.js";

const MovieScreen = ({ fetchMovies, movies, error, pending }) => {
  const [searchValue, setSearchValue] = React.useState("");

  console.log('MovieScreen-movies', movies);
  

  React.useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  const handleSearch = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget.name;
    setSearchValue(value);
  };

  return pending ? (
    <div>Loading</div>
  ) : (
    <div className="movie-list-wrapper">
      {error && <span className="movie-list-error">{error}</span>}
      {/* <MovieList movies={movies} /> */}
      <form onSubmit={handleSearch}>
        <Input type="text" name="name" />
        <Button type="submit">Search</Button>
      </form>

      <div>
        {movies && movies.length
          ? movies.map((item, index) => {
              console.log("item", item);

              return <div key={index}>{item.title}</div>;
            })
          : "Enter your query"}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.moviesReducer.error,
    movies: state.moviesReducer.movies,
    pending: state.moviesReducer.pending
  };
};

// const mapStateToProps = state => ({
//   error: getMoviesError(state),
//   movies: getMovies(state),
//   pending: getMoviesPending(state)
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieScreen);
