import React, { Component } from "react";
import {
  VictoryChart,
  VictoryStack,
  VictoryArea,
  VictoryTheme,
  VictoryLegend
} from "victory";

export const AreaChart = ({ children }) => (
  <VictoryChart
    height={500}
    animate={{ duration: 1000 }}
    events={[
      {
        childName: "all",
        target: "data",
        eventHandlers: {
          onMouseOver: () => {
            return [
              {
                childName: "area-1",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#F78914" })
                })
              },
              {
                childName: "area-2",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#92CD28" })
                })
              },
              {
                childName: "area-3",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#B6EE56" })
                })
              },
              {
                childName: "area-4",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#44f804" })
                })
              }
            ];
          },
          onMouseOut: () => {
            return [
              {
                childName: "area-1",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#262626" })
                })
              },
              {
                childName: "area-2",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#404040" })
                })
              },
              {
                childName: "area-3",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#808080" })
                })
              },
              {
                childName: "area-4",
                target: "data",
                mutation: props => ({
                  style: Object.assign({}, props.style, { fill: "#44f804" })
                })
              }
            ];
          }
        }
      }
    ]}
  >
    <VictoryLegend
      x={70}
      y={10}
      orientation="horizontal"
      gutter={20}
      style={{ border: { stroke: "black" } }}
      colorScale={["#B6EE56", "#92CD28", "#FFA33F", "#92CD28", "#F78914"]}
      data={[
        { name: "Personal", labels: { fill: "#B6EE56" } },
        { name: "Group", labels: { fill: "#92CD28" } },
        { name: "Maintenance", labels: { fill: "#FFA33F" } }
      ]}
    />

    <VictoryStack>
      <VictoryArea
        name="area-1"
        style={{ labels: { fontSize: 15, fill: "white" } }}
        data={[
          { x: "January", y: 5, label: "personal" },
          { x: "March", y: 10 },
          { x: "April", y: 7 },
          { x: "May", y: 14 }
        ]}
      />

      <VictoryArea
        name="area-2"
        style={{ labels: { fontSize: 15, fill: "white" } }}
        data={[
          { x: "January", y: 10, label: "maintenance" },
          { x: "March", y: 5 },
          { x: "April", y: 3 },
          { x: "May", y: 5 }
        ]}
      />
      <VictoryArea
        name="area-3"
        style={{ labels: { fontSize: 15, fill: "white" } }}
        data={[
          { x: "January", y: 7, label: "group" },
          { x: "March", y: 2 },
          { x: "April", y: 6 },
          { x: "May", y: 7 }
        ]}
      />
    </VictoryStack>
  </VictoryChart>
);
