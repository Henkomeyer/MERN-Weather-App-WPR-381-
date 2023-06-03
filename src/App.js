import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'

function App() {
  const [location, setLocation] = useState('50_50');
  const [newLocation, setNewLocation] = useState('');
  const [data, setData] = useState({})
  const [metric, setMetric] = useState('C')
  const [isloading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  function LoadPage(){
    console.log('Loading Page');
    GetData();
  }

  function ChangeMetric(){
    if(metric === 'C'){
      setMetric('F')
    }
    else{
      setMetric('C')
    }
  }

  async function GetData(){
    try{
      setIsLoading(true)
      let data = await fetch(`/weather-api/${location}`)
      console.log(data)
      setData(data)
      setError('')
    }catch(error){
      setError(Error)
    }finally{
      setIsLoading(false)
    }
  }

  function ChangeLocation(e){
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  }

  useEffect(()=>{
    LoadPage();
  },[location])

  return (
    <div className="App">
      <Header
      />
      <Content
        data = {data}
        setNewLocation = {setNewLocation}
        ChangeLocation = {ChangeLocation}
        isloading = {isloading}
        error = {error}
        ChangeMetric = {ChangeMetric}
        metric={metric}
        />
      <Footer/>
    </div>
  );
}

export default App;
