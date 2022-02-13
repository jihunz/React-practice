import React from 'react';

function App() {

  const onSubmit = () => {
    alert("submitted");
  };

  return (
    <div className="App">
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
