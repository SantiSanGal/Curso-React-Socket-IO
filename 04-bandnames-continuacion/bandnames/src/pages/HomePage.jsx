import { useContext, useState } from "react"
import { BandAdd } from "../components/BandAdd"
import { BandList } from "../components/BandList"
import { SocketContext } from "../context/SocketContext";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data";
import PieChart from "../components/PieChart";
import { BarChart } from "../components/BarChart";

Chart.register(CategoryScale);

function HomePage() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const { online } = useContext(SocketContext)

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {
            online
              ? <span className="text-success"> Online</span>
              : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>
      <h1>BandNames</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
