import React from "react";
import Search from "./Search";
import "../styles/Main.scss";
import Cards from "./Cards";
import Chart from "./Chart";
import LittleCharts from "./LittleCharts";
import Table from "./Table";

const Main = () => {
  return (
    <section className="main">
      <Search />
      <Cards />
      <Chart />
      <LittleCharts />
      <Table />
    </section>
  );
};

export default Main;
