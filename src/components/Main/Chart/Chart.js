import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bigChartData } from "../../../redux/actions/actions";

const Chart = () => {
  const BigChart = useSelector((state) => state.bigChartDataReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(bigChartData(res.data.Chart)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [options] = useState({
    series: [
      {
        name: "Patients 2019",
        data: BigChart.ChartYaxis,
      },
      {
        name: "Patients 2020",
        data: BigChart.ChartYaxis2,
      },
    ],

    options: {
      xaxis: {
        type: "category",
        categories: BigChart.ChartXaxis,
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
