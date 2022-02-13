import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("Jang");

  const onSubmit = () => {
    alert("submitted success");
  };

  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      onSubmit();
    }
  };

  // let text = "jihun";

  const updateText = () => {
    // text = "jang";
    setText("Jihun");
    console.log(text);
  };

  return (
    <><div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>

    <br></br>
    <br></br>

    <span>{text}</span>
    <button onClick={updateText}>Update</button></>
  );
}

export default App;
