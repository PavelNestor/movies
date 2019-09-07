import React, { useState, useEffect } from 'react';

import { ListItem } from "./style.js";

const MoviesItem = (props) => {

const generatePosterUrl = filePath => {
  return `https://image.tmdb.org/t/p/w500${filePath}`;
}
  return (
    <ListItem>
      {props.movie.title}
      <img src={generatePosterUrl(props.movie.poster_path)} alt= {props.movie.title}/>
      {props.movie.overview}
    </ListItem>
  );
};

export default MoviesItem;