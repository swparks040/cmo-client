import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getPTObyCurrentUser } from "../managers/PTOManager";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Legend,
  Tooltip
);

export const PTOChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  const [PTO, setPTO] = useState([
    {
      id: 0,
      days_remaining: 0,
      total_days: 0,
      days_used: 0,
    },
  ]);

  useEffect(() => {
    getPTObyCurrentUser().then(setPTO);
  }, []);
  useEffect(() => {
    setChartData({
      labels: ["Days Remaining", "Days Used"],
      datasets: [
        {
          label: "PTO",
          data: [PTO[0].days_remaining, PTO[0].days_used],
          borderColor: "#01295f",
          backgroundColor: ["#36A2EB", "#01295f"],
          hoverBackgroundColor: ["#AAD897", "#790105"],
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "PTO Balance",
        },
      },
    });
  }, [PTO]);

  return (
    <>
      <div>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default PTOChart;
