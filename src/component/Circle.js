import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const data = [{ name: "L1", value: 76 }];

const circleSize = 200;

export default function Circle() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={50}
            outerRadius={80}
            barSize={4}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={circleSize / 2}
              fill="#147AD6"
            />
            <text
              x={circleSize / 2}
              y={circleSize / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              76 %
            </text>
          </RadialBarChart>
        </Slide>
        <Slide index={1}>  <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={50}
            outerRadius={80}
            barSize={4}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={circleSize / 2}
              fill="#147AD6"
            />
            <text
              x={circleSize / 2}
              y={circleSize / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              56 %
            </text>
          </RadialBarChart></Slide>
        <Slide index={2}>  <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={50}
            outerRadius={80}
            barSize={4}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={circleSize / 2}
              fill="#147AD6"
            />
            <text
              x={circleSize / 2}
              y={circleSize / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              56 %
            </text>
          </RadialBarChart></Slide>
      </Slider>

      <ButtonBack>
        <span className="text-[#147AD6]">•</span>
      </ButtonBack>
      <ButtonNext>
        <span className="text-[#7388A95A]">•</span>
      </ButtonNext>
    </CarouselProvider>
  );
}
