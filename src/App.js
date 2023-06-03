import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Content from './content.js';

function App() {
  const [zipCode, setzipCode] = useState('');
  const [countryCode, setcountryCode] = useState('');
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
    let long; 
    let lat; 
    try {
      setIsLoading(true);
      let response = await fetch( `https://thezipcodes.com/api/v1/search?zipCode=${zipCode}&countryCode=${countryCode}&apiKey=83e0f9a4a4c8421444538bf95c698f13` );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      let jsonData = await response.json();
       long = jsonData.location.longitude;
       lat = jsonData.location.latitude;
      console.log(jsonData);
      setData(jsonData);
      setError('');
    } catch (error) {
      setError(error);
    } 

    try {
      let response = await fetch( `/weather-api/:${long}_${lat}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      let jsonData = await response.json();
      let long = jsonData.location.longitude;
      let lat = jsonData.location.latitude;
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
    setzipCode(zipCode);
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




