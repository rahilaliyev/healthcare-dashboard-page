import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./LittleCharts.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { littleChartData } from "../../../redux/actions/actions";

const LittleCharts = () => {
  const LittleChart = useSelector((state) => state.littleChartDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(littleChartData(res.data.LittleCharts)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [chart1] = useState({
    chart: {
      type: "line",
      background: "#fff",
      toolbar: {
        show: false,
      },
      fontFamily: "Lato, Helvetica, sans-serif",
      foreColor: "#A0A4A8",
    },
    stroke: {
      curve: "smooth",
      width: 3,
      show: true,
      dashArray: 0,
    },
    colors: ["#336CFB"],
    series: [
      {
        name: "Income in current month",
        data: LittleChart.LittleChartYaxis,
      },
      {
        name: "",
        data: [],
      },
    ],
    grid: {
      show: true,
      borderColor: "#D7DBDE",
      strokeDashArray: 5,
    },

    xaxis: {
      categories: LittleChart.LittleChartXaxis,
      type: "datetime",
      labels: {
        format: "d MMMM",
      },
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: true,
        height: 2,
        offsetY: -1,
      },
      crosshairs: {
        show: true,
        width: 1,
        opacity: 0.5,
        stroke: {
          color: "#A9C1FD",
          width: 1,
          dashArray: 5,
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100000,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
      },
    },

    markers: {
      size: 4,
      colors: "#A9C1FD",
    },
    title: {
      text: "$ 100 000",
      align: "left",
      margin: 10,
      offsetX: 10,
      offsetY: 20,
      style: {
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "Lato",
        color: "#25282B",
      },
    },

    legend: {
      show: true,
      fontSize: "12px",
      fontFamily: "Lato, Helvetica, Arial",
      fontWeight: 700,
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "#A0A4A8",
      },
      offsetY: -30,

      markers: {
        width: 0,
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      style: {
        fontSize: "16px",
        fontFamily: "Lato",
      },
      y: {
        show: true,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          "<span>" +
          "$" +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
    },
    responsive: [
      {
        breakpoint: 350,
        options: {
          legend: {
            offsetY: 10,
            position: "bottom",
            horizontalAlign: "center",
          },
          title: {
            style: {
              fontSize: "15px",
            },
          },
          yaxis: { tickAmount: 2 },
        },
      },
    ],
  });
  const [chart2] = useState({
    chart: {
      type: "line",

      background: "#fff",
      toolbar: {
        show: false,
      },
      fontFamily: "Lato, Helvetica, sans-serif",
      foreColor: "#A0A4A8",
    },
    stroke: {
      curve: "smooth",
      width: 3,
      show: true,
      dashArray: 0,
    },
    colors: ["#FAC032"],
    series: [
      {
        name: "Income in current week",
        data: LittleChart.LittleChartYaxis2,
      },
      {
        name: "",
        data: [],
      },
    ],
    grid: {
      show: true,
      borderColor: "#D7DBDE",
      strokeDashArray: 5,
    },

    xaxis: {
      type: "datetime",
      categories: LittleChart.LittleChartXaxis2,
      labels: {
        format: "d MMMM",
      },
      tooltip: {
        enabled: true,
        shared: true,
      },
      axisBorder: {
        show: true,
        height: 2,
        offsetY: -1,
      },
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100000,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      style: {
        fontSize: "16px",
        fontFamily: "Lato",
      },
      y: {
        show: true,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          "<span>" +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
    },
    markers: {
      size: 4,
      colors: "#FCDF98",
    },
    title: {
      text: "$ 25,000",
      align: "left",
      margin: 10,
      offsetX: 10,
      offsetY: 20,
      style: {
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "Lato",
        color: "#25282B",
      },
    },

    legend: {
      show: true,
      fontSize: "12px",
      fontFamily: "Lato, Helvetica, Arial",
      fontWeight: 700,
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "#A0A4A8",
      },
      offsetY: -30,

      markers: {
        width: 0,
      },
    },
    responsive: [
      {
        breakpoint: 350,
        options: {
          legend: {
            offsetY: 10,
            position: "bottom",
            horizontalAlign: "center",
          },
          title: {
            style: {
              fontSize: "15px",
            },
          },
          yaxis: { tickAmount: 2 },
        },
      },
    ],
  });
  return (
    <div>
      <div className="little-charts-container">
        <div className="little-chart">
          <ReactApexChart
            options={chart1}
            series={chart1.series}
            style={{ width: "100%" }}
          />
        </div>
        <div className="little-chart">
          <ReactApexChart
            options={chart2}
            series={chart2.series}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LittleCharts;
