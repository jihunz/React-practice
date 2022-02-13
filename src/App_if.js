import React, { useState, useEffect } from 'react';

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => {
    setCondition(!condition);
  }

  useEffect(() => {
    console.log(condition);
  })

  const renderCon = condition ? "True" : "False"

  return(
    <div className='App'>
      <h1>Jihun</h1>
      <div>{renderCon}</div>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App;
