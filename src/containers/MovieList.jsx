import React from 'react';

import useInfiniteScroll from './../utils/useInfiniteScroll';
import MoviesItem from './MoviesItem';

import { MoviesList } from './style.js';

const MovieList = ({ movies, handleFetchMovies, currentPage, onHandleClickOnCard }) => {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      handleFetchMovies(currentPage + 1)
      setIsFetching(false);
    }, 1000);
  }

  return (
    <>
      <MoviesList>
        {movies.map((movie, index) => (
          <MoviesItem key={index} className="movie-list__item" movie={movie} handleClickOnCard={onHandleClickOnCard}/>
        ))}
      </MoviesList>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default MovieList;
