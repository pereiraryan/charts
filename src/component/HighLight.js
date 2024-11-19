import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "S",
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: "S",
    uv: 300,
    pv: 398,
    amt: 220,
  },
  {
    name: "M",
    uv: 200,
    pv: 400,
    amt: 220,
  },
  {
    name: "T",
    uv: 270,
    pv: 308,
    amt: 200,
  },
  {
    name: "W",
    uv: 190,
    pv: 400,
    amt: 181,
  },
  {
    name: "H",
    uv: 390,
    pv: 300,
    amt: 250,
  },
  {
    name: "F",
    uv: 340,
    pv: 300,
    amt: 100,
  },
];

export default function HighLight() {
  return (
    <AreaChart
    width={250}
    height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#EC6666" fill="#EC6666" />
    </AreaChart>
  );
}
