import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

function App() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "madmax", year: 2021},
    { title: "madmax2", year: 2024},
    { title: "madmax3", year: 2026},
    { title: "madmax4", year: 2030}
  ]);

  useEffect(() => {
    console.log("render");
  })

  const renderMovies = movies.map(movies => {
    return (
      <Movie movie={movies} key={movies.title}></Movie>
    )
  });

  const add = (event) => {
    event.preventDefault();

    setMovies([...movies, {
      title: title,
      year: year
    }]);
  };

  return(
    <div className='App'>
      <h1>Movie list</h1>
      <form onSubmit={add}>
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <input
          type="text"
          value={year}
          placeholder="개봉년도"
          onChange={e => setYear(e.target.value)}
        />
        <br/>
        <button type='submit'>영화 추가</button>
      </form>
      {renderMovies}
    </div>
  )
}

export default App;
