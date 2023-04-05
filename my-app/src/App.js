import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(false);
  return (
    <div className="App">
      {data ? <h1>Hello</h1> : null}
      {/* <button onClick={() => setData(true)}>Show</button>
      <button onClick={() => setData(false)}>Hide</button> */}
      <button onClick={() => setData(!data)}>Toggle</button>
    </div>
  );
}

export default App;
