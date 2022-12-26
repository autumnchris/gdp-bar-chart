import React, { useEffect } from 'react';
import { select, axisBottom, axisLeft } from 'd3';

const Axis = ({ className, transform, scale }) => {

  useEffect(() => {
    let angle;

    if (className === 'x-axis') {
      angle = axisBottom(scale);
    }
    else if (className === 'y-axis') {
      angle = axisLeft(scale);
    }

    select(`.${className}`)
      .call(angle);
  }, [scale]);

  return <g className={className} transform={transform} style={{fontFamily: "'Noto Sans', sans-serif"}}></g>;
}

export default Axis;