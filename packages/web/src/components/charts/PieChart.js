import React from "react";
import { VictoryPie, VictoryChart } from "victory";
import moment from "moment";
import { TYPES } from "src/modules/borrowed/expenseConstants";
import {
  faHamburger,
  faShoppingCart,
  faFileInvoice,
  faHome,
  faBoxOpen,
  faCalendarAlt,
  faDollarSign,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export const typeIcon = {
  [TYPES.food]: faHamburger,
  [TYPES.shopping]: faShoppingCart,
  [TYPES.bills]: faFileInvoice,
  [TYPES.rent]: faHome,
  [TYPES.others]: faBoxOpen
};

export const PieChart = ({ expenses }) => {
  const startDate = moment().startOf("month");
  const endDate = moment().endOf("month");
  const justExpenses = expenses.filter(
    item => item.category !== "OWED" && item.category !== "BORROWED"
  );
  const dates = justExpenses.filter(
    item =>
      moment(item.date).isAfter(startDate) &&
      moment(item.date).isSameOrBefore(endDate)
  );

  const aux = [
    expenses.length === 0
      ? { x: " ", y: 100, label: " " }
      : { x: " ", y: 0, label: " " },
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
          x: item,
          label: `${item}\n ${y}$`,
          y
        };
      })
  ];

  const defaultData = [
    { x: " ", y: 100, label: " " },
    { x: "BILLS", y: 0, label: "BILLS" },
    { x: "FOOD", y: 0, label: "FOOD" },
    { x: "OTHERS", y: 0, label: "OTHERS" },
    { x: "RENT", y: 0, label: "RENT" },
    { x: "SHOPPING", y: 0, label: "SHOPPING" }
  ];

  return (
    <svg viewBox="-110 -120 800 800">
      <VictoryPie
        standalone={false}
        animate={{
          duration: 3000,
          easing: "exp"
          // onExit: () => {},
          // onEnter: { duration: 500, before: () => ({ y: 0 }) }
        }}
        colorScale={[
          "transparent",
          "#81BEF1",
          "#AD8BF2",
          "#BFF287",
          "#EB5972",
          "#6FF2C5"
        ]}
        padAngle={2}
        style={{ labels: { fontSize: 25, fill: "white" } }}
        labelRadius={300}
        innerRadius={150}
        width={600}
        height={600}
        data={expenses.length === 0 ? defaultData : aux}
      />
    </svg>
  );
};
