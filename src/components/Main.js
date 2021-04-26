import React from "react";
import Search from "./Search";
import "../styles/Main.scss";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <Cards />
    </div>
  );
};

export default Main;
