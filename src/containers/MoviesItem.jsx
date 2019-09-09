import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardText,
  CardImage,
  FooterWrapper
} from './style.js';

const MoviesItem = ({ movie, handleClickOnCard }) => {
  const generatePosterUrl = filePath => {
    if (filePath === null) {
      return '/favicon.ico';
    }
    return `https://image.tmdb.org/t/p/w500${filePath}`;
  };

  return (
    <Card onClick={event => handleClickOnCard(event, movie)}>
      <CardImage src={generatePosterUrl(movie.poster_path)}></CardImage>
      <CardContent>
        <CardHeader>{movie.title}</CardHeader>
        <CardText>{movie.overview}</CardText>
        <FooterWrapper>
          <CardFooter>{movie.release_date}</CardFooter>
          <CardFooter>popularity: {movie.popularity}</CardFooter>
          <CardFooter>voit: {movie.vote_average}</CardFooter>
        </FooterWrapper>
      </CardContent>
    </Card>
  );
};

export default MoviesItem;
