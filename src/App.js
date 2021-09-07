import React, { Suspense, lazy } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Appointment from "./components/Appointment/Appointment";
import "./styles/Responsive.scss";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";

const Main = lazy(() => import("./components/Main/Main"));

const App = () => {
  const keylist = useSelector((state) => state.changePageReducer);

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
