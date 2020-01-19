import React, { Component } from "react";
import {
  VictoryChart,
  VictoryStack,
  VictoryArea,
  VictoryTheme,
  VictoryLegend
} from "victory";
import * as moment from "moment";
import { TYPES } from "src/modules/borrowed/expenseConstants";

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
  OTHER: "#BFF287"
};

export const AreaChart = ({ expenses }) => {
  const getData = value => {
    const startDate = moment()
      .startOf("month")
      .subtract(value, "months");
    const endDate = moment()
      .endOf("month")
      .subtract(value, "months");

    const justExpenses = (expenses || []).filter(
      item => item.category !== "OWED" && item.category !== "BORROWED"
    );
    const dates = (justExpenses || []).filter(
      item =>
        moment(item.date).isAfter(startDate) &&
        moment(item.date).isSameOrBefore(endDate)
    );

    return [
      ...Object.entries(TYPES)
        .filter(([, item]) => item !== "OWED" && item !== "BORROWED")
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

  return (
    <VictoryChart
      height={500}
      animate={{ duration: 1000 }}
      theme={{
        ...VictoryTheme.grayscale,
        axis: {
          style: {
            tickLabels: {
              // this changed the color of my numbers to white
              fill: "white"
            }
          }
        }
      }}
      style={{ labels: { fill: "white" } }}
    >
      <VictoryLegend
        x={10}
        y={0}
        orientation="horizontal"
        gutter={30}
        style={{ border: { stroke: "black" } }}
        colorScale={["#81BEF1", "#AD8BF2", "#BFF287", "#EB5972", "#6FF2C5"]}
        data={[
          { name: "BILLS", labels: { fill: "#81BEF1" } },
          { name: "FOOD", labels: { fill: "#AD8BF2" } },
          { name: "OTHER", labels: { fill: "#BFF287" } },
          { name: "RENT", labels: { fill: "#EB5972" } },
          { name: "SHOPPING", labels: { fill: "#6FF2C5" } }
        ]}
      />

      <VictoryStack>
        {invData.map((category, k) => (
          <VictoryArea
            name={`area-${k}`}
            style={{
              labels: { fontSize: 15, fill: category[0].color },
              data: { fill: category[0].color }
            }}
            data={category.reverse()}
          />
        ))}
        {/* <VictoryArea
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
        />*/}
      </VictoryStack>
    </VictoryChart>
  );
};
