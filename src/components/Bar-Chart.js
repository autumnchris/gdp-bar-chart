import React from 'react';
import { scaleTime, scaleLinear, extent, max } from 'd3';
import Axis from './Axis';
import Bar from './Bar';

const BarChart = ({ gdpData, handleMouseEnter, handleMouseLeave }) => {
  const margin = {
    top: 50,
    right: 40,
    bottom: 40,
    left: 110
  };
  const w = 800;
  const h = w * 0.5;
  const xScale = scaleTime()
    .domain(extent(gdpData, (d) => new Date(d[0])))
    .range([margin.left, w - margin.right]);
  const yScale = scaleLinear()
    .domain([0, max(gdpData, (d) => d[1])])
    .range([h - margin.top, margin.bottom]);

  return (
    <div className="chart-container">
      <svg
        className="bar-chart"
        viewBox={`0 0 ${w} ${h}`}>
        <Axis
          className="x-axis"
          transform={`translate(0, ${h - margin.top})`}
          scale={xScale}
        />
        <Axis
          className="y-axis"
          transform={`translate(${margin.left}, 0)`}
          scale={yScale}
        />
        <text
          className="y-label"
          x="-260"
          y="40"
          transform="rotate(-90)"
        >Gross Domestic Product in Billions</text>
        {gdpData.map((bar, i) => <Bar
          key={i}
          bar={bar}
          x={xScale(new Date(bar[0]))}
          y={yScale(bar[1])}
          width={w / gdpData.length}
          height={h - yScale(bar[1]) - margin.top}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />)}
      </svg>
    </div>
  );
}

export default BarChart;
