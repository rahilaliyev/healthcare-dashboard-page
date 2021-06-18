import React, { useEffect } from "react";
import Search from "./Search";
import "../styles/Main.scss";
import Cards from "./Cards";
import Chart from "./Chart";
import LittleCharts from "./LittleCharts";
import Table from "./Table";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/actions/actions";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allDataReducer);
  useEffect(() => {
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <section className="main">
      <Search />
      {data.data ? <Cards data={data} /> : ""}
      {data.data ? <Chart data={data} /> : ""}
      {data.data ? <LittleCharts data={data} /> : ""}
      {data.data ? <Table data={data} /> : ""}
    </section>
  );
};

export default Main;
