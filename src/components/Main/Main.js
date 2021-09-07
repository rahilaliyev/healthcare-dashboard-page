import React, { Suspense, lazy } from "react";
import Search from "./Search/Search";
import "./Main.scss";
import Cards from "./Cards/Cards";
import LittleCharts from "./LittleCharts/LittleCharts";
import Table from "./Table/Table";
import Loading from "../Loading/Loading";

const Chart = lazy(() => import("./Chart/Chart"));

const Main = () => {
  return (
    <section className="main">
      <Suspense fallback={<Loading />}>
        <Search />
        <Cards />
        <Chart />
        <LittleCharts />
        <Table />
      </Suspense>
    </section>
  );
};

export default Main;
