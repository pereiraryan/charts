import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "JAN",
    uv: 500,
    pv: 500,
    amt: 140,
    cnt: 490
  },
  {
    name: "FEB",
    uv: 268,
    pv: 500,
    amt: 150,
    cnt: 590
  },
  {
    name: "MAR",
    uv: 397,
    pv: 500,
    amt: 289,
    cnt: 350
  },
  {
    name: "APR",
    uv: 180,
    pv: 500,
    amt: 122,
    cnt: 480
  },
  {
    name: "MAY",
    uv: 120,
    pv: 500,
    amt: 110,
    cnt: 460
  },
  {
    name: "JUN",
    uv: 400,
    pv: 500,
    amt: 170,
    cnt: 380
  }
];

export default function ComposedBar() {
  return (
    <ComposedChart
      width={250}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" barSize={20} fill="#F5F6FA" />
      <Line type="monotone" dataKey="uv" stroke="#147AD6" />
    </ComposedChart>
  );
}
