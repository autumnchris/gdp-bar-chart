import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import Header from './components/Header';
import Footer from './components/Footer';
import BarChart from './components/BarChart';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

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
      <Header />
      <main>
        {loadingStatus && gdpData.length === 0 ? <LoadingSpinner /> : gdpData.length !== 0 ? <BarChart gdpData={gdpData} /> : <ErrorMessage />}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
