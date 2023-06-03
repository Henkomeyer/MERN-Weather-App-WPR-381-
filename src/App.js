import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Content from './content.js';

function App() {
  const [location, setLocation] = useState('50_50');
  const [newLocation, setNewLocation] = useState('');
  const [data, setData] = useState({});
  const [metric, setMetric] = useState('C°');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  function LoadPage() {
    console.log('Loading Page');
    GetData();
  }

  function ChangeMetric() {
    if (metric === 'C°') {
      setMetric('F°');
    } else {
      setMetric('C°');
    }
  }

  async function GetData() {
    try {
      setIsLoading(true);
      let response = await fetch(`/weather-api/${location}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      let jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
      setError('');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  function ChangeLocation(e) {
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  }

  useEffect(() => {
    LoadPage();
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Content
        data={data}
        setNewLocation={setNewLocation}
        ChangeLocation={ChangeLocation}
        isLoading={isLoading}
        error={error}
        ChangeMetric={ChangeMetric}
        metric={metric}
      />
      <Footer />
    </div>
  );
}

export default App;






