import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/LittleCharts.scss";
const LittleCharts = () => {
  const [chart1] = useState({
    chart: {
      height: 380,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Desktops",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 126],
      },
    ],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    markers: {
      size: 6,
    },
  });
  const [chart2] = useState({
    chart: {
      height: 380,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Desktops",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 126],
      },
    ],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    markers: {
      size: 6,
    },
  });
  return (
    <div>
      <div className="little-charts-container">
        <ReactApexChart
          options={chart1}
          series={chart1.series}
          height={350}
          width={500}
        />
        <ReactApexChart
          options={chart2}
          series={chart2.series}
          height={350}
          width={500}
        />
      </div>
    </div>
  );
};

export default LittleCharts;
