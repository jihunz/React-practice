import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([
    { title: "madmax", year: 2021},
    { title: "madmax2", year: 2024},
    { title: "madmax3", year: 2026},
    { title: "madmax4", year: 2030}
  ]);

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}></Movie>
    )
  });

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);
  };

  return(
    <div className='App'>
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  )
}

export default App;
