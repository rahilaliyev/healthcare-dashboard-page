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

  console.log(data);
  return (
    <div className="main">
      <Search />
      <Cards />
      <Chart />
      <LittleCharts />
      {data ? <Table data={data} /> : ""}
    </div>
  );
};

export default Main;
