import React, { Component } from "react";
import {
  VictoryGroup,
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTheme
} from "victory";
import { TYPES } from "src/modules/borrowed/expenseConstants";
import moment from "moment";

function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
    return a.map(function(r) {
      return r[c];
    });
  });
}

const categoryColors = {
  BILLS: "#81BEF1",
  RENT: "#EB5972",
  FOOD: "#AD8BF2",
  SHOPPING: "#6FF2C5",
  OTHERS: "#BFF287"
};

export const VoronoiChart = ({ borrows }) => {
  console.log(borrows);
  const getData = value => {
    const startDate = moment()
      .startOf("month")
      .subtract(value, "months");
    const endDate = moment()
      .endOf("month")
      .subtract(value, "months");

    const justExpenses = (borrows || []).filter(
      item => item.category === "OWED" || item.category === "BORROWED"
    );
    const dates = (justExpenses || []).filter(
      item =>
        moment(item.date).isAfter(startDate) &&
        moment(item.date).isSameOrBefore(endDate)
    );

    return [
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
            x: endDate.format("MMMM"),
            // label: value === 0 ? item : "",
            y,
            color: categoryColors[item]
          };
        })
    ];
  };

  const MONTHS = [0, 1, 2, 3, 4];

  const data = MONTHS.map(k => getData(k));
  const invData = transpose(data);

  console.log(invData);

  return (
    <VictoryChart
      height={400}
      width={400}
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
      containerComponent={<VictoryVoronoiContainer />}
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
        color="#f8a814"
        labels={({ datum }) => `expenses: ${datum.y}`}
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={invData[0].reverse()}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      <VictoryGroup
        color="#44f804"
        labels={({ datum }) => `expenses: ${datum.y}`}
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={invData[1].reverse()}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      {/* <VictoryGroup
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
    </VictoryGroup> */}
    </VictoryChart>
  );
};
