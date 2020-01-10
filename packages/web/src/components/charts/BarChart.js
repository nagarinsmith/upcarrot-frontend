import React, { Component } from "react";
import {
  VictoryBar,
  VictoryGroup,
  VictoryTheme,
  VictoryChart,
  VictoryLegend
} from "victory";

export const BarChart = ({ children }) => (
  <VictoryChart
    width={400}
    height={500}
    theme={VictoryTheme.material}
    animate={{ duration: 1000 }}
    domain={{ y: [1, 10] }}
  >
    <VictoryLegend
      x={70}
      y={10}
      orientation="horizontal"
      gutter={20}
      style={{ border: { stroke: "black" } }}
      colorScale={["#B6EE56", "#44f804", "#FFA33F", "#92CD28", "#F78914"]}
      data={[
        { name: "Personal", labels: { fill: "#B6EE56" } },
        { name: "Group", labels: { fill: "#44f804" } },
        { name: "Maintenance", labels: { fill: "#FFA33F" } }
      ]}
    />
    <VictoryGroup
      vertical
      offset={20}
      style={{ data: { width: 15 } }}
      colorScale={["#B6EE56", "#44f804", "#FFA33F", "#92CD28", "#F78914"]}
    >
      <VictoryBar
        data={[
          { x: "January", y: 9 },
          { x: "February", y: 8 },
          { x: "March", y: 3 },
          { x: "May", y: 5 }
        ]}
      />
      <VictoryBar
        data={[
          { x: "January", y: 5 },
          { x: "February", y: 4 },
          { x: "March", y: 7 },
          { x: "May", y: 8 }
        ]}
      />
      <VictoryBar
        data={[
          { x: "January", y: 8 },
          { x: "February", y: 6 },
          { x: "March", y: 10 },
          { x: "May", y: 6 }
        ]}
      />
    </VictoryGroup>
  </VictoryChart>
);
