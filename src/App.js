import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count, j])

  useEffect(() => {
    console.log("first rendering");
  }, [])

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      useEffect
      <button onClick={increment}>Click</button>
      <button onClick={() => setJ(j + 1)}>Click2</button>
    </div>
  );
}

export default App;
