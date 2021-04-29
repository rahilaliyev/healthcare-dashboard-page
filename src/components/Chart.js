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
        background: "#fff",
        toolbar: {
          show: false,
        },
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
        type: ["solid", "gradient"],
        opacity: [1, 0.5],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.4,
          opacityTo: 0.7,
          stops: [0, 100, 100, 100],
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
      legend: {
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
          width: 20,
          height: 2,
        },
        itemMargin: {
          horizontal: 30,
          vertical: 0,
        },
      },
      title: {
        text: "Hospital Survey ",
        align: "left",
        margin: 10,
        offsetX: 40,
        offsetY: 20,
        style: {
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "Lato",
          color: "#25282B",
        },
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
