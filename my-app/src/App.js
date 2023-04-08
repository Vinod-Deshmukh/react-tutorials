import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [terms, setTerms] = useState(false);
  function handleData(e) {
    console.log(name, movie, terms);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Form Handaling</h1>
      <form onSubmit={handleData}>
        <input
          type="text"
          placeholder="Name"
          // value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <select onChange={(e) => setMovie(e.target.value)}>
          <option>Movie</option>
          <option>Shawshank Redemaption</option>
          <option>The Godfather</option>
          <option>Iron Man</option>
          <option>The Avengers: Infinity War</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setTerms(e.target.checked)}
        ></input>
        <span>Terms and Condition</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
