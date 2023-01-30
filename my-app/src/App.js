import "./App.css";

function App() {
  let data = "Hello World";
  function click() {
    data = "Hello India";
    alert(data);
    // alert("Hey, you clicked me!");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => click()}>Click Me</button>
    </div>
  );
}

export default App;
