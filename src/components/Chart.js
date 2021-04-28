import React, { useState } from "react";
import "../styles/Chart.scss";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [options] = useState({
    series: [
      {
        name: "Patients 2019",
        data: [
          null,
          50,
          80,
          125,
          100,
          160,
          110,
          155,
          152,
          121,
          123,
          56,
          85,
          null,
        ],
        type: "line",
      },
      {
        name: "Patients 2020",
        type: "area",
        data: [
          null,
          147,
          110,
          105,
          205,
          125,
          109,
          100,
          180,
          130,
          220,
          190,
          240,
          null,
        ],
      },
    ],

    options: {
      grid: {
        show: true,
        borderColor: "#D7DBDE",
        strokeDashArray: 5,
      },
      chart: {
        width: "100%",
        zoom: {
          enabled: false,
        },
        background: "#fff",
      },

      dataLabels: {
        enabled: false,
      },

      colors: ["#EFAD0A", "#336CFB"],
      stroke: {
        curve: "smooth",
        width: [4, 2],
        show: true,
        dashArray: 0,
      },
      fill: {
        type: "solid",
        opacity: [1, 0.5],
      },

      tooltip: {
        enabled: true,
        style: {
          fontSize: "16px",
          fontFamily: "Lato",
        },
        x: {
          show: false,
        },
      },

      xaxis: {
        type: "category",
        categories: [
          "",
          "2020-1",
          "2020-2",
          "2020-3",
          "2020-4",
          "2020-5",
          "2020-6",
          "2020-7",
          "2020-8",
          "2020-9",
          "2020-10",
          "2020-11",
          "2020-12",
          "",
        ],
      },
      yaxis: {
        tickAmount: 6,
        min: 0,
        max: 300,
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options.options}
          series={options.series}
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
