import React from 'react';

import { CardHeader, CardText, Movie, MoviePoster, MovieWrapper } from './style.js';

const MovieComponent = ({ movie, scroll }) => {
  const generatePosterUrl = filePath => {
    if (filePath === null) {
      return '/favicon.ico';
    }
    return `https://image.tmdb.org/t/p/w500${filePath}`;
  };

  return (
    <MovieWrapper  scroll={scroll}>
      <Movie src={generatePosterUrl(movie.poster_path)}>
        <CardHeader>{movie.title}</CardHeader>
        <MoviePoster src={generatePosterUrl(movie.poster_path)} alt={movie.title} />
        <p>{movie.overview}</p>
      </Movie>
    </MovieWrapper>
  );
};
export default MovieComponent;
