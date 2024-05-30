import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://via.placeholder.com/200x300';

const Movie = ({ movie, onViewDetails }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie" onClick={() => onViewDetails(movie.imdbID)}>
      <img src={poster} alt={`The movie titled: ${movie.Title}`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;