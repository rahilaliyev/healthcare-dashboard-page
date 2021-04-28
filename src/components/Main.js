import React from "react";
import Search from "./Search";
import "../styles/Main.scss";
import Cards from "./Cards";
import Chart from "./Chart";
import LittleCharts from "./LittleCharts";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <Cards />
      <Chart />
      <LittleCharts />
    </div>
  );
};

export default Main;
