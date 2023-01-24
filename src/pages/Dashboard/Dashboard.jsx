import React from "react";
import { Chart } from "react-google-charts";
export default function Dashboard() {
  return (
    <div className="w-[90%] mx-auto">
      <h2>Dashboard</h2>
      <Chart
        chartType="Bar"
        data={[
          ["Age", "Weight"],
          [12, 23],
          [23, 34],
        ]}
        className="w-[500px] h-[400px]"
      />
    </div>
  );
}
