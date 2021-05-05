import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/LittleCharts.scss";
const LittleCharts = () => {
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
        data: [
          {
            x: "06-25-2020 GMT",
            y: 57000,
          },
          {
            x: "07-01-2020 GMT",
            y: 45000,
          },
          {
            x: "07-08-2020 GMT",
            y: 79000,
          },
          {
            x: "07-16-2020 GMT",
            y: 37000,
          },
          {
            x: "07-24-2020 GMT",
            y: 62000,
          },
          {
            x: "07-31-2020 GMT",
            y: 42000,
          },
        ],
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
  });
  const [chart2] = useState({
    chart: {
      height: 380,
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
        data: [
          {
            x: "07-25-2020 GMT",
            y: 62000,
          },
          {
            x: "07-26-2020 GMT",
            y: 38000,
          },
          {
            x: "07-27-2020 GMT",
            y: 59000,
          },
          {
            x: "07-28-2020 GMT",
            y: 41000,
          },
          {
            x: "07-29-2020 GMT",
            y: 78000,
          },
          {
            x: "07-30-2020 GMT",
            y: 19000,
          },

          {
            x: "07-31-2020 GMT",
            y: 52000,
          },
        ],
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
      intersect: true,
      shared: false,
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
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LittleCharts;