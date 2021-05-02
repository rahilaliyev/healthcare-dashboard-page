import React from "react";
import "../styles/App.scss";
import Sidebar from "./Sidebar";
import Main from "./Main";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
