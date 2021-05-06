import React from "react";
import "../styles/App.scss";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Appointment from "./Appointment";
import "../styles/Responsive.scss";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state.allDataReducer);
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
            <Appointment data={data.data} />
          </Route>
          <Redirect to={keylist.key === 0 ? "/dashboard" : "/appointments"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
