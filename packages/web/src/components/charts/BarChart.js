import React, { Component } from "react";
import {
  VictoryBar,
  VictoryGroup,
  VictoryTheme,
  VictoryChart,
  VictoryLegend
} from "victory";
import { TYPES } from "src/modules/borrowed/expenseConstants";
import moment from "moment";

export const BarChart = ({ borrows }) => {
  const startDate = moment().startOf("month");
  const endDate = moment().endOf("month");
  const justExpenses = (borrows || []).filter(
    item => item.category === "OWED" || item.category === "BORROWED"
  );
  const dates = (justExpenses || []).filter(
    item =>
      moment(item.date).isAfter(startDate) &&
      moment(item.date).isSameOrBefore(endDate)
  );

  console.log(borrows);

  const aux = [
    ...Object.entries(TYPES)
      .filter(([, item]) => item === "OWED" || item === "BORROWED")
      .sort()
      .map(([, item]) => {
        const y = dates
          .filter(d => d.category === item)
          .map(item => item.total)
          .reduce((a, b) => {
            return a + b;
          }, 0);
        return {
          x: item,
          label: `${y}$`,
          y
        };
      })
  ];

  console.log(aux);

  return (
    <VictoryChart
      width={400}
      height={500}
      animate={{ duration: 1000 }}
      theme={{
        ...VictoryTheme.material,
        axis: {
          ...VictoryTheme.material.axis,
          style: {
            ...VictoryTheme.material.axis.style,
            tickLabels: {
              // this changed the color of my numbers to white
              fill: "white"
            }
          }
        },
        bar: { style: { labels: { fill: "white", marginBottom: "10px" } } }
      }}
    >
      <VictoryLegend
        x={70}
        y={10}
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: "black" } }}
        colorScale={["#44f804", "#FFA33F", "#92CD28", "#F78914"]}
        data={[
          { name: "OWED", labels: { fill: "#44f804" } },
          { name: "BORROWED", labels: { fill: "#FFA33F" } }
        ]}
      />
      <VictoryGroup
        vertical
        domainPadding={{ x: [20, -20], y: 5 }}
        offset={20}
        style={{ data: { width: 15 } }}
        colorScale={["#44f804", "#FFA33F", "#92CD28", "#F78914"]}
      >
        <VictoryBar data={[aux[1]]} />
        <VictoryBar data={[aux[0]]} />
        {/* {/* <VictoryBar
        data={[
          { x: "January", y: 5 },
          { x: "February", y: 4 },
          { x: "March", y: 7 },
          { x: "May", y: 8 }
        ]}
      /> */}
        {/* <VictoryBar
      //   data={[
      //     { x: "January", y: 8 },
      //     { x: "February", y: 6 },
      //     { x: "March", y: 10 },
      //     { x: "May", y: 6 }
      //   ]}
      // /> */}
      </VictoryGroup>
    </VictoryChart>
  );
};
