import React from 'react';

const Bar = ({ bar, x, y, width, height, handleMouseEnter, handleMouseLeave }) => {

  return <rect className="bar" x={x} y={y} width={width} height={height} fill="#4ddbff" onMouseEnter={event => handleMouseEnter(event, bar)} onMouseLeave={event => handleMouseLeave(event)} />;
}

export default Bar;