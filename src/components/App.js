import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import BarChart from './BarChart';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [gdpData, setGDPData] = useState([]);

  useEffect(() => {
    json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(dataset => {
      setLoadingStatus(false);
      setGDPData(dataset.data);
  
    }).catch(() => {
      setLoadingStatus(false);
      setGDPData([]);
    });
  }, []);

  return (
    <React.Fragment>
      <header>
        <h1>United States GDP</h1>
        <h2>1947-2015</h2>
      </header>
      <main>
        {loadingStatus && gdpData.length === 0 ? <LoadingSpinner /> : gdpData.length !== 0 ? <BarChart gdpData={gdpData} /> : <ErrorMessage />}
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
