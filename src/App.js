import './App.css';
import { useEffect, useState } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'

function App() {
  const [location, setLocation] = useState('Start location');
  const [newLocation, setNewLocation] = useState('');
  const [data, setData] = useState({})

  function LoadPage(){
    console.log('Loading Page');
  }

  function GetData(){
    fetch("/get")
    .then(res => res.json())
    .then(data => setData(data))
    .then(console.log(data))
  }

  function ChangeLocation(e){
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  }

  

  useEffect(()=>{
    GetData();
    LoadPage();
  },[location])

  return (
    <div className="App">
      <Header
      />
      <Content
        data = {data}
        location = {location}
        setNewLocation = {setNewLocation}
        ChangeLocation = {ChangeLocation}/>
      <Footer/>
    </div>
  );
}

export default App;
