import React from 'react';

import { MovieHeader, MovieTextInfo, Movie, MoviePoster, MovieWrapper, MovieText } from './style.js';

const MovieComponent = ({ genres, movie, isSelected }) => {

  const generatePosterUrl = filePath => {
    if (filePath === null) {
      return '/favicon.ico';
    }
    return `https://image.tmdb.org/t/p/w500${filePath}`;
  };

  return (
    <MovieWrapper className={isSelected ? 'activeMovie' : ''} src={generatePosterUrl(movie.poster_path)}>
      <Movie src={generatePosterUrl(movie.poster_path)}>
        <MovieHeader>{movie.title}</MovieHeader>
        <MoviePoster src={generatePosterUrl(movie.poster_path)} alt={movie.title} />
        <MovieTextInfo>Reliase Date: {movie.release_date}</MovieTextInfo>
        <MovieTextInfo>
          <ul>
            {movie.genre_ids.map(item => <li key={item}>{genres.find(genre => genre.id === item).name}</li>)}
          </ul>
        </MovieTextInfo>
        <MovieTextInfo>Rating: {movie.vote_average}</MovieTextInfo>
        <MovieText>{movie.overview}</MovieText>
      </Movie>
    </MovieWrapper>
  );
};
export default MovieComponent;
