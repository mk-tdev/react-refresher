import React from "react";
import "./App.css";
import UserSearch from "./class-components/UserSearch";
import { Parent } from "./components/Parent";
import UserList from "./components/UserList";

const users = [
  { name: "Tobias", age: 22 },
  { name: "Larsen", age: 23 },
  { name: "Linda", age: 24 },
  { name: "Lars", age: 25 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">Hi There</header>

      <Parent />

      <UserList />

      <UserSearch users={users} />
    </div>
  );
}

export default App;
