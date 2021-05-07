import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/Chart.scss";

const Chart = (props) => {
  const [options] = useState({
    series: [
      {
        name: "Patients 2019",
        data: [
          props.data.data.ChartYaxis[0],
          props.data.data.ChartYaxis[1],
          props.data.data.ChartYaxis[2],
          props.data.data.ChartYaxis[3],
          props.data.data.ChartYaxis[4],
          props.data.data.ChartYaxis[5],
          props.data.data.ChartYaxis[6],
          props.data.data.ChartYaxis[7],
          props.data.data.ChartYaxis[8],
          props.data.data.ChartYaxis[9],
          props.data.data.ChartYaxis[10],
          props.data.data.ChartYaxis[11],
          props.data.data.ChartYaxis[12],
          props.data.data.ChartYaxis[13],
        ],
      },
      {
        name: "Patients 2020",
        data: [
          props.data.data.ChartYaxis2[0],
          props.data.data.ChartYaxis2[1],
          props.data.data.ChartYaxis2[2],
          props.data.data.ChartYaxis2[3],
          props.data.data.ChartYaxis2[4],
          props.data.data.ChartYaxis2[5],
          props.data.data.ChartYaxis2[6],
          props.data.data.ChartYaxis2[7],
          props.data.data.ChartYaxis2[8],
          props.data.data.ChartYaxis2[9],
          props.data.data.ChartYaxis2[10],
          props.data.data.ChartYaxis2[11],
          props.data.data.ChartYaxis2[12],
          props.data.data.ChartYaxis2[13],
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
        toolbar: {
          show: false,
        },
        fontFamily: "Lato, Helvetica, sans-serif",
        foreColor: "#CACCCF",
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: true,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },

      dataLabels: {
        enabled: false,
      },

      colors: ["#EFAD0A", "#336CFB"],
      stroke: {
        curve: "smooth",
        width: 2,
        show: true,
        dashArray: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.2,
          inverseColors: false,
          opacityFrom: [0, 0.3],
          opacityTo: [0, 0.3],
          stops: [0, 90, 100],
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
        tooltip: {
          enabled: false,
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
        axisBorder: {
          show: true,
          height: 2,
          offsetY: -1,
        },
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
        offsetX: 10,
        offsetY: 20,
        style: {
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "Lato",
          color: "#25282B",
        },
      },
      responsive: [
        {
          breakpoint: 550,
          options: {
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 5,
            },
          },
        },
      ],
    },
  });
  return (
    <section className="big-chart">
      <div>
        <ReactApexChart
          options={options.options}
          series={options.series}
          height={350}
          width="100%"
          type="area"
        />
      </div>
    </section>
  );
};

export default Chart;
