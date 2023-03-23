import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../../app/darkModeSlice";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const mode = useSelector(toggleDarkMode);

  const data = {
    labels: [
      "May 12",
      "",
      "May 13",
      "",
      "May 14",
      "",
      "May 15",
      "",
      "May 17",
      "",
      "May 18",
      "",
    ],
    datasets: [
      {
        data: [8.9, 7.8, 7.9, 6.7, 8, 6, 5, 7.8, 5.8, 6],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value: any) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div>
      <div
        className={`py-5 rounded-lg ${
          mode ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-800"
        }`}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;
