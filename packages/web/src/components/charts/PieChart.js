import React, { Component } from "react";
import {
  VictoryPie,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip
} from "victory";

export const PieChart = ({ children }) => (
  <svg viewBox="-60 -120 800 800">
    <VictoryPie
      standalone={false}
      colorScale={["#92CD28", "#B6EE56", "#FFA33F", "#F78914"]}
      padAngle={({ datum }) => datum.y}
      style={{ labels: { fontSize: 25, fill: "white" } }}
      // // name of the labels appears in the middle of the circle
      // labels={({ datum }) => `# ${datum.y}`}
      // labelComponent={
      //   <VictoryTooltip
      //     x={300}
      //     y={400}
      //     orientation="top"
      //     pointerLength={0}
      //     cornerRadius={100}
      //     flyoutWidth={200}
      //     flyoutHeight={200}
      //     flyoutStyle={{ fill: "#44f804" }}
      //   />
      //}
      labelRadius={170}
      innerRadius={150}
      width={600}
      height={600}
      data={[
        { x: "January", y: 3, label: "personal" },
        { x: "January", y: 4, label: "group" },
        { x: "January", y: 5, label: "maintenance" }
      ]}
    />
    {/*<VictoryLabel
      textAnchor="middle"
      style={{ fontSize: 50, fill: "white"}}
      x={300} y={300}
      text="Ceva!"
      */}
    />
  </svg>
);
