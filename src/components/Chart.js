import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
  BarChart
} from "recharts";
const data = [
  {
    name: "Mar 4",
    Sold: 53,
    amt: 1992
  },
  {
    name: "Mar 9",
    Sold: 92,
    amt: 2210
  },
  {
    name: "Mar 14",
    Sold: 132,
    amt: 2290
  },
  {
    name: "Mar 17",
    Sold: 184,
    amt: 2300
  },
  {
    name: "Mar 21",
    Sold: 203,
    amt: 2381
  },
  {
    name: "Mar 25",
    Sold: 232,
    amt: 2400
  },
  {
    name: "Mar 29",
    Sold: 245,
    amt: 2422
  }
];

const data2 = [
  {
    name: "Shoes",
    Units: 24,
    amt: 2400
  },
  {
    name: "Masks",
    Units: 13,
    amt: 2210
  },
  {
    name: "Bags",
    Units: 94,
    amt: 2290
  },
  {
    name: "Hats",
    Units: 39,
    amt: 2000
  },
  {
    name: "Jackets",
    Units: 48,
    amt: 2181
  }
];

class LineC2 extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={350}
        data={data}
        style={{ position: "absolute", bottom: 20, left: -10, width: "97%" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="Sold"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}

class BarC extends PureComponent {
  render() {
    return (
      <BarChart
        width={500}
        height={350}
        style={{ position: "absolute", bottom: 20, left: 0, width: "97%" }}
        data={data2}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Units" fill="#8884d8" />
      </BarChart>
    );
  }
}

module.exports = { LineC2, BarC };
