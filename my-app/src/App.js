import { useState } from "react";
import "./App.css";
import Student from "./Student";

function App() {
  const [name, setName] = useState("Hello World");
  return (
    <div className="App">
      <Student
        name={name}
        Email="vinod@gmail.com"
        other={{ id: 10, city: "Kalyan" }}
      />
      <button
        onClick={() => {
          setName("Hello India");
        }}
      >
        Update{" "}
      </button>
    </div>
  );
}

export default App;
