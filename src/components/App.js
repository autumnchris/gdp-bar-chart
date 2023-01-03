import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import BarChart from './Bar-Chart';
import ErrorMessage from './Error-Message';
import LoadingSpinner from './Loading-Spinner';

const App = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [loadSuccess, setLoadSuccess] = useState(false);
  const [gdpData, setGDPData] = useState([]);

  useEffect(() => {
    json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(dataset => {
      setLoadingStatus(false);
      setLoadSuccess(true);
      setGDPData(dataset.data);
  
    }).catch(() => {
      setLoadingStatus(false);
      setLoadSuccess(false);
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
        {loadingStatus ? <LoadingSpinner /> : loadSuccess ? <BarChart gdpData={gdpData} /> : <ErrorMessage />}
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
