import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

function App() {
  const movies = [
    { title: "madmax", year: 2021},
    { title: "madmax2", year: 2024},
    { title: "madmax3", year: 2026},
    { title: "madmax4", year: 2030},
  ];

  const renderMovies = movies.map(movies => {
    return (
      <Movie movie={movies} key={movies.title}></Movie>
    )
  });

  return(
    <div className='App'>
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  )
}

export default App;
