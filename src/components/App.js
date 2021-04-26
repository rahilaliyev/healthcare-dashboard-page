import React from "react";
import "../styles/App.scss";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
