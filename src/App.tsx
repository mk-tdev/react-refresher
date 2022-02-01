import React from "react";
import { Provider } from "react-redux";
import "./App.css";
// import UserSearch from "./class-components/UserSearch";
// import { Parent } from "./components/Parent";
// import UserList from "./components/UserList";
import NpmPackageSearcher from "./npm-package-searcher/NpmPackageSearcher";
import { store } from "./store";

// const users = [
//   { name: "Tobias", age: 22 },
//   { name: "Larsen", age: 23 },
//   { name: "Linda", age: 24 },
//   { name: "Lars", age: 25 },
// ];

function App() {
  return (
    <Provider store={store}>
      <div>
        <NpmPackageSearcher />

        {/* <header className="App-header">Hi There</header>

      <Parent />

      <UserList />

      <UserSearch users={users} /> */}
      </div>
    </Provider>
  );
}

export default App;
