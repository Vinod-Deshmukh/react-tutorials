import { useState } from "react";
export default function Profile() {
  const [loggedIn, setLoggedIn] = useState(39);
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Hello From User 1</h1>
      ) : loggedIn == 2 ? (
        <h2>Hello From User 2</h2>
      ) : (
        <h3>Hello From User 3</h3>
      )}
    </div>
  );
}
