import React, { Component } from "react";
import {
  VictoryGroup,
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
  VictoryVoronoiContainer
} from "victory";

export const VoronoiChart = ({ children }) => (
  <VictoryChart
    height={400}
    width={400}
    containerComponent={<VictoryVoronoiContainer />}
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
      color="#B6EE56"
      labels={({ datum }) => `expenses: ${datum.y}`}
      labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
      data={[
        { x: "January", y: 3 },
        { x: "February", y: 7 },
        { x: "March", y: 3 },
        { x: "May", y: 0 },
        { x: "April", y: 1 },
        { x: "June", y: 2 },
        { x: "July", y: 5 }
      ]}
    >
      <VictoryLine />
      <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
    </VictoryGroup>
    <VictoryGroup
      color= "#44f804"
      labels={({ datum }) => `expenses: ${datum.y}`}
      labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
      data={[
        { x: "January", y: 3 },
        { x: "February", y: 1 },
        { x: "March", y: 4 },
        { x: "May", y: 3 },
        { x: "April", y: 5 },
        { x: "June", y: 6 },
        { x: "July", y: 7 }
      ]}
    >
      <VictoryLine />
      <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
    </VictoryGroup>
    <VictoryGroup
      color="#FFA33F"
      labels={({ datum }) => `expenses: ${datum.y}`}
      labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
      data={[
        { x: "January", y: 10 },
        { x: "February", y: 5 },
        { x: "March", y: 6 },
        { x: "May", y: 9 },
        { x: "April", y: 2 },
        { x: "June", y: 8 },
        { x: "July", y: 8 }
      ]}
    >
      <VictoryLine />
      <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
    </VictoryGroup>
  </VictoryChart>
);
