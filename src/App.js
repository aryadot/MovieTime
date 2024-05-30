import React, { useReducer, useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Movie from './movie';
import Search from './search';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b&type=movie&plot=full';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b&type=movie&plot=full`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error,
          });
        }
      });
  };

  const viewMovieDetails = (imdbID) => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b&plot=full`)
      .then((response) => response.json())
      .then((movieDetails) => {
        setSelectedMovie(movieDetails);
      });
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="MovieTime" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <div className="spinner"></div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : selectedMovie ? (
          <div className="movie-details">
            <h2>{selectedMovie.Title}</h2>
            <p>Year: {selectedMovie.Year}</p>
            <p>Rating: {selectedMovie.imdbRating}</p>
            <p>Plot: {selectedMovie.Plot}</p>
            <button onClick={closeMovieDetails}>Close</button>
          </div>
        ) : (
          movies.map((movie, index) => (
            <Movie
              key={`${index}-${movie.Title}`}
              movie={movie}
              onViewDetails={viewMovieDetails}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;