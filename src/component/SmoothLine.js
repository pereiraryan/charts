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
    name: "Page A",

    pv: 240,
    amt: 240,
  },
  {
    name: "Page B",

    pv: 139,
    amt: 220,
  },
  {
    name: "Page C",

    pv: 600,
    amt: 290,
  },
  {
    name: "Page D",

    pv: 300,
    amt: 200,
  },
  {
    name: "Page E",

    pv: 480,
    amt: 281,
  },
  {
    name: "Page F",

    pv: 380,
    amt: 250,
  },
  {
    name: "Page G",

    pv: 430,
    amt: 210,
  },
];

export default function Lines() {
  return (
    <>
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
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#147AD6"
        fill="#147AD6"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#79D2DE"
        fill="#79D2DE"
      />
    </AreaChart>
    <div className="center text-[16px] text-[#7C828A]">
      <span className="text-[#79D2DE]">•</span>Point 01
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#147AD6]">•</span>Point 02
    </div>
    </>
  );
}
