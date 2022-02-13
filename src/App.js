import React, { useState, useEffect } from 'react';

function App() {
  const movies = [
    { title: "madmax", year: 2021},
    { title: "madmax2", year: 2024},
    { title: "madmax3", year: 2026},
    { title: "madmax4", year: 2030},
  ];

  const renderMovies = movies.map(movie => {
    return (
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div>
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
