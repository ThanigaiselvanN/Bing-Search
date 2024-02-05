import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddLocation from "./components/AddLocation";
import Location from "./components/Location";
import LocationsList from "./components/LocationsList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/locations" className="navbar-brand">
          Bing Search
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/locations"} className="nav-link">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/locations"]} component={LocationsList} />
          <Route exact path="/add" component={AddLocation} />
          <Route path="/location/:id" component={Location} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
