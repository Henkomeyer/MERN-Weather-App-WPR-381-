import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'

function App() {
  const [zipCode, setZipCode] = useState('13040');
  const [countryCode, setCountrycode] = useState('US');
  const [newZipCode, setNewZipcode] = useState('');
  const [data, setData] = useState({});
  const [metric, setMetric] = useState('C°');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [BackgroundColor, setBackgroundColor] = useState('');


const updateBackgroundColor = () => {

    const currentHour = new Date().getHours();

    if (currentHour < 6) {

      setBackgroundColor('#463f5c');

    } else if (currentHour < 12) {

      setBackgroundColor('#789EBF');

    } else if (currentHour < 15) {

      setBackgroundColor('#F2B705');

    } else if (currentHour < 19) {

      setBackgroundColor('#789EBF');

    } else {

      setBackgroundColor('#463f5c');

    };
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

      //first fetch with zipcode andcountry code
      let response1 = await fetch( `https://thezipcodes.com/api/v1/search?zipCode=${zipCode}&countryCode=${countryCode}&apiKey=83e0f9a4a4c8421444538bf95c698f13` );
      if (!response1.ok) {
        throw new Error('Failed to fetch lat and lon');
      }
      let jsonData1 = await response1.json();
      console.log(jsonData1);
      if(!jsonData1.success){
        throw new Error('Failed to fetch lat and lon')
      }
      let lon = jsonData1.location[0].longitude;
      let lat = jsonData1.location[0].latitude;

      //second fetch with lat and lon
      let response2 = await fetch( `/weather-api/${lat}_${lon}`)
      if (!response2.ok) {
        throw new Error('Failed to fetch weather data');
      }
      setError('');
      let jsonData2 = await response2.json();
      console.log(jsonData2);
      setData(jsonData2);
    } catch (err) {
      setError(err);
    } finally{
      setIsLoading(false);
    } 
  }

  function ChangeLocation(e) {
    e.preventDefault();
    setZipCode(newZipCode);
    setNewZipcode('');
  };

  function LoadPage() {
    setIsLoading(true);
    updateBackgroundColor();
    console.log('Loading Page');
    GetData();
  };

  useEffect(() => {
    LoadPage();
  }, [zipCode]);

  return (
    <div className="App">
      <Header />
      <Content
        data={data}
        setNewZipcode={setNewZipcode}
        ChangeLocation={ChangeLocation}
        isLoading={isLoading}
        error={error}
        ChangeMetric={ChangeMetric}
        metric={metric}
        setCountrycode = {setCountrycode}
        countryCode={countryCode}
        BackgroundColor={BackgroundColor}
        zipCode={zipCode}
      />
      <Footer 
      data={data}
      />
    </div>
  );
}
//Changing background colour based on time

//const App1 = () => {


 //   const interval = setInterval(updateBackgroundColor, 60000); // Update every minute




   // return () => {

    //  clearInterval(interval); // Cleanup interval on component unmount

   // };

 //}, []);




  // return (

  //   <div className="app" style={{ backgroundColor }}></div>

  // );

//};

export default App;

