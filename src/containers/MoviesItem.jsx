import React, { useState, useEffect } from 'react';

import { ListItem } from './style.js';

const MoviesItem = ({ movie }) => {
  const generatePosterUrl = filePath => {
    return `https://image.tmdb.org/t/p/w500${filePath}`;
  };
  return (
    <ListItem>
      {movie.title}
      <img src={generatePosterUrl(movie.poster_path)} alt={movie.title} />
      {movie.overview}
    </ListItem>
  );
};

export default MoviesItem;
