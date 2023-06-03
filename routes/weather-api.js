const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = 'f931009061a9a46ff152fc8188a50028'; 
router.get('/:location', async (req, res) => {
  let [lat, lon] = req.params.location.toString().split('_');
  console.log("Params = "+lat+", "+lon)
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    console.log('Fetching Weather Data')
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json(); 
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve weather data' });
  }
  
});

module.exports = router;