import React from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Appointment from "./components/Appointment/Appointment";
import "./styles/Responsive.scss";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const keylist = useSelector((state) => state.changePageReducer);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <Main />
          </Route>
          <Route path="/appointments">
            <Appointment />
          </Route>
          <Redirect to={keylist.key === 0 ? "/dashboard" : "/appointments"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
