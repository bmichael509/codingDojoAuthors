import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router'
import AllAuthors from "./views/AllAuthors"
import NewAuthor from "./views/NewAuthor"
import NotFound from "./views/NotFound"
import OneAuthor from "./views/OneAuthor"
import EditAuthor from "./views/EditAuthor"

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <hr />
      <Router>
        <Redirect from="/" to="/authors" noThrow="true" />
        <NotFound default />
        <NewAuthor path="/authors/new" />
        <AllAuthors path="/authors" />
        <OneAuthor path="/authors/:id" />
        <EditAuthor path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;