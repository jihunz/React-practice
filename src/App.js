import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName] = useState("클릭");
  const clickBtn = () => {
    setButtonName("using click()")
  }

  return(
    <div className='App'>
      <h1>Jihun</h1>
      <Counter click="click1"/>
      <Counter click={buttonName}/>
      <Counter />
      <button onClick={clickBtn}>Click</button>
    </div>
  )
}

export default App;
