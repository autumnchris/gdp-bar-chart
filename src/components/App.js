import React, { useState, useEffect } from 'react';
import { json, select } from 'd3';
import BarChart from './Bar-Chart';
import ErrorMessage from './Error-Message';
import LoadingSpinner from './Loading-Spinner';
import Tooltip from './Tooltip';

const App = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [loadSuccess, setLoadSuccess] = useState(false);
  const [gdpData, setGDPData] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(dataset => {
      setLoadingStatus(false);
      setLoadSuccess(true);
      setGDPData(dataset.data);
  
    }).catch((err) => {
      setLoadingStatus(false);
      setLoadSuccess(false);
      setGDPData([]);
    });
  }, []);

  function handleMouseEnter(event, value) {
    setTooltip({
      date: value[0],
      amount: value[1],
      left: `${(event.pageX - 50)}px`,
      top: `${(event.pageY - 80)}px`
    });

    select(event.currentTarget)
      .attr('fill', 'hsl(0, 0%, 20%)');
  }

  function handleMouseLeave(event) {
    setTooltip(null);

    select(event.currentTarget)
      .attr('fill', '#4ddbff');
  }

  return (
    <React.Fragment>
      <header>
        <h1>United States GDP</h1>
        <h2>1947-2015</h2>
      </header>
      <main>
        {loadingStatus ? <LoadingSpinner /> : loadSuccess ? <BarChart
          gdpData={gdpData}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        /> : <ErrorMessage />}
        {tooltip && <Tooltip tooltip={tooltip} />}
      </main>
      <footer>Created by <a
        href="https://autumnchris.github.io/portfolio"
        target="_blank"
      >Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
