import React from 'react';

import useInfiniteScroll from './../utils/useInfiniteScroll';
import MoviesItem from './MoviesItem';

const MovieList = ({ movies, handleFetchMovies, currentPage, onHandleClickOnCard }) => {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      handleFetchMovies(currentPage + 1)
      setIsFetching(false);
    }, 1000);
  }

  return (
    <div>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <MoviesItem key={index} className="movie-list__item" movie={movie} handleClickOnCard={onHandleClickOnCard}/>
        ))}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </div>
  );
};

export default MovieList;
