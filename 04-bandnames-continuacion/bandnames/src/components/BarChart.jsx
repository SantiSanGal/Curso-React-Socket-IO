// components/BarChart.js
import { SocketContext } from "../context/SocketContext";
import { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      console.log(bands);
      
    })
  }, [socket]);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};