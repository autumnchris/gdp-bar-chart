import React from 'react';

const Tooltip = ({ tooltip }) => {
  const quarter = [
    '01',
    '04',
    '07',
    '10'
  ];

  return <div className="tooltip" style={{ top: tooltip.top, left: tooltip.left }}
  >{tooltip.date.split('-')[0]} Q{quarter.indexOf(tooltip.date.split('-')[1]) + 1}<br/>{`${tooltip.amount}B`}</div>;
}

export default Tooltip;