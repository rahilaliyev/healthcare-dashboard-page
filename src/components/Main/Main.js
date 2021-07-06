import React from "react";
import Search from "./Search/Search";
import "./Main.scss";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import LittleCharts from "./LittleCharts/LittleCharts";
import Table from "./Table/Table";

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
